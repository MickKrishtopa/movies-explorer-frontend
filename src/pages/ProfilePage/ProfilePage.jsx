import "./ProfilePage.css";

import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import { Link } from "react-router-dom";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

export default function ProfilePage({ setIsOpenSideMenu, handleLogoutSubmit }) {
    const currentUserContext = useContext(CurrentUserContext);

    return (
        <>
            <Header>
                <Navigation setIsOpenSideMenu={setIsOpenSideMenu} />
            </Header>
            <main>
                <section>
                    <form className='profile'>
                        <h1 className='profile__title'>
                            {`Привет, ${currentUserContext.currentUser.name}!`}
                        </h1>
                        <div className='profile__input-area'>
                            <span className='profile__input-name'>Имя</span>
                            <input
                                placeholder='Введите имя'
                                type='text'
                                minLength='2'
                                maxLength='40'
                                className='profile__input'
                                defaultValue={
                                    currentUserContext.currentUser.name
                                }></input>
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
                                defaultValue={
                                    currentUserContext.currentUser.email
                                }></input>
                            <span className='profile__input-error'>
                                Текст ошибки
                            </span>
                        </div>
                        <button type='button' className='profile__edit-button'>
                            Редактировать
                        </button>
                        <Link
                            to='/'
                            className='profile__logout-button'
                            onClick={handleLogoutSubmit}>
                            Выйти из аккаунта
                        </Link>
                    </form>
                </section>
            </main>
        </>
    );
}
