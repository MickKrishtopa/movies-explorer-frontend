import "./NotFoundPage.css";

export default function NotFoundPage() {
    return (
        <section className='not-found-page'>
            <div className='not-found-page__message-area'>
                <h1 className='not-found-page__title'>404</h1>
                <p className='not-found-page__description'>
                    Страница не найдена
                </p>
            </div>

            <span className='not-found-page__back-link'>Назад</span>
        </section>
    );
}
