import "./LoginPage.css";

import Header from "../../components/Header/Header";

export default function LoginPage() {
    return (
        <>
            <div className='login-page__header'>
                {" "}
                <Header />
            </div>
            <form className='login-page__form'>
                <h1 className='login-page__title'>Рады видеть!</h1>

                <div className='login-page__input-area'>
                    <span className='login-page__input-name'>E-mail</span>
                    <input
                        className='login-page__input'
                        value='pochta@yandex.ru'></input>
                    <span className='login-page__input-error'></span>
                </div>
                <div className='login-page__input-area'>
                    <span className='login-page__input-name'>Пароль</span>
                    <input
                        className='login-page__input'
                        value='••••••••••••••'></input>
                    <span className='login-page__input-error'></span>
                </div>
                <button className='login-page__button'>Войти</button>
                <span className='login-page__caption'>
                    Еще не зарегистрированы?&nbsp;
                    <span className='login-page__caption' to='/sign-up'>
                        Регистрация
                    </span>
                </span>
            </form>
        </>
    );
}
