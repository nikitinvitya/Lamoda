import React, { useState } from 'react';
import PriceSort from '../Sort/PriceSort';
import RatingSort from '../Sort/RatingSort';

const sortFunctions = {
  'price-asc': (a, b) => a.price - b.price,
  'price-desc': (a, b) => b.price - a.price,
  'rating': (a, b) => b.rating - a.rating,
};

const ProductList = ({ products }) => {
  const [sortBy, setSortBy] = useState('rating');

  const sortedProducts = [...products].sort(sortFunctions[sortBy]);

  return (
    <div>
      <div className="sort-buttons">
        <PriceSort handleSort={setSortBy} sortBy={sortBy} />
        <RatingSort handleSort={setSortBy} sortBy={sortBy} />
      </div>
      
      <div className="products-container">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <div key={product.id} className="product">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-count">{product.name}</div>
              <div className="product-description">Description: {product.description}</div>
              <div className="product-rating">{product.rating}</div>
              <div className="product-color">Color: {product.color}</div>
              <div className="product-price">${product.price}</div>
            </div>
          ))
        ) : (
          <div className="no-results-message">Nothing was found for your request</div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
