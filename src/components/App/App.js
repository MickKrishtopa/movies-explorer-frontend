import "./App.css";

import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import MainPage from "../../pages/MainPage/MainPage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import SavedMoviesPage from "../../pages/SavedMoviesPage/SavedMoviesPage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import SideMenu from "../SideMenu/SideMenu";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import {
    INITIAL_CARDS_QTY,
    CARDS_PER_ROW,
    SCREEN_WIDTH,
} from "../../utils/constants";
import Preloader from "../Preloader/Preloader";
import Alert from "../Alert/Alert";

function App() {
    const [alert, setAlert] = useState("");
    const [initialization, setInitialization] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [isOpenSideMenu, setIsOpenSideMenu] = useState(false);
    const [isShort, setIsShort] = useState(
        localStorage.getItem("isShort") === "false" ||
            localStorage.getItem("isShort") === null
            ? false
            : true
    );
    const [isShortSaved, setIsShortSaved] = useState(false);
    const [allDownloadedMovies, setAllDownloadedMovies] = useState([]);
    const [selectedFilms, setSelectedFilms] = useState([]);
    const [searchInputValue, setSearchInputValue] = useState("");
    const [userMovies, setUserMovies] = useState([]);
    const [userMoviesToShow, setUserMoviesToShow] = useState([]);

    const [additionRows, setAdditionRows] = useState(0);
    const [cardsPerRow, setCardsPerRow] = useState(3);
    const [initialCardsQty, setInitialCardsQty] = useState(12);

    const navigate = useNavigate();

    // Достаем все фильмы из ЛС и записываем в стейт
    useEffect(() => {
        if (!localStorage.getItem("downloadedMovies")) {
            return;
        }
        setAllDownloadedMovies(
            JSON.parse(localStorage.getItem("downloadedMovies"))
        );
    }, [localStorage.getItem("downloadedMovies")]);

    //Выбираем фильмы для отображения
    useEffect(() => {
        const selectedFilms = allDownloadedMovies
            .filter(
                (movie) =>
                    movie.nameRU
                        .toLowerCase()
                        .includes(searchInputValue.toLowerCase()) ||
                    movie.nameEN
                        .toLowerCase()
                        .includes(searchInputValue.toLowerCase())
            )
            .filter((movie) => (isShort ? movie.duration < 41 : movie));

        !!searchInputValue && setSelectedFilms(selectedFilms);
        !!searchInputValue &&
            localStorage.setItem(
                "selectedFilms",
                JSON.stringify(selectedFilms)
            );
    }, [searchInputValue, isShort]);

    // Достаем найденные фильмы из ЛС и записываем в стейт
    useEffect(() => {
        if (!localStorage.getItem("selectedFilms")) {
            return;
        }
        setSelectedFilms(JSON.parse(localStorage.getItem("selectedFilms")));
    }, [localStorage.getItem("selectedFilms")]);

    // Достаем значение формы поиска из ЛС и записываем в стейт
    useEffect(() => {
        if (!localStorage.getItem("searchInputValue")) {
            return;
        }
        setSearchInputValue(localStorage.getItem("searchInputValue"));
    }, [localStorage.getItem("searchInputValue")]);

    // Проверяем авторизацию
    useEffect(() => {
        setIsLoading(true);
        mainApi
            .checkToken()
            .then((res) => {
                setIsLogin(true);
                setCurrentUser(res);
            })
            .catch((err) => {
                setIsLogin(false);
            })
            .finally(() => {
                setIsLoading(false);
                setInitialization(true);
            });
    }, []);

    // Загружаем фильмы юзера если они есть
    useEffect(() => {
        if (!isLogin) {
            return;
        }
        getUserMovies();
    }, [isLogin]);

    const templatePagePerWidth = (width) => {
        if (width < SCREEN_WIDTH.TABLET) {
            setInitialCardsQty(INITIAL_CARDS_QTY.MOBILE);
            setCardsPerRow(CARDS_PER_ROW.MOBILE);
        } else if (
            width > SCREEN_WIDTH.TABLET &&
            width < SCREEN_WIDTH.DESKTOP
        ) {
            setInitialCardsQty(INITIAL_CARDS_QTY.TABLET);
            setCardsPerRow(CARDS_PER_ROW.TABLET);
        } else if (width > SCREEN_WIDTH.DESKTOP) {
            setInitialCardsQty(INITIAL_CARDS_QTY.DESKTOP);
            setCardsPerRow(CARDS_PER_ROW.DESKTOP);
        }
    };

    const PAGE = useRef();

    const observer = useRef(
        new ResizeObserver((entries) => {
            const { width } = entries[0].contentRect;
            // console.log("Ширина::::", width);
            templatePagePerWidth(entries[0].contentRect.width);
        })
    );

    // Проверям ширину экрана
    useEffect(() => {
        observer.current.observe(PAGE.current);
    }, [PAGE, observer]);

    useEffect(() => {
        setUserMoviesToShow(userMovies);
    }, [userMovies]);

    const onSubmitSearchForm = async (requestMovie) => {
        //Если первый запрос и в локале нет данных, запрашиваем их
        if (allDownloadedMovies.length === 0) {
            try {
                setIsLoading(true);
                // мы делам фетч
                const movieList = await moviesApi.getMovies();
                //меняем стейт
                setAllDownloadedMovies(movieList);
                //записываем в ЛС
                localStorage.setItem(
                    "downloadedMovies",
                    JSON.stringify(movieList)
                );
            } catch (err) {
                console.log(err);
                setAlert("Что-то пошло не так.");
            } finally {
                setIsLoading(false);
            }
        }

        localStorage.setItem("searchInputValue", requestMovie);
        setSearchInputValue(requestMovie);
    };

    const onSubmitSavedSearchForm = (request) => {
        // if (request) {
        const userMoviesToShow = userMovies
            .filter(
                (movie) =>
                    movie.nameRU
                        .toLowerCase()
                        .includes(request.toLowerCase()) ||
                    movie.nameEN.toLowerCase().includes(request.toLowerCase())
            )
            .filter((movie) => (isShortSaved ? movie.duration < 41 : movie));
        // }
        // const userMoviesToShow = userMovies.filter((movie) =>
        //     isShortSaved ? movie.duration < 41 : movie
        // );
        setUserMoviesToShow(userMoviesToShow);
    };

    const handleRegistrationSubmit = (name, email, password) => {
        setIsLoading(true);
        mainApi
            .signup(name, email, password)
            .then(() => {
                mainApi.signin(email, password).then((res) => {
                    mainApi.getUserInfo().then((res) => setCurrentUser(res));
                    setIsLogin(true);
                    navigate("/movies", { replace: true });
                });
            })
            .catch(async (err) => {
                try {
                    const res = await err.json();
                    setAlert(res.message);
                } catch {}

                setIsLogin(false);
            })
            .finally(() => setIsLoading(false));
    };

    const handleLoginSubmit = (email, password) => {
        setIsLoading(true);

        mainApi
            .signin(email, password)
            .then((res) => {
                mainApi.getUserInfo().then((res) => setCurrentUser(res));
                setIsLogin(true);
                navigate("/movies", { replace: true });
            })
            .catch(async (err) => {
                try {
                    const res = await err.json();
                    setAlert(res.message);
                } catch {}

                setIsLogin(false);
            })
            .finally(() => setIsLoading(false));
    };

    const handleLogoutSubmit = () => {
        setIsLoading(true);
        mainApi
            .signout()
            .then((res) => {
                setIsLogin(false);
                navigate("/", { replace: true });
                localStorage.clear();
                setCurrentUser({});
                setSelectedFilms([]);
                setUserMovies([]);
                setUserMoviesToShow([]);
                setSearchInputValue("");
                console.log(res);
                setAlert(res.message);
            })
            .catch((err) => console.log(err))
            .finally(setIsLoading(false));
    };

    const getUserMovies = async () => {
        try {
            setIsLoading(true);
            const userMovies = await mainApi.getSavedMovies();
            setUserMovies(userMovies);
            setUserMoviesToShow(userMovies);
            localStorage.setItem("userMovies", JSON.stringify(userMovies));
        } catch (err) {
            console.log(err);
            const res = await err.json();
            setAlert(res.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleAddSavedMovie = async (moviesData) => {
        try {
            // setIsLoading(true);
            const newSavedMovie = await mainApi.createSaveMovie(moviesData);
            setUserMovies([newSavedMovie, ...userMovies]);
        } catch (err) {
            console.log(err);
            const res = await err.json();
            setAlert(res.message);
        } finally {
            // setIsLoading(false);
        }
    };

    const handleRemoveSavedMovie = async (id) => {
        try {
            // setIsLoading(true);
            const removedMovie = await mainApi.removeSavedMovieById(id);
            setUserMovies(
                userMovies.filter((movie) => movie._id !== removedMovie._id)
            );
        } catch (err) {
            console.log(err);
            const res = await err.json();
            setAlert(res.message);
        } finally {
            // setIsLoading(false);
        }
    };

    const handleAddCardsRow = () => {
        setAdditionRows(additionRows + 1);
    };

    const handleSubmitChangeProfile = async (name, email) => {
        try {
            const updatedUser = await mainApi.changeUserInfo(name, email);
            setCurrentUser(updatedUser);
        } catch (err) {
            console.log(err);
            const res = await err.json();
            setAlert(res.message);
        }
    };

    return (
        <div ref={PAGE}>
            <CurrentUserContext.Provider value={{ currentUser, isLogin }}>
                {!initialization ? (
                    <Preloader />
                ) : (
                    <Routes>
                        <Route
                            path='/'
                            element={
                                <MainPage
                                    setIsOpenSideMenu={setIsOpenSideMenu}
                                    isLogin={isLogin}
                                />
                            }
                        />
                        <Route
                            path='/signin'
                            element={
                                <LoginPage
                                    isLoading={isLoading}
                                    onSubmit={handleLoginSubmit}
                                />
                            }
                        />
                        <Route
                            path='/signup'
                            element={
                                <RegisterPage
                                    isLoading={isLoading}
                                    onSubmit={handleRegistrationSubmit}
                                />
                            }
                        />
                        <Route
                            path='/movies'
                            element={
                                <ProtectedRoute
                                    isLoading={isLoading}
                                    element={MoviesPage}
                                    allDownloadedMovies={allDownloadedMovies}
                                    handleAddSaveMovie={handleAddSavedMovie}
                                    setIsShort={setIsShort}
                                    isShort={isShort}
                                    searchInputValue={searchInputValue}
                                    setIsOpenSideMenu={setIsOpenSideMenu}
                                    onSubmitSearchForm={onSubmitSearchForm}
                                    selectedFilms={selectedFilms}
                                    userMovies={userMovies}
                                    handleRemoveSaveMovie={
                                        handleRemoveSavedMovie
                                    }
                                    additionRows={additionRows}
                                    cardsPerRow={cardsPerRow}
                                    initialCardsQty={initialCardsQty}
                                    handleAddCardsRow={handleAddCardsRow}
                                />
                            }
                        />
                        <Route
                            path='/saved-movies'
                            element={
                                <ProtectedRoute
                                    element={SavedMoviesPage}
                                    // isLogin={isLogin}

                                    setIsOpenSideMenu={setIsOpenSideMenu}
                                    userMovies={userMoviesToShow}
                                    handleAddSaveMovie={handleAddSavedMovie}
                                    handleRemoveSaveMovie={
                                        handleRemoveSavedMovie
                                    }
                                    // searchInputValue={""}
                                    isShort={isShortSaved}
                                    setIsShort={setIsShortSaved}
                                    onSubmitSearchForm={onSubmitSavedSearchForm}
                                    setUserMoviesToShow={setUserMoviesToShow}
                                />
                            }
                        />
                        <Route
                            path='/profile'
                            element={
                                <ProtectedRoute
                                    element={ProfilePage}
                                    setIsOpenSideMenu={setIsOpenSideMenu}
                                    handleLogoutSubmit={handleLogoutSubmit}
                                    handleSubmitChangeProfile={
                                        handleSubmitChangeProfile
                                    }
                                />
                            }
                        />
                        <Route path='*' element={<NotFoundPage />} />
                    </Routes>
                )}
                <SideMenu
                    isOpenSideMenu={isOpenSideMenu}
                    setIsOpenSideMenu={setIsOpenSideMenu}
                />
            </CurrentUserContext.Provider>
            {!!alert && <Alert alert={alert} setAlert={setAlert} />}
        </div>
    );
}

export default App;
