import "./RegisterPage.css";

import { EMAIL_REGEX } from "../../utils/constants";

import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RegisterPage({ onSubmit, isLoading }) {
    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [errorMessage, setErrorMessage] = useState({
        name: " ",
        email: " ",
        password: " ",
    });

    const [isValid, setIsValid] = useState(false);

    const checkValid = (errorMessage) => {
        return Object.values(errorMessage).every((err) => err === "");
    };

    const checkEmail = (email) => {
        return !!String(email).toLowerCase().match(EMAIL_REGEX);
    };

    const handleChangeInput = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
        if (e.target.name === "email") {
            const isValid = checkEmail(e.target.value);

            if (!isValid) {
                setErrorMessage({
                    ...errorMessage,
                    [e.target.name]: "Некооректный e-mail",
                });
            } else {
                setErrorMessage({ ...errorMessage, [e.target.name]: "" });
            }
        } else {
            setErrorMessage({
                ...errorMessage,
                [e.target.name]: e.target.validationMessage,
            });
        }

        // console.log(errorMessage);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password } = formValue;
        onSubmit(name, email, password);
    };

    useEffect(() => {
        setIsValid(checkValid(errorMessage));
    }, [errorMessage]);

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
                                onChange={handleChangeInput}></input>
                            <span className='register-page__input-error'>
                                {errorMessage.password}
                            </span>
                        </div>
                        <button
                            type='submit'
                            className={
                                isValid
                                    ? "register-page__button"
                                    : "register-page__button register-page__button_disabled"
                            }
                            disabled={!isValid && isLoading}>
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
