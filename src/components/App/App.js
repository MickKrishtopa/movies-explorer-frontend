import "./App.css";

import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

import MainPage from "../MainPage/MainPage";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import SideMenu from "../SideMenu/SideMenu";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/signin' element={<Login />} />
                <Route path='/signup' element={<Register />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
            {/* <SideMenu /> */}
        </>
    );
}

export default App;
