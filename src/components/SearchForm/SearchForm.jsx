import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm({
    onSubmitSearchForm,
    setIsShort,
    isShort,
    onChangeCheckBox,
    requestMovie,
    setRequestMovie,
}) {
    // const [requestMovie, setRequestMovie] = useState(searchInputValue);

    function onChangeInput(e) {
        setRequestMovie(e.target.value);
    }

    function handleSubmite(e) {
        e.preventDefault();
        onSubmitSearchForm(requestMovie);
    }

    return (
        <section className='search-form'>
            <form className='search-form__input-field' onSubmit={handleSubmite}>
                <input
                    placeholder='Введите название'
                    type='text'
                    required
                    className='search-form__input'
                    value={requestMovie || ""}
                    onChange={(e) => onChangeInput(e)}
                />
                <button type='submit' className='search-form__button'>
                    Поиск
                </button>
            </form>
            <FilterCheckbox
                isShort={isShort}
                setIsShort={setIsShort}
                onSubmitSearchForm={onSubmitSearchForm}
                requestMovie={requestMovie}
                onChangeCheckBox={onChangeCheckBox}
            />
        </section>
    );
}
