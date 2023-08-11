import "./Footer.css";

export default function Footer() {
    return (
        <footer className='footer'>
            <p className='footer__title'>
                Учебный проект Яндекс.Практикум х BeatFilm.
            </p>
            <div className='footer__content'>
                <p className='footer__copyright'>© 2023 </p>
                <ul className='footer__navigation'>
                    <li className='footer__navigation-item'>
                        <a
                            className='footer__navigation-link'
                            target='blank'
                            href='https://practicum.yandex.ru/'>
                            Яндекс.Практикум
                        </a>
                    </li>
                    <li className='footer__navigation-item'>
                        <a
                            className='footer__navigation-link'
                            target='blank'
                            href='https://github.com/'>
                            Github
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
