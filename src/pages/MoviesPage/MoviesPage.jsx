import "./MoviesPage.css";

import Header from "../../components/Header/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

export default function MoviesPage({
    setIsOpenSideMenu,
    onSubmitSearchForm,
    selectedFilms,
    searchInputValue,
    isShort,
    setIsShort,
    handleAddSaveMovie,
    handleRemoveSaveMovie,
    userMovies,
    initialCardsQty,
    cardsPerRow,
    additionRows,
    handleAddCardsRow,
}) {
    const moviesToShow = selectedFilms
        .slice(0, initialCardsQty + cardsPerRow * additionRows)
        .map((movie) => {
            if (userMovies.some((item) => item.movieId === movie.id)) {
                return {
                    ...movie,
                    isSaved: true,
                    idOnUserServer: userMovies.find(
                        (item) => item.movieId === movie.id
                    )._id,
                };
            } else {
                return { ...movie, isSaved: false, idOnUserServer: null };
            }
        });
    return (
        <div className='movies-page'>
            <Header>
                <Navigation setIsOpenSideMenu={setIsOpenSideMenu} />
            </Header>
            <main>
                <SearchForm
                    searchInputValue={searchInputValue}
                    isShort={isShort}
                    setIsShort={setIsShort}
                    onSubmitSearchForm={onSubmitSearchForm}
                />
                <MoviesCardList
                    searchInputValue={searchInputValue}
                    cards={moviesToShow}
                    handleAddSaveMovie={handleAddSaveMovie}
                    handleRemoveSaveMovie={handleRemoveSaveMovie}
                />
                {selectedFilms.length > initialCardsQty ? (
                    <button
                        onClick={() => handleAddCardsRow()}
                        type='button'
                        className='movies-page__button-more'>
                        Ещё
                    </button>
                ) : null}
            </main>
            <Footer />
        </div>
    );
}
