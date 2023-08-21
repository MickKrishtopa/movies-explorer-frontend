import "./FilterCheckbox.css";

export default function FilterCheckbox({ isShort, setIsShort }) {
    const onChangeCheckBox = () => {
        setIsShort(!isShort);
    };

    return (
        <form>
            <label className='filter-checkbox'>
                <input
                    onChange={onChangeCheckBox}
                    type='checkbox'
                    className='filter-checkbox__input'></input>
                <span className='filter-checkbox__custom-checkbox'></span>
                <span className='filter-checkbox__span'>Короткометражки</span>
            </label>
        </form>
    );
}
