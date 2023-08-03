import "./AboutMe.css";
import myPhoto from "../../images/my-photo.jpg";

export default function AboutMe() {
    return (
        <section className='about-me'>
            <h2 className='about-me__title'>Студент</h2>
            <div className='about-me__content'>
                <div className='about-me__text-wrap'>
                    <div className='about-me__text-area'>
                        <h2 className='about-me__name'>Михаил</h2>
                        <p className='about-me__profession'>
                            Фронтенд-разработчик, 32 года
                        </p>
                        <p className='about-me__description'>
                            Мне нравится создавать и видеть результат своего
                            труда. Изучать програмирования я начал в 2020 году,
                            однако понимание, что я хочу профессионально
                            развиваться в этом направлении пришло в 2022 году.
                            Увлекаюсь компьютерными/настольными играми и
                            сноубордом. Отец близнецов.
                        </p>
                    </div>
                    <p className='about-me__github-link'>Github</p>
                </div>
                <img
                    src={myPhoto}
                    alt='Фотография студента'
                    className='about-me__photo'
                />
            </div>
        </section>
    );
}
