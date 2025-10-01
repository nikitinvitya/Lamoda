import React from 'react';
import classes from './NotFound.module.css'

const NotFound = () => {
    return (
        <div className={classes.container}>
            <p>There are no products with the selected characteristics</p>
        </div>
    );
};

export default NotFound;