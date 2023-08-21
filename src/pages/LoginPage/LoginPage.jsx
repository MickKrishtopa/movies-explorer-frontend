import "./LoginPage.css";

import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function LoginPage({ onSubmit }) {
    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [errorMessage, setErrorMessage] = useState({});

    const handleChangeInput = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
        setErrorMessage({
            ...errorMessage,
            [e.target.name]: e.target.validationMessage,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = formValue;
        onSubmit(email, password);
    };

    return (
        <div className='login-page'>
            <div className='login-page__header'>
                {" "}
                <Header />
            </div>
            <main>
                <section>
                    <form className='login-page__form' onSubmit={handleSubmit}>
                        <h1 className='login-page__title'>Рады видеть!</h1>

                        <div className='login-page__input-area'>
                            <span className='login-page__input-name'>
                                E-mail
                            </span>
                            <input
                                onChange={handleChangeInput}
                                placeholder='Введите E-mail'
                                type='email'
                                name='email'
                                required
                                className='login-page__input'
                                defaultValue='pochta@mail.ru'></input>
                            <span className='login-page__input-error'></span>
                        </div>
                        <div className='login-page__input-area'>
                            <span className='login-page__input-name'>
                                Пароль
                            </span>
                            <input
                                onChange={handleChangeInput}
                                placeholder='Введите пароль'
                                type='password'
                                minLength='3'
                                maxLength='40'
                                name='password'
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
