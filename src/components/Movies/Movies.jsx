import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SavedMovies from "../SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";

export default function Movies() {
    return (
        <>
            <Header />
            <SearchForm />
            <SavedMovies />
            {/* <MoviesCardList /> */}
            <Footer />
        </>
    );
}
