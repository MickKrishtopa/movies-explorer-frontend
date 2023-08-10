import "./Login.css";

import Header from "../Header/Header";

export default function Login() {
    return (
        <>
            <div className='login__header'>
                {" "}
                <Header />
            </div>
            <form className='login__form'>
                <h1 className='login__title'>Рады видеть!</h1>

                <div className='login__input-area'>
                    <span className='login__input-name'>E-mail</span>
                    <input
                        className='login__input'
                        value='pochta@yandex.ru'></input>
                    <span className='login__input-error'></span>
                </div>
                <div className='login__input-area'>
                    <span className='login__input-name'>Пароль</span>
                    <input
                        className='login__input'
                        value='••••••••••••••'></input>
                    <span className='login__input-error'></span>
                </div>
                <button className='login__button'>Войти</button>
                <span className='login__caption'>
                    Еще не зарегистрированы?&nbsp;
                    <span className='login__caption' to='/sign-up'>
                        Регистрация
                    </span>
                </span>
            </form>
        </>
    );
}
