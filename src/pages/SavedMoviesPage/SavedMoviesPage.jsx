import "./SavedMoviesPage.css";
import Header from "../../components/Header/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

export default function SavedMoviesPage({
    setIsOpenSideMenu,
    userMovies,
    handleAddSaveMovie,
    handleRemoveSaveMovie,
    searchInputValue,
    isShort,
    setIsShort,
    onSubmitSearchForm,
}) {
    return (
        <>
            <Header>
                <Navigation setIsOpenSideMenu={setIsOpenSideMenu} />
            </Header>
            <main className='saved-movies'>
                <SearchForm
                    searchInputValue={searchInputValue}
                    isShort={isShort}
                    setIsShort={setIsShort}
                    onSubmitSearchForm={onSubmitSearchForm}
                />
                <MoviesCardList
                    cards={userMovies}
                    handleAddSaveMovie={handleAddSaveMovie}
                    handleRemoveSaveMovie={handleRemoveSaveMovie}
                />
            </main>
            <Footer />
        </>
    );
}
