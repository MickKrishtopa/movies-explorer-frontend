import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation({ setIsOpenSideMenu }) {
    const isLogin = true;
    return (
        <nav className='navigation'>
            {!isLogin ? (
                <ul className='navigation__link-area navigation__link-area_type_non-auth-user'>
                    <li>
                        <Link to='/signup' className='navigation__signup'>
                            Регистрация
                        </Link>
                    </li>
                    <li>
                        <Link to='/signin' className='navigation__signin'>
                            Войти
                        </Link>
                    </li>
                </ul>
            ) : (
                <>
                    <ul className='navigation__link-area navigation__link-area_type_auth-user'>
                        <li>
                            <Link to='/movies' className='navigation__link'>
                                Фильмы
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/saved-movies'
                                className='navigation__link'>
                                Сохранённые фильмы
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/profile'
                                className='navigation__profile-area'>
                                <p className='navigation__profile'>Аккаунт</p>
                                <div className='navigation__profile-icon'></div>
                            </Link>
                        </li>
                    </ul>
                    <button
                        type='button'
                        onClick={() => setIsOpenSideMenu(true)}
                        className='navigation__button-menu'></button>
                </>
            )}
        </nav>
    );
}
