import "./MoviesCardList.css";

import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ selectFilms }) {
    return (
        <section>
            <ul className='movies-card-list'>
                {selectFilms ? (
                    selectFilms.map((movie) => (
                        <MoviesCard
                            key={movie.id}
                            title={movie.nameRU}
                            duration={movie.duration}
                            image={movie.image.url}
                        />
                    ))
                ) : (
                    <p>Ничего не найдено</p>
                )}
            </ul>
        </section>
    );
}
