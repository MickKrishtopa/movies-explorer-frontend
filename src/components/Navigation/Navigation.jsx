import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
    const isLogin = true;
    return (
        <div className='navigation'>
            <div className='navigation__link-area'>
                {!isLogin ? (
                    <>
                        <Link to='/signup' className='navigation__signup'>
                            Регистрация
                        </Link>
                        <Link to='/signin' className='navigation__signin'>
                            Войти
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to='/movies' className='navigation__link'>
                            Фильмы
                        </Link>
                        <Link to='/saved-movies' className='navigation__link'>
                            Сохранённые фильмы
                        </Link>

                        <Link
                            to='/profile'
                            className='navigation__profile-area'>
                            <p className='navigation__profile'>Аккаунт</p>
                            <div className='navigation__profile-icon'></div>
                        </Link>
                    </>
                )}
            </div>
            <button className='navigation__button-menu'></button>
        </div>
    );
}
