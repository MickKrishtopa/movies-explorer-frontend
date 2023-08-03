import "./Techs.css";

export default function Techs() {
    return (
        <section className='techs'>
            <h2 className='techs__title'>Технологии</h2>
            <p className='techs__subtitle'>7 технологий</p>
            <p className='techs__description'>
                На курсе веб-разработки мы освоили технологии, которые применили
                в дипломном проекте.
            </p>
            <div className='techs__decoration-area'>
                <p className='techs__decoration-item'>HTML</p>
                <p className='techs__decoration-item'>CSS</p>
                <p className='techs__decoration-item'>JS</p>
                <p className='techs__decoration-item'>React</p>
                <p className='techs__decoration-item'>Git</p>
                <p className='techs__decoration-item'>Express.js</p>
                <p className='techs__decoration-item'>mongoDB</p>
            </div>
        </section>
    );
}
