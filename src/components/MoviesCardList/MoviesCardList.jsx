import "./MoviesCardList.css";

import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList() {
    return (
        <section>
            <ul className='movies-card-list'>
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </ul>
            <button className='movies-card-list__button-more'>Ещё</button>
        </section>
    );
}
