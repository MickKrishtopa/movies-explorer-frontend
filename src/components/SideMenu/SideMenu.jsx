import "./SideMenu.css";
import { Link } from "react-router-dom";

export default function SideMenu({ isOpenSideMenu, setIsOpenSideMenu }) {
    return (
        <div
            className={
                isOpenSideMenu ? "side-menu side-menu_open" : "side-menu"
            }>
            <nav className='side-menu__container'>
                <button
                    type='button'
                    onClick={() => setIsOpenSideMenu(false)}
                    className='side-menu__close-button'
                />
                <ul className='side-menu__link-area'>
                    <li>
                        <Link
                            to='/'
                            className='side-menu__link'
                            onClick={() => setIsOpenSideMenu(false)}>
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/movies'
                            className='side-menu__link side-menu__link_type_active'
                            onClick={() => setIsOpenSideMenu(false)}>
                            Фильмы
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='saved-movies'
                            className='side-menu__link'
                            onClick={() => setIsOpenSideMenu(false)}>
                            Сохраненные фильмы
                        </Link>
                    </li>
                </ul>
                <Link
                    to='/profile'
                    className='side-menu__profile-area'
                    onClick={() => setIsOpenSideMenu(false)}>
                    <p className='side-menu__profile'>Аккаунт</p>
                    <div className='side-menu__profile-icon'></div>
                </Link>
            </nav>
        </div>
    );
}
