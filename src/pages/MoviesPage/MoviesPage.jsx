import "./MoviesPage.css";
import Header from "../../components/Header/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

export default function MoviesPage() {
    return (
        <div className='movies-page'>
            <Header>
                <Navigation />
            </Header>
            <SearchForm />
            <MoviesCardList>
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </MoviesCardList>
            <Footer />
        </div>
    );
}
