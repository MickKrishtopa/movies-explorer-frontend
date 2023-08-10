import "./SideMenu.css";
import closeIcon from "../../images/icon-close.svg";

import Navigation from "../Navigation/Navigation";

export default function SideMenu() {
    return (
        <div className='side-menu__container'>
            <div className='side-menu'>
                <button className='side-menu__close-button' />
                <ul className='side-menu__link-area'>
                    <li className='side-menu__link'>Главная</li>
                    <li className='side-menu__link side-menu__link_type_active'>
                        Фильмы
                    </li>
                    <li className='side-menu__link'>Сохраненные фильмы</li>
                </ul>
                <div className='side-menu__profile-area'>
                    <p className='side-menu__profile'>Аккаунт</p>
                    <div className='side-menu__profile-icon'></div>
                </div>
            </div>
        </div>
    );
}
