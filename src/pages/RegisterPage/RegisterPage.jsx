import "./RegisterPage.css";

import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

export default function RegisterPage() {
    return (
        <div className='register-page'>
            <div className='register-page__header'>
                <Header />
            </div>
            <main>
                <section>
                    <form className='register-page__form'>
                        <h1 className='register-page__title'>
                            Добро пожаловать!
                        </h1>
                        <div className='register-page__input-area'>
                            <span className='register-page__input-name'>
                                Имя
                            </span>
                            <input
                                placeholder='Введите имя'
                                type='text'
                                minLength='2'
                                maxLength='40'
                                required
                                className='register-page__input'
                                defaultValue='Виталий'></input>
                            <span className='register-page__input-error'></span>
                        </div>
                        <div className='register-page__input-area'>
                            <span className='register-page__input-name'>
                                E-mail
                            </span>
                            <input
                                placeholder='Введите E-mail'
                                type='email'
                                minLength='5'
                                maxLength='40'
                                required
                                className='register-page__input'
                                defaultValue='pochta@yandex.ru'></input>
                            <span className='register-page__input-error'></span>
                        </div>
                        <div className='register-page__input-area'>
                            <span className='register-page__input-name'>
                                Пароль
                            </span>
                            <input
                                placeholder='Введите пароль'
                                type='password'
                                minLength='8'
                                maxLength='40'
                                required
                                className='register-page__input'
                                defaultValue='••••••••••••••'></input>
                            <span className='register-page__input-error'>
                                Что-то пошло не так...
                            </span>
                        </div>
                        <button type='submit' className='register-page__button'>
                            Зарегистрироваться
                        </button>
                        <span className='register-page__caption'>
                            Уже зарегистрированы?&nbsp;
                            <Link
                                className='register-page__caption-span'
                                to='/signin'>
                                Войти
                            </Link>
                        </span>
                    </form>
                </section>
            </main>
        </div>
    );
}
