import "./MoviesPage.css";

import { useState } from "react";

import Header from "../../components/Header/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import MoviesCardList from "../../components/MoviesCardList/MoviesCardList";
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

export default function MoviesPage({
    setIsOpenSideMenu,
    onSubmitSearchForm,
    selectFilms,
}) {
    const [isShort, setIsShort] = useState(false);

    return (
        <div className='movies-page'>
            <Header>
                <Navigation setIsOpenSideMenu={setIsOpenSideMenu} />
            </Header>
            <main>
                <SearchForm
                    isShort={isShort}
                    setIsShort={setIsShort}
                    onSubmitSearchForm={onSubmitSearchForm}
                />
                <MoviesCardList selectFilms={selectFilms}></MoviesCardList>
                <button type='button' className='movies-page__button-more'>
                    Ещё
                </button>
            </main>
            <Footer />
        </div>
    );
}
