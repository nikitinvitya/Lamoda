import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return (
        <div className={classes.container}>
            <img src="/public/images/lamoda.png" alt="Lamoda"/>
        </div>
    );
};

export default Header;