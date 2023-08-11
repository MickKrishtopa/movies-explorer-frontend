import "./Portfolio.css";

export default function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__project-list'>
                <li className='portfolio__element'>
                    <a
                        className='portfolio__element-link'
                        href='https://mickkrishtopa.github.io/how-to-learn/'
                        target='blank'>
                        Статичный сайт
                    </a>
                    <div className='portfolio__element-decoration'></div>
                </li>
                <li className='portfolio__element'>
                    <a
                        className='portfolio__element-link'
                        href='https://mickkrishtopa.github.io/russian-travel/'
                        target='blank'>
                        Адаптивный сайт
                    </a>{" "}
                    <div className='portfolio__element-decoration'></div>
                </li>
                <li className='portfolio__element'>
                    <a
                        className='portfolio__element-link'
                        href='https://mickkrishtopa.github.io/react-shop/'
                        target='blank'>
                        Одностраничное приложение
                    </a>
                    <div className='portfolio__element-decoration'></div>
                </li>
            </ul>
        </section>
    );
}
