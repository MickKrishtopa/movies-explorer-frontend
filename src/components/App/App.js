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
    return (
        <>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/signin' element={<LoginPage />} />
                <Route path='/signup' element={<RegisterPage />} />
                <Route path='/movies' element={<MoviesPage />} />
                <Route path='/saved-movies' element={<SavedMoviesPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
            <SideMenu />
        </>
    );
}

export default App;
