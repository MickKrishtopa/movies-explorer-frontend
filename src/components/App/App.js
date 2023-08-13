import "./App.css";

import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import MainPage from "../../pages/MainPage/MainPage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import SavedMoviesPage from "../../pages/SavedMoviesPage/SavedMoviesPage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import SideMenu from "../SideMenu/SideMenu";

function App() {
    const [isLogin, setIsLogin] = useState(true);
    const [isOpenSideMenu, setIsOpenSideMenu] = useState(false);

    return (
        <>
            <Routes>
                <Route
                    path='/'
                    element={<MainPage setIsOpenSideMenu={setIsOpenSideMenu} />}
                />
                <Route path='/signin' element={<LoginPage />} />
                <Route path='/signup' element={<RegisterPage />} />
                <Route
                    path='/movies'
                    element={
                        <MoviesPage setIsOpenSideMenu={setIsOpenSideMenu} />
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
        </>
    );
}

export default App;
