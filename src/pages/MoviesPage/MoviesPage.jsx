import "./MoviesPage.css";

import { useEffect, useState } from "react";

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
}) {
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
                    selectedFilms={selectedFilms}
                    handleAddSaveMovie={handleAddSaveMovie}
                />
                <button type='button' className='movies-page__button-more'>
                    Ещё
                </button>
            </main>
            <Footer />
        </div>
    );
}
