import "./MoviesCardList.css";

import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList(props) {
    const { children } = props;
    return (
        <section>
            <ul className='movies-card-list'>{children}</ul>
            <button className='movies-card-list__button-more'>Ещё</button>
        </section>
    );
}
