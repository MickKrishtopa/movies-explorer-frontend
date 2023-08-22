import "./MoviesCardList.css";

import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList(props) {
    const { children } = props;
    return (
        <section>
            <ul className='movies-card-list'>{children}</ul>
        </section>
    );
}
