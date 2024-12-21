import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product">
      <div className="product-image">
        <img src={product.image} />
      </div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Color: {product.color}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
    </div>
  );
};

export default ProductCard;
