import "./FilterCheckbox.css";

export default function FilterCheckbox({
    isShort,
    setIsShort,
    onSubmitSearchForm,
    requestMovie,
}) {
    const onChangeCheckBox = (e) => {
        setIsShort(!isShort);
        onSubmitSearchForm(requestMovie);
        // console.log("Состояние чекбокса записывам как", !isShort);
        localStorage.setItem("isShort", !isShort);
    };

    return (
        <form>
            <label className='filter-checkbox'>
                <input
                    checked={!!isShort}
                    onChange={(e) => onChangeCheckBox(e)}
                    type='checkbox'
                    className='filter-checkbox__input'></input>
                <span className='filter-checkbox__custom-checkbox'></span>
                <span className='filter-checkbox__span'>Короткометражки</span>
            </label>
        </form>
    );
}
