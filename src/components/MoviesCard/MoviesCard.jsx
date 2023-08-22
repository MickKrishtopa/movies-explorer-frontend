import "./MoviesCard.css";
import film from "../../images/film1.png";

export default function MoviesCard(props) {
    const { movie, title, duration, image, handleAddSaveMovie } = props;

    const onAddSavedMovie = () => {
        const newSavedMovie = {
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: "https://api.nomoreparties.co/" + movie.image.url,
            trailerLink: movie.trailerLink,
            thumbnail:
                "https://api.nomoreparties.co/" +
                movie.image.formats.thumbnail.url,
            movieId: movie.id,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
        };
        console.log(newSavedMovie);
        handleAddSaveMovie(newSavedMovie);
    };

    return (
        <li className='movie-card'>
            <div className='movie-card__text-area'>
                <h2
                    className='movie-card__title'
                    onClick={() => console.log(movie)}>
                    {movie.nameRU}
                </h2>
                <p className='movie-card__duration'>{movie.duration}</p>
            </div>
            <img
                className='movie-card__image'
                src={`https://api.nomoreparties.co/${movie.image.url}`}
                alt={title}></img>
            <button
                onClick={onAddSavedMovie}
                type='button'
                className='movie-card__button-like movie-card__button-saved'></button>
        </li>
    );
}
