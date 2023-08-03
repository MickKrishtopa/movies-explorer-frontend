import "./AboutProject.css";

export default function AboutProject() {
    return (
        <section className='about-project'>
            <h2 className='about-project__title'>О проекте</h2>
            <div className='about-project__text-area'>
                <div className='about-profect__content-box'>
                    <p className='about-project__subtitle'>
                        Дипломный проект включал 5 этапов
                    </p>
                    <p className='about-project__description'>
                        Составление плана, работу над бэкендом, вёрстку,
                        добавление функциональности и финальные доработки.
                    </p>
                </div>
                <div className='about-profect__content-box'>
                    <p className='about-project__subtitle'>
                        На выполнение диплома ушло 5 недель
                    </p>
                    <p className='about-project__description'>
                        У каждого этапа был мягкий и жёсткий дедлайн, которые
                        нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>
            <div className='about-project__decoration-area'>
                <p className='about-project__decoration-text about-project__decoration-text_type_green'>
                    1 неделя
                </p>
                <p className='about-project__decoration-text about-project__decoration-text_type_gray'>
                    4 недели
                </p>
                <p className='about-project__decoration-text'>Back-end</p>
                <p className='about-project__decoration-text'>Front-end</p>
            </div>
        </section>
    );
}
