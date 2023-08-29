import "./MoviesCardList.css";

import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({
    cards,
    handleAddSaveMovie,
    handleRemoveSaveMovie,
    searchInputValue,
}) {
    if (!!searchInputValue && cards.length === 0) {
        return (
            <p
                style={{
                    color: "white",
                    fontSize: 15,
                    margin: "10vh auto",
                    maxWidth: "300px",
                    textAlign: "center",
                }}>
                Ничего не найдено
            </p>
        );
    }

    return (
        <section>
            <ul className='movies-card-list'>
                {cards?.map((movie) => (
                    <MoviesCard
                        handleAddSaveMovie={handleAddSaveMovie}
                        handleRemoveSaveMovie={handleRemoveSaveMovie}
                        movie={movie}
                        key={movie.id || movie._id}
                    />
                ))}
            </ul>
        </section>
    );
}
