import "./Portfolio.css";

export default function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__project-list'>
                <li>
                    <a
                        className='portfolio__element-link'
                        href='https://mickkrishtopa.github.io/how-to-learn/'
                        target='blank'>
                        Статичный сайт
                        <div className='portfolio__element-decoration'></div>
                    </a>
                </li>
                <li>
                    <a
                        className='portfolio__element-link'
                        href='https://mickkrishtopa.github.io/russian-travel/'
                        target='blank'>
                        Адаптивный сайт
                        <div className='portfolio__element-decoration'></div>
                    </a>
                </li>
                <li>
                    <a
                        className='portfolio__element-link'
                        href='https://mickkrishtopa.github.io/react-shop/'
                        target='blank'>
                        Одностраничное приложение
                        <div className='portfolio__element-decoration'></div>
                    </a>
                </li>
            </ul>
        </section>
    );
}
