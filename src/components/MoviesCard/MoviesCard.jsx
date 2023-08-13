import "./MoviesCard.css";
import film from "../../images/film1.png";

export default function MoviesCard(props) {
    const title = "Заглушка";
    return (
        <li className='movie-card'>
            <div className='movie-card__text-area'>
                <h2 className='movie-card__title'>В погоне за Бенкси</h2>
                <p className='movie-card__duration'>27 минут</p>
            </div>
            <img className='movie-card__image' src={film} alt={title}></img>
            <button
                type='button'
                className='movie-card__button-like movie-card__button-saved'></button>
        </li>
    );
}
