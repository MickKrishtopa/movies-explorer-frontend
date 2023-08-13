import "./FilterCheckbox.css";

export default function FilterCheckbox() {
    return (
        <form>
            <label className='filter-checkbox'>
                <input
                    type='checkbox'
                    className='filter-checkbox__input'></input>
                <span className='filter-checkbox__custom-checkbox'></span>
                <span className='filter-checkbox__span'>Короткометражки</span>
            </label>
        </form>
    );
}
