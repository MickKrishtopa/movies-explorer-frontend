import "./SavedMovies.css";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function SavedMovies() {
    return (
        <section>
            <ul className='movies-card-list'>
                <MoviesCard buttonText={"X"} />
                <MoviesCard buttonText={"X"} />
                <MoviesCard buttonText={"X"} />
            </ul>
        </section>
    );
}
