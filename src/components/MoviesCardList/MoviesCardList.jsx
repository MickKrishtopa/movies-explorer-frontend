import "./MoviesCardList.css";

import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ selectedFilms, handleAddSaveMovie }) {
    return (
        <section>
            <ul className='movies-card-list'>
                {selectedFilms.length ? (
                    selectedFilms?.map((movie) => (
                        <MoviesCard
                            handleAddSaveMovie={handleAddSaveMovie}
                            movie={movie}
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
