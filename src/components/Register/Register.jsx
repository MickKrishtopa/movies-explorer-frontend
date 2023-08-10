import "./Register.css";

import Header from "../Header/Header";

export default function Register() {
    return (
        <>
            <div className='register__header'>
                {" "}
                <Header />
            </div>
            <form className='register__form'>
                <h1 className='register__title'>Добро пожаловать!</h1>
                <div className='register__input-area'>
                    <span className='register__input-name'>Имя</span>
                    <input className='register__input' value='Виталий'></input>
                    <span className='register__input-error'></span>
                </div>
                <div className='register__input-area'>
                    <span className='register__input-name'>E-mail</span>
                    <input
                        className='register__input'
                        value='pochta@yandex.ru'></input>
                    <span className='register__input-error'></span>
                </div>
                <div className='register__input-area'>
                    <span className='register__input-name'>Пароль</span>
                    <input
                        className='register__input'
                        value='••••••••••••••'></input>
                    <span className='register__input-error'>
                        Что-то пошло не так...
                    </span>
                </div>
                <button className='register__button'>Зарегистрироваться</button>
                <span className='register__caption'>
                    Уже зарегистрированы?&nbsp;
                    <span className='register__caption' to='/sign-up'>
                        Войти
                    </span>
                </span>
            </form>
        </>
    );
}
