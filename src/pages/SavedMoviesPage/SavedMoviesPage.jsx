import "./SavedMoviesPage.css";
import Header from "../../components/Header/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";

export default function SavedMoviesPage({
    setIsOpenSideMenu,
    userMovies,
    handleAddSaveMovie,
    handleRemoveSaveMovie,
    searchInputValue,
    isShort,
    setIsShort,
    onSubmitSearchForm,
    setUserMoviesToShow,
}) {
    const [requestMovie, setRequestMovie] = useState("");
    const [moviesToShow, setMoviesToShow] = useState([]);

    useEffect(() => {
        return () => {
            setUserMoviesToShow(userMovies);
            setIsShort(false);
        };
    }, []);

    useEffect(() => {
        const moviesToShow = userMovies.filter((movie) =>
            isShort ? movie.duration < 41 : movie
        );
        setMoviesToShow(moviesToShow);
    }, [isShort, userMovies]);

    const onChangeCheckBox = (e) => {
        setIsShort(!isShort);
    };
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
                    setRequestMovie={setRequestMovie}
                    requestMovie={requestMovie}
                    onChangeCheckBox={onChangeCheckBox}
                />
                <MoviesCardList
                    cards={moviesToShow}
                    handleAddSaveMovie={handleAddSaveMovie}
                    handleRemoveSaveMovie={handleRemoveSaveMovie}
                />
            </main>
            <Footer />
        </>
    );
}
