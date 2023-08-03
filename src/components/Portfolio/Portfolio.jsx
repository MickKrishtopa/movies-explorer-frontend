import "./Portfolio.css";

export default function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <div className='portfolio__element'>
                <p className='portfolio__element-text'>Статичный сайт</p>
                <div className='portfolio__element-decoration'></div>
            </div>
            <div className='portfolio__element'>
                <p className='portfolio__element-text'>Адаптивный сайт</p>
                <div className='portfolio__element-decoration'></div>
            </div>
            <div className='portfolio__element'>
                <p className='portfolio__element-text'>
                    Одностраничное приложение
                </p>
                <div className='portfolio__element-decoration'></div>
            </div>
        </section>
    );
}
