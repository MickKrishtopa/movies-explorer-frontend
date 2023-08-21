import "./MoviesCard.css";
import film from "../../images/film1.png";

export default function MoviesCard(props) {
    const { title, duration, image } = props;

    return (
        <li className='movie-card'>
            <div className='movie-card__text-area'>
                <h2 className='movie-card__title'>{title}</h2>
                <p className='movie-card__duration'>{duration}</p>
            </div>
            <img
                className='movie-card__image'
                src={`https://api.nomoreparties.co/${image}`}
                alt={title}></img>
            <button
                type='button'
                className='movie-card__button-like movie-card__button-saved'></button>
        </li>
    );
}
