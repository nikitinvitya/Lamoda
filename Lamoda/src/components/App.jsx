import React, { useState, useEffect } from 'react';
import '../App.css';
import PriceSort from './Sort/PriceSort';
import RatingSort from './Sort/RatingSort';
import Filters from './Filters/Filters';
import ProductList from './Product/ProductList';
import ProductCount from './Product/ProductCount';
import SearchFilter from './Filters/SearchFilter';
import { generateProducts } from '../data/ProductData'; 
import useFilteredProducts from '../hooks/useFilteredProducts';

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([10, 9999]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [sortBy, setSortBy] = useState('rating');

  useEffect(() => {
    setProducts(generateProducts(21));
  }, []);

  const filteredProducts = useFilteredProducts(products, searchTerm, priceRange, selectedColors, sortBy);

  return (
    <div className="App">
      <h1>Lamoda</h1>
      <SearchFilter searchTerm={searchTerm} handleSearch={(e) => setSearchTerm(e.target.value)} />
      <div className="content-container">
        <div className="filters">
          <Filters
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedColors={selectedColors}
            setSelectedColors={setSelectedColors}
          />
          <ProductCount count={filteredProducts.length} />
        </div>
        <div className="products-container">
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default App;
