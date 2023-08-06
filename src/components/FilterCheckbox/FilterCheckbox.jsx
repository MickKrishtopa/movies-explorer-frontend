import "./FilterCheckbox.css";

export default function FilterCheckbox() {
    return (
        <p className='filter-checkbox'>
            <label className='filter-checkbox__label'>
                <input className='filter-checkbox__input' type='radio'></input>
                <span className='filter-checkbox__span'>Короткометражки</span>
            </label>
        </p>
    );
}
