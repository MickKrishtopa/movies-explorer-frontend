import "./Techs.css";

export default function Techs() {
    return (
        <section className='techs'>
            <h2 className='techs__title'>Технологии</h2>
            <h3 className='techs__subtitle'>7 технологий</h3>
            <p className='techs__description'>
                На курсе веб-разработки мы освоили технологии, которые применили
                в дипломном проекте.
            </p>
            <ul className='techs__decoration-area'>
                <li className='techs__decoration-item'>HTML</li>
                <li className='techs__decoration-item'>CSS</li>
                <li className='techs__decoration-item'>JS</li>
                <li className='techs__decoration-item'>React</li>
                <li className='techs__decoration-item'>Git</li>
                <li className='techs__decoration-item'>Express.js</li>
                <li className='techs__decoration-item'>mongoDB</li>
            </ul>
        </section>
    );
}
