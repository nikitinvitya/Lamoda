import React from 'react';
import classes from './FilterByColor.module.css'

const FilterByColor = ({colors, changeSelectedColor}) => {
    return (
        <div className={classes.container}>
            <h2>Color:</h2>
            {
                [...colors].map((color) => (
                    <div key={color}>
                        <input type="checkbox" onChange={() => changeSelectedColor(color)}/>
                        <label>{color}</label>
                    </div>

                ))
            }
        </div>
    );
};

export default FilterByColor;