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
    const [currentUser, setCurrentUser] = useState(null);
    const [isOpenSideMenu, setIsOpenSideMenu] = useState(false);
    const [downloadedMovies, setDownloadedMovies] = useState(() =>
        localStorage.getItem("downloadedMovies")
            ? JSON.parse(localStorage.getItem("downloadedMovies"))
            : []
    );
    const [selectFilms, setSelectFilms] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        mainApi
            .checkToken()
            .then((res) => {
                setIsLogin(true);
                // fetchData();
                setCurrentUser(res);
                // navigate('/', { replace: true });
            })
            .catch((err) => {
                setIsLogin(false);
                console.log("Ошибка:", err.message);
            });
    }, []);

    const onSubmitSearchForm = (requestMovie) => {
        if (downloadedMovies.length === 0) {
            moviesApi.getMovies().then((movieList) => {
                setDownloadedMovies(movieList);
                console.log(movieList);
                localStorage.setItem(
                    "downloadedMovies",
                    JSON.stringify(movieList)
                );
                setSelectFilms(
                    movieList.filter((movie) => movie.nameRU === requestMovie)
                );
            });
        } else {
            console.log(downloadedMovies);
            setSelectFilms(
                downloadedMovies.filter(
                    (movie) => movie.nameRU === requestMovie
                )
            );
        }
    };

    const handleRegistrationSubmit = (name, email, password) => {
        mainApi
            .signup(name, email, password)
            .then((res) => {
                //
                console.log(res);
                // setTimeout(() => {
                mainApi.signin(email, password).then((res) => {
                    console.log(res);
                    setIsLogin(true);
                    navigate("/movies", { replace: true });
                });
                // }, 1000);
            })
            .catch((err) => console.log(err));
    };

    const handleLoginSubmit = (email, password) => {
        mainApi
            .signin(email, password)
            .then((res) => {
                console.log(res);
                setIsLogin(true);
                navigate("/", { replace: true });
            })
            .catch((err) => console.log(err));
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
                            setIsOpenSideMenu={setIsOpenSideMenu}
                            onSubmitSearchForm={onSubmitSearchForm}
                            selectFilms={selectFilms}
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
                        <ProfilePage setIsOpenSideMenu={setIsOpenSideMenu} />
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
