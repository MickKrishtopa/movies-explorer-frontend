import "./FilterCheckbox.css";

export default function FilterCheckbox() {
    return (
        <label className='filter-checkbox'>
            <input type='checkbox' className='filter-checkbox__input'></input>
            <div className='filter-checkbox__custom-checkbox'></div>
            <span className='filter-checkbox__span'>Короткометражки</span>
        </label>
    );
}
