import React from 'react';
import classes from './SortControls.module.css'

const SortControls = ({sortByPrice, sortByRating}) => {
    return (
        <div className={classes.container}>
                <button onClick={() => sortByRating('desc')}>Popular ones first</button>
                <button onClick={() => sortByRating('asc')}>Unpopular ones first</button>
                <button onClick={() => sortByPrice('asc')}>Cheap ones first</button>
                <button onClick={() => sortByPrice('desc')}>Expensive ones first</button>
        </div>
    );
};

export default SortControls;