import "./ProfilePage.css";

import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import { Link } from "react-router-dom";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext, useState } from "react";

export default function ProfilePage({
    setIsOpenSideMenu,
    handleLogoutSubmit,
    handleSubmitChangeProfile,
}) {
    const currentUserContext = useContext(CurrentUserContext);

    const [isChanging, setIsChanging] = useState(false);
    const [formValue, setFormValue] = useState({});
    const [errorMessage, setErrorMessage] = useState({});

    const handleChangeInput = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value.toString(),
        });
        setErrorMessage({
            ...errorMessage,
            [e.target.name]: e.target.validationMessage,
        });
    };

    const onButtonClick = () => {
        if (!isChanging) {
            setIsChanging(true);
            return;
        }
        console.log(formValue);
        handleSubmitChangeProfile(formValue.name, formValue.email);
        setIsChanging(false);
    };

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
                                onChange={handleChangeInput}
                                placeholder='Введите имя'
                                name='name'
                                type='text'
                                minLength='2'
                                maxLength='40'
                                className='profile__input'
                                defaultValue={
                                    currentUserContext.currentUser.name
                                }></input>
                            <span className='profile__input-error'>
                                {errorMessage.name}
                            </span>
                        </div>
                        <div className='profile__input-area'>
                            <span className='profile__input-name'>E-mail</span>
                            <input
                                onChange={handleChangeInput}
                                placeholder='Введите E-mail'
                                name='email'
                                type='email'
                                className='profile__input'
                                defaultValue={
                                    currentUserContext.currentUser.email
                                }></input>
                            <span className='profile__input-error'>
                                {errorMessage.email}
                            </span>
                        </div>
                        <button
                            type='button'
                            className='profile__edit-button'
                            onClick={onButtonClick}>
                            {isChanging ? "Сохранить" : "Редактировать"}
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
