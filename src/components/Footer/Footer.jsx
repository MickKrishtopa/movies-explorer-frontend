import "./Footer.css";

export default function Footer() {
    return (
        <footer className='footer'>
            <p className='footer__title'>
                Учебный проект Яндекс.Практикум х BeatFilm.
            </p>
            <div className='footer__content'>
                <p className='footer__copyright'>© 2023 </p>
                <nav className='footer__navigation'>
                    <a
                        target='blank'
                        href='https://practicum.yandex.ru/'
                        className='footer__navigation-item'>
                        Яндекс.Практикум
                    </a>
                    <a
                        target='blank'
                        href='https://github.com/'
                        className='footer__navigation-item'>
                        Github
                    </a>
                </nav>
            </div>
        </footer>
    );
}
