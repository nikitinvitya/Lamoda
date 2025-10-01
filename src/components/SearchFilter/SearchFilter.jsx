import React, {useState} from 'react';
import classes from './SearchFilters.module.css'

const SearchFilter = ({setSearchParam}) => {

    const [inputValue, setInputValue] = useState('')

    const handleChangeSearchParam = (event) => {
        const value = event.target.value
        setInputValue(value)
        setSearchParam(value.toLowerCase())
    }

    return (
        <div className={classes.container}>
            <label>
                <img src="public/images/search.svg" alt="search" width='50px' height='50px'/>
                <input type="text" value={inputValue} onChange={handleChangeSearchParam} placeholder='Search...'/>
            </label>
        </div>
    );
};

export default SearchFilter;