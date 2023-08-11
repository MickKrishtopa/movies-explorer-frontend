import "./Header.css";
import headerLogo from "../../images/header__logo.svg";

import { Link } from "react-router-dom";

export default function Header({ children }) {
    return (
        <header className='header'>
            <Link to='/'>
                <img
                    src={headerLogo}
                    alt='Логотип проекта'
                    className='header__logo'></img>
            </Link>

            {children}
        </header>
    );
}
