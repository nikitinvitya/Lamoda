import React from 'react';
import classes from './ProductList.module.css'
import ProductItem from "../ProductItem/ProductItem.jsx";

const ProductList = ({products}) => {
    return (
        <div className={classes.container}>
            {
                products.map((product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        color={product.color}
                        name={product.name}
                        description={product.description}
                        rating={product.rating}
                        imageUrl={product.imageUrl}
                        category={product.category}
                        price={product.price}
                    />
                ))
            }
        </div>
    );
};

export default ProductList;