import React from 'react';
import FilterByPrice from "../FilterByPrice/FilterByPrice.jsx";
import FilterByColor from "../FilterByColor/FilterByColor.jsx";
import classes from './Filters.module.css'

const Filters = ({setMinFilterPrice, setMaxFilterPrice, changeSelectedColor, colors,}) => {
    return (
        <div className={classes.container}>
            <FilterByColor
                colors={colors}
                changeSelectedColor={changeSelectedColor}
            />
            <FilterByPrice
                setMinFilterPrice={setMinFilterPrice}
                setMaxFilterPrice={setMaxFilterPrice}
            />
        </div>
    );
};
export default Filters;