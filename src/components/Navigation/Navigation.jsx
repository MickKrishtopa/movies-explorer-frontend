import "./Navigation.css";

export default function Navigation() {
    return (
        <div className='navigation'>
            {false && (
                <>
                    <p className='navigation__signup'>Регистрация</p>
                    <button className='navigation__signip'>Войти</button>
                </>
            )}

            {true && (
                <>
                    <p className='navigation__link'>Фильмы</p>
                    <p className='navigation__link'>Сохранённые фильмы</p>

                    <div className='navigation__profile-area'>
                        <p className='navigation__profile'>Аккаунт</p>
                        <div className='navigation__profile-icon'></div>
                    </div>
                </>
            )}
        </div>
    );
}
