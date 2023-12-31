import "./Promo.css";
import promoLogo from "../../images/promo-logo.svg";

export default function Promo() {
    return (
        <section className='promo'>
            <div className='promo__description'>
                <h1 className='promo__title'>
                    Учебный проект студента факультета Веб&#8209;разработки.
                </h1>
                <p className='promo__subtitle'>
                    Листайте ниже, чтобы узнать больше про этот проект и его
                    создателя.
                </p>
                <a href='#about-project' className='promo__button'>
                    Узнать больше
                </a>
            </div>
            <img
                src={promoLogo}
                alt='Глобус'
                className='promo__logo
                '
            />
        </section>
    );
}
