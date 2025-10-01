import React, {useState} from 'react';
import classes from './FilterByPrice.module.css'
const REG = /[^0-9]/g

const FilterByPrice = ({setMinFilterPrice, setMaxFilterPrice}) => {
    const [minValue, setMinValue] = useState('')
    const [maxValue, setMaxValue] = useState('')
    const MAX_PRICE = 9999
    const MIN_PRICE = 10

    const handleSetMinValue = (event) => {
        const numericValue = event.target.value.replace(REG, "");
        setMinValue(numericValue);
        setMinFilterPrice(numericValue ? numericValue : MIN_PRICE)

    };

    const validateMinValue = (event) => {
        const inputValue = event.target.value
        if(inputValue === '') setMinValue('')

        else if (+inputValue < MIN_PRICE) setMinValue(MIN_PRICE)

        else if (+inputValue > MAX_PRICE) setMinValue(MAX_PRICE)

    }

    const handleSetMaxValue = (event) => {
        const numericValue = event.target.value.replace(REG, "");
        setMaxValue(numericValue);
        setMaxFilterPrice(numericValue ? numericValue : MAX_PRICE)
    };

    const validateMaxValue = (event) => {
        const inputValue = event.target.value

        if(inputValue === '') setMaxValue('')

        else if (+inputValue < MIN_PRICE) setMaxValue(MIN_PRICE)

        else if (+inputValue > MAX_PRICE) setMaxValue(MAX_PRICE)
    }

    return (
        <div>
            <h2>Price:</h2>
            <input type="text" value={minValue} onChange={handleSetMinValue} onBlur={validateMinValue}
                   placeholder='from'/>
            &#32;&mdash;&#32;
            <input type="text" value={maxValue} onChange={handleSetMaxValue} onBlur={validateMaxValue}
                   placeholder='to'/>
        </div>
    );
};

export default FilterByPrice;