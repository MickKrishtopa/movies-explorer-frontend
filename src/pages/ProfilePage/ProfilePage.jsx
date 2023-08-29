import "./ProfilePage.css";

import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import { Link } from "react-router-dom";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext, useEffect, useState } from "react";

export default function ProfilePage({
    setIsOpenSideMenu,
    handleLogoutSubmit,
    handleSubmitChangeProfile,
    isLoading,
}) {
    const currentUserContext = useContext(CurrentUserContext);

    const [isProfileChanged, setIsProfileChanged] = useState(false);
    const [isChanging, setIsChanging] = useState(false);
    const [formValue, setFormValue] = useState({
        name: currentUserContext.currentUser.name,
        email: currentUserContext.currentUser.email,
    });
    const [errorMessage, setErrorMessage] = useState({});

    const { name, email } = currentUserContext.currentUser;

    useEffect(() => {
        setIsProfileChanged(
            !(name === formValue.name && email === formValue.email)
        );
    }, [formValue]);

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

    const onButtonClick = async () => {
        if (!isChanging) {
            setIsChanging(true);
            return;
        }

        const res = await handleSubmitChangeProfile(
            formValue.name,
            formValue.email
        );
        if (res) {
            setIsChanging(false);
            setIsProfileChanged(false);
        } else {
            setIsChanging(true);
        }
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
                                value={formValue.name}
                                disabled={!isChanging}
                                onChange={handleChangeInput}
                                placeholder='Введите имя'
                                name='name'
                                type='text'
                                minLength='2'
                                maxLength='40'
                                className='profile__input'></input>
                            <span className='profile__input-error'>
                                {errorMessage.name}
                            </span>
                        </div>
                        <div className='profile__input-area'>
                            <span className='profile__input-name'>E-mail</span>
                            <input
                                value={formValue.email}
                                disabled={!isChanging}
                                onChange={handleChangeInput}
                                placeholder='Введите E-mail'
                                name='email'
                                type='email'
                                className='profile__input'></input>
                            <span className='profile__input-error'>
                                {errorMessage.email}
                            </span>
                        </div>
                        <button
                            type='button'
                            className='profile__edit-button'
                            disabled={
                                (isChanging && !isProfileChanged) || isLoading
                            }
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
