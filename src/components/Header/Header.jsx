import "./Header.css";
import headerLogo from "../../images/header__logo.svg";

export default function Header({ children }) {
    return (
        <header className='header'>
            <img
                src={headerLogo}
                alt='Логотип проекта'
                className='header__logo'></img>
            {children}
        </header>
    );
}
