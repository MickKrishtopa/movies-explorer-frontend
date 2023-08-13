import "./NotFoundPage.css";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <section className='not-found-page'>
            <div className='not-found-page__message-area'>
                <h1 className='not-found-page__title'>404</h1>
                <p className='not-found-page__description'>
                    Страница не найдена
                </p>
            </div>

            <button
                type='button'
                onClick={() => navigate(-1)}
                className='not-found-page__button-back'>
                Назад
            </button>
        </section>
    );
}
