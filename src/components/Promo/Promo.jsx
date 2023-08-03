import "./Promo.css";
import promoLogo from "../../images/promo-logo.svg";

export default function Promo() {
    return (
        <section className='promo'>
            <div className='promo__content'>
                <div className='promo__description'>
                    <h1 className='promo__title'>
                        Учебный проект студента факультета Веб-разработки.
                    </h1>
                    <p className='promo__subtitle'>
                        Листайте ниже, чтобы узнать больше про этот проект и его
                        создателя.
                    </p>
                    <button className='promo__button'>Узнать больше</button>
                </div>
                <img
                    src={promoLogo}
                    alt='Глобус'
                    className='promo__logo
                '
                />
            </div>
            {/* <div className='promo__decorate'></div> */}
        </section>
    );
}
