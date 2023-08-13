import "./LoginPage.css";

import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <div className='login-page'>
            <div className='login-page__header'>
                {" "}
                <Header />
            </div>
            <main>
                <section>
                    <form className='login-page__form'>
                        <h1 className='login-page__title'>Рады видеть!</h1>

                        <div className='login-page__input-area'>
                            <span className='login-page__input-name'>
                                E-mail
                            </span>
                            <input
                                placeholder='Введите E-mail'
                                type='email'
                                required
                                className='login-page__input'
                                defaultValue='pochta@yandex.ru'></input>
                            <span className='login-page__input-error'></span>
                        </div>
                        <div className='login-page__input-area'>
                            <span className='login-page__input-name'>
                                Пароль
                            </span>
                            <input
                                placeholder='Введите пароль'
                                type='password'
                                minLength='8'
                                required
                                className='login-page__input'
                                defaultValue='••••••••••••••'></input>
                            <span className='login-page__input-error'></span>
                        </div>
                        <button type='submit' className='login-page__button'>
                            Войти
                        </button>
                        <span className='login-page__caption'>
                            Еще не зарегистрированы?&nbsp;
                            <Link
                                to='/signup'
                                className='login-page__caption-span'>
                                Регистрация
                            </Link>
                        </span>
                    </form>
                </section>
            </main>
        </div>
    );
}
