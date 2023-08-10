import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SavedMovies from "../SavedMovies/SavedMovies";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

export default function Movies() {
    return (
        <div className='movies-page'>
            <Header>
                <Navigation />
            </Header>
            <SearchForm />
            <SavedMovies />
            {/* <MoviesCardList /> */}
            <Footer />
        </div>
    );
}
