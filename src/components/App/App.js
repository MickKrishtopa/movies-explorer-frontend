import "./App.css";

import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

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

function App() {
    const [isLogin, setIsLogin] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [isOpenSideMenu, setIsOpenSideMenu] = useState(false);
    const [isShort, setIsShort] = useState(false);
    const [allDownloadedMovies, setAllDownloadedMovies] = useState([]);
    const [selectedFilms, setSelectedFilms] = useState([]);
    const [searchInputValue, setSearchInputValue] = useState("");

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
            .filter((movie) =>
                movie.nameRU.toLowerCase().includes(requestMovie.toLowerCase())
            )
            .filter((movie) => (isShort ? movie.duration < 41 : movie));

        setSelectedFilms(selectedFilms);
        localStorage.setItem("selectedFilms", JSON.stringify(selectedFilms));
        localStorage.setItem("searchInputValue", JSON.stringify(requestMovie));
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
            })
            .catch((err) => console.log(err));
    };

    const handleAddSaveMovie = (moviesData) => {
        mainApi.createSaveMovie(moviesData).then((res) => {
            console.log(res);
        });
    };

    return (
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
                            handleAddSaveMovie={handleAddSaveMovie}
                            setIsShort={setIsShort}
                            isShort={isShort}
                            searchInputValue={searchInputValue}
                            setIsOpenSideMenu={setIsOpenSideMenu}
                            onSubmitSearchForm={onSubmitSearchForm}
                            selectedFilms={selectedFilms}
                        />
                    }
                />
                <Route
                    path='/saved-movies'
                    element={
                        <SavedMoviesPage
                            setIsOpenSideMenu={setIsOpenSideMenu}
                        />
                    }
                />
                <Route
                    path='/profile'
                    element={
                        <ProfilePage
                            setIsOpenSideMenu={setIsOpenSideMenu}
                            handleLogoutSubmit={handleLogoutSubmit}
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
    );
}

export default App;
