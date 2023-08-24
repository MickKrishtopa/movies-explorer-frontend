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

import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import {
    INITIAL_CARDS_QTY,
    CARDS_PER_ROW,
    SCREEN_WIDTH,
} from "../../utils/constants";

function App() {
    const [isLogin, setIsLogin] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [isOpenSideMenu, setIsOpenSideMenu] = useState(false);
    const [isShort, setIsShort] = useState(false);
    const [allDownloadedMovies, setAllDownloadedMovies] = useState([]);
    const [selectedFilms, setSelectedFilms] = useState([]);
    const [searchInputValue, setSearchInputValue] = useState("");
    const [userMovies, setUserMovies] = useState([]);

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

    // Достаем значение чекбокса из ЛС и записываем в стейт
    useEffect(() => {
        isShort
            ? localStorage.setItem("isShort", true)
            : localStorage.setItem("isShort", false);
        setSearchInputValue(localStorage.getItem("searchInputValue"));
    }, [isShort]);

    // Проверяем авторизацию
    useEffect(() => {
        mainApi
            .checkToken()
            .then((res) => {
                setIsLogin(true);
                setCurrentUser(res);
            })
            .catch((err) => {
                setIsLogin(false);
                console.log("Ошибка:", err.message);
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
            // setAdditionRows(0);
        } else if (
            width > SCREEN_WIDTH.TABLET &&
            width < SCREEN_WIDTH.DESKTOP
        ) {
            setInitialCardsQty(INITIAL_CARDS_QTY.TABLET);
            setCardsPerRow(CARDS_PER_ROW.TABLET);
            // setAdditionRows(0);
        } else if (width > SCREEN_WIDTH.DESKTOP) {
            setInitialCardsQty(INITIAL_CARDS_QTY.DESKTOP);
            setCardsPerRow(CARDS_PER_ROW.DESKTOP);
            // setAdditionRows(0);
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

    const onSubmitSearchForm = (requestMovie) => {
        if (allDownloadedMovies.length === 0) {
            moviesApi.getMovies().then((movieList) => {
                setAllDownloadedMovies(movieList);
                localStorage.setItem(
                    "downloadedMovies",
                    JSON.stringify(movieList)
                );
            });
        }

        const selectedFilms = allDownloadedMovies
            .filter(
                (movie) =>
                    movie.nameRU
                        .toLowerCase()
                        .includes(requestMovie.toLowerCase()) ||
                    movie.nameEN
                        .toLowerCase()
                        .includes(requestMovie.toLowerCase())
            )
            .filter((movie) => (isShort ? movie.duration < 41 : movie));

        setSelectedFilms(selectedFilms);
        // setAdditionRows(0);
        localStorage.setItem("selectedFilms", JSON.stringify(selectedFilms));
        localStorage.setItem("searchInputValue", requestMovie);
    };

    const handleRegistrationSubmit = (name, email, password) => {
        mainApi
            .signup(name, email, password)
            .then(() => {
                mainApi.signin(email, password).then((res) => {
                    console.log(res);
                    setIsLogin(true);
                    navigate("/movies", { replace: true });
                });
            })
            .catch((err) => console.log(err));
    };

    const handleLoginSubmit = (email, password) => {
        mainApi
            .signin(email, password)
            .then((res) => {
                console.log(res);
                setCurrentUser(res);
                setIsLogin(true);
                navigate("/", { replace: true });
            })
            .catch((err) => console.log(err));
    };

    const handleLogoutSubmit = () => {
        mainApi
            .signout()
            .then((res) => {
                setIsLogin(false);
                navigate("/", { replace: true });
                localStorage.clear();
                setCurrentUser({});
                console.log(res);
            })
            .catch((err) => console.log(err));
    };

    const getUserMovies = async () => {
        try {
            const userMovies = await mainApi.getSavedMovies();
            setUserMovies(userMovies);
            localStorage.setItem("userMovies", JSON.stringify(userMovies));
        } catch (err) {
            console.log(err);
        }
    };

    const handleAddSavedMovie = async (moviesData) => {
        try {
            const newSavedMovie = await mainApi.createSaveMovie(moviesData);
            setUserMovies([newSavedMovie, ...userMovies]);
        } catch (err) {
            console.log(err);
        }
    };

    const handleRemoveSavedMovie = async (id) => {
        try {
            const removedMovie = await mainApi.removeSavedMovieById(id);
            setUserMovies(
                userMovies.filter((movie) => movie._id !== removedMovie._id)
            );
        } catch (err) {
            console.log(err);
        }
    };

    const handleAddCardsRow = () => {
        setAdditionRows(additionRows + 1);
    };

    const handleToggleCheckbox = () => {};

    const handleSubmitChangeProfile = async (name, email) => {
        try {
            const updatedUser = await mainApi.changeUserInfo(name, email);
            setCurrentUser(updatedUser);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div ref={PAGE}>
            <CurrentUserContext.Provider value={{ currentUser, isLogin }}>
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
                        element={<LoginPage onSubmit={handleLoginSubmit} />}
                    />
                    <Route
                        path='/signup'
                        element={
                            <RegisterPage onSubmit={handleRegistrationSubmit} />
                        }
                    />
                    <Route
                        path='/movies'
                        element={
                            <MoviesPage
                                handleAddSaveMovie={handleAddSavedMovie}
                                setIsShort={setIsShort}
                                isShort={isShort}
                                searchInputValue={searchInputValue}
                                setIsOpenSideMenu={setIsOpenSideMenu}
                                onSubmitSearchForm={onSubmitSearchForm}
                                selectedFilms={selectedFilms}
                                userMovies={userMovies}
                                handleRemoveSaveMovie={handleRemoveSavedMovie}
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
                            <SavedMoviesPage
                                setIsOpenSideMenu={setIsOpenSideMenu}
                                userMovies={userMovies}
                                handleAddSaveMovie={handleAddSavedMovie}
                                handleRemoveSaveMovie={handleRemoveSavedMovie}
                            />
                        }
                    />
                    <Route
                        path='/profile'
                        element={
                            <ProfilePage
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
                <SideMenu
                    isOpenSideMenu={isOpenSideMenu}
                    setIsOpenSideMenu={setIsOpenSideMenu}
                />
            </CurrentUserContext.Provider>
        </div>
    );
}

export default App;
