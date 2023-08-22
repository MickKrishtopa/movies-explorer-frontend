import "./ProfilePage.css";

import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import { Link } from "react-router-dom";

export default function ProfilePage({ setIsOpenSideMenu }) {
    return (
        <>
            <Header>
                <Navigation setIsOpenSideMenu={setIsOpenSideMenu} />
            </Header>
            <main>
                <section>
                    <form className='profile'>
                        <h1 className='profile__title'>Привет, Виталий!</h1>
                        <div className='profile__input-area'>
                            <span className='profile__input-name'>Имя</span>
                            <input
                                placeholder='Введите имя'
                                type='text'
                                minLength='2'
                                maxLength='40'
                                className='profile__input'
                                defaultValue='Виталий'></input>
                            <span className='profile__input-error'>
                                Текст ошибки
                            </span>
                        </div>
                        <div className='profile__input-area'>
                            <span className='profile__input-name'>E-mail</span>
                            <input
                                placeholder='Введите E-mail'
                                type='email'
                                className='profile__input'
                                defaultValue='pochta@yandex.ru'></input>
                            <span className='profile__input-error'>
                                Текст ошибки
                            </span>
                        </div>
                        <button type='button' className='profile__edit-button'>
                            Редактировать
                        </button>
                        <Link to='/' className='profile__logout-button'>
                            Выйти из аккаунта
                        </Link>
                    </form>
                </section>
            </main>
        </>
    );
}
