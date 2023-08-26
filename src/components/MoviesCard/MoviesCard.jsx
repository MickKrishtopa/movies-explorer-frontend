import "./MoviesCard.css";

export default function MoviesCard(props) {
    const isUserListShow =
        window.location.pathname === "/saved-movies" ? true : false;

    const { movie, handleRemoveSaveMovie, handleAddSaveMovie } = props;
    // console.log(movie);
    const imgUrl = !isUserListShow
        ? "https://api.nomoreparties.co/" + movie.image.url
        : movie.image;

    const btnClassName = isUserListShow
        ? "movie-card__button-like movie-card__button-saved"
        : movie.isSaved
        ? "movie-card__button-like movie-card__button-like_type_active"
        : "movie-card__button-like";

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

        handleAddSaveMovie(newSavedMovie);
    };

    const onButtonClick = () => {
        if (isUserListShow) {
            handleRemoveSaveMovie(movie._id);
            return;
        }

        if (movie?.isSaved) {
            handleRemoveSaveMovie(movie.idOnUserServer);
            return;
        }

        onAddSavedMovie();
    };

    return (
        <li className='movie-card'>
            <div className='movie-card__text-area'>
                <h2
                    className='movie-card__title'
                    onClick={() => console.log(movie)}>
                    {movie.nameRU}
                </h2>
                <p className='movie-card__duration'>
                    {" "}
                    {movie.duration > 60
                        ? `${Math.floor(movie.duration / 60)}ч ${
                              movie.duration % 60
                          }м`
                        : `${movie.duration}м`}
                </p>
            </div>
            <img
                className='movie-card__image'
                src={imgUrl}
                alt={movie.title}></img>
            <button
                onClick={onButtonClick}
                type='button'
                className={btnClassName}>
                {movie.isSaved || isUserListShow ? "" : "Сохранить"}
            </button>
        </li>
    );
}
