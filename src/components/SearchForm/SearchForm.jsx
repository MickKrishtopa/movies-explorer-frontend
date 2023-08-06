import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm() {
    return (
        <section className='search-form'>
            <div className='search-form__input-field'>
                <input
                    className='search-form__input'
                    placeholder='Фильм'></input>
                <botton className='search-form__button'>Поиск</botton>
            </div>
            <FilterCheckbox />
        </section>
    );
}
