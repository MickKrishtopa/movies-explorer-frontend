import "./MoviesPage.css";
import Header from "../../components/Header/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

export default function MoviesPage({ setIsOpenSideMenu }) {
    return (
        <div className='movies-page'>
            <Header>
                <Navigation setIsOpenSideMenu={setIsOpenSideMenu} />
            </Header>
            <main>
                <SearchForm />
                <MoviesCardList>
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />

                    {/* <MoviesCard />
                    <MoviesCard />
                    <MoviesCard /> */}

                    {/* <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard /> */}
                </MoviesCardList>
                <button type='button' className='movies-page__button-more'>
                    Ещё
                </button>
            </main>
            <Footer />
        </div>
    );
}
