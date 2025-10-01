import React from 'react';
import classes from './ProductItem.module.css'


const ProductItem = ({id, color, name, price, rating, category, }) => {
    return (
        <div className={classes.container}>
            <img src="/images/product.svg" alt="photo"/>
            <h1>{name}</h1>
            <p>Product Description</p>
            <p><b>Color</b>: {color}</p>
            <p><b>Rating</b>: {rating}</p>
            <p><b>Price</b>: {price}$</p>
        </div>
    );
};

export default ProductItem;