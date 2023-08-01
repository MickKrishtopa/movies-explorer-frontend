import "./Header.css";
import headerLogo from "../../images/header__logo.svg";
import Navigation from "../Navigation/Navigation";

export default function Header() {
    return (
        <header className='header'>
            <img
                src={headerLogo}
                alt='Логотип проекта'
                className='header__logo'></img>
            <Navigation />
        </header>
    );
}
