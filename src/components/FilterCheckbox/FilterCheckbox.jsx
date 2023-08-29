import "./FilterCheckbox.css";

export default function FilterCheckbox({ isShort, onChangeCheckBox }) {
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
