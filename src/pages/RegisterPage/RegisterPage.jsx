import "./RegisterPage.css";

import Header from "../../components/Header/Header";

export default function RegisterPage() {
    return (
        <>
            <div className='register-page__header'>
                <Header />
            </div>
            <form className='register-page__form'>
                <h1 className='register-page__title'>Добро пожаловать!</h1>
                <div className='register-page__input-area'>
                    <span className='register-page__input-name'>Имя</span>
                    <input
                        className='register-page__input'
                        value='Виталий'></input>
                    <span className='register-page__input-error'></span>
                </div>
                <div className='register-page__input-area'>
                    <span className='register-page__input-name'>E-mail</span>
                    <input
                        className='register-page__input'
                        value='pochta@yandex.ru'></input>
                    <span className='register-page__input-error'></span>
                </div>
                <div className='register-page__input-area'>
                    <span className='register-page__input-name'>Пароль</span>
                    <input
                        className='register-page__input'
                        value='••••••••••••••'></input>
                    <span className='register-page__input-error'>
                        Что-то пошло не так...
                    </span>
                </div>
                <button className='register-page__button'>
                    Зарегистрироваться
                </button>
                <span className='register-page__caption'>
                    Уже зарегистрированы?&nbsp;
                    <span className='register-page__caption' to='/sign-up'>
                        Войти
                    </span>
                </span>
            </form>
        </>
    );
}
