import React from 'react';
import classes from './ProductsQuantity.module.css'

const ProductsQuantity = ({productCount}) => {
    return (
        <div className={classes.wrapper}>
            <p>Total products: {productCount}</p>
        </div>
    )
};

export default ProductsQuantity;