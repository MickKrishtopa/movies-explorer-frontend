import "./ProfilePage.css";

import Header from "../../components/Header/Header";

export default function ProfilePage() {
    return (
        <>
            <Header />
            <form className='profile'>
                <h1 className='profile__title'>Привет, Виталий!</h1>
                <div className='profile__input-area'>
                    <span className='profile__input-name'>Имя</span>
                    <input className='profile__input' value='Виталий'></input>
                    <span className='profile__input-error'>Текст ошибки</span>
                </div>
                <div className='profile__input-area'>
                    <span className='profile__input-name'>E-mail</span>
                    <input
                        className='profile__input'
                        value='pochta@yandex.ru'></input>
                    <span className='profile__input-error'>Текст ошибки</span>
                </div>
                <button className='profile__edit-button'>Редактировать</button>
                <button className='profile__logout-button'>
                    Выйти из аккаунта
                </button>
            </form>
        </>
    );
}
