import "./RegisterPage.css";

import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function RegisterPage({ onSubmit }) {
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
        const { name, email, password } = formValue;
        onSubmit(name, email, password);
    };

    return (
        <div className='register-page'>
            <div className='register-page__header'>
                <Header />
            </div>
            <main>
                <section>
                    <form
                        className='register-page__form'
                        onSubmit={handleSubmit}>
                        <h1 className='register-page__title'>
                            Добро пожаловать!
                        </h1>
                        <div className='register-page__input-area'>
                            <span className='register-page__input-name'>
                                Имя
                            </span>
                            <input
                                name='name'
                                placeholder='Введите имя'
                                type='text'
                                minLength='2'
                                maxLength='40'
                                required
                                className='register-page__input'
                                defaultValue='Виталий'
                                onChange={handleChangeInput}></input>
                            <span className='register-page__input-error'>
                                {errorMessage.name}
                            </span>
                        </div>
                        <div className='register-page__input-area'>
                            <span className='register-page__input-name'>
                                E-mail
                            </span>
                            <input
                                name='email'
                                placeholder='Введите E-mail'
                                type='email'
                                minLength='5'
                                maxLength='40'
                                required
                                className='register-page__input'
                                defaultValue='pochta@mail.ru'
                                onChange={handleChangeInput}></input>
                            <span className='register-page__input-error'>
                                {" "}
                                {errorMessage.email}
                            </span>
                        </div>
                        <div className='register-page__input-area'>
                            <span className='register-page__input-name'>
                                Пароль
                            </span>
                            <input
                                placeholder='Введите пароль'
                                type='password'
                                name='password'
                                minLength='3'
                                maxLength='40'
                                required
                                className='register-page__input'
                                defaultValue='111'
                                onChange={handleChangeInput}></input>
                            <span className='register-page__input-error'>
                                {errorMessage.password}
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
