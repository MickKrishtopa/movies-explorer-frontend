import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm() {
    return (
        <section className='search-form'>
            <form className='search-form__input-field'>
                <input
                    placeholder='Введите название'
                    type='text'
                    required
                    className='search-form__input'></input>
                <button type='submit' className='search-form__button'>
                    Поиск
                </button>
            </form>
            <FilterCheckbox />
        </section>
    );
}
