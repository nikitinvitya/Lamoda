import React from 'react';
import { validatePriceInput, adjustPriceRange } from '../../validators/priceValidator';

const Filters = ({ priceRange, setPriceRange, selectedColors, setSelectedColors }) => {
  const minPrice = 10;
  const maxPrice = 9999;

  const handlePriceChange = (min, max) => {
    setPriceRange(adjustPriceRange(min, max, minPrice, maxPrice));
  };

  const handleMinPriceChange = (e) => {
    const newMin = validatePriceInput(e.target.value, minPrice);
    handlePriceChange(newMin, priceRange[1]);
  };

  const handleMaxPriceChange = (e) => {
    const newMax = validatePriceInput(e.target.value, maxPrice);
    handlePriceChange(priceRange[0], newMax);
  };

  const handleColorChange = (color) => {
    setSelectedColors(
      selectedColors.includes(color)
        ? selectedColors.filter((c) => c !== color)
        : [...selectedColors, color]
    );
  };

  return (
    <div className="filters">
      <div className="price-filter">
        <h3>Filter by Price</h3>
        <label>Min Price</label>
        <input
          type="text"
          placeholder="Min price"
          value={priceRange[0]}
          onChange={handleMinPriceChange}
        />
        <label>Max Price</label>
        <input
          type="text"
          placeholder="Max price"
          value={priceRange[1]}
          onChange={handleMaxPriceChange}
        />
      </div>

      <div className="color-filter">
        <h3>Filter by Color</h3>
        {['white', 'black', 'red', 'green', 'blue'].map((color) => (
          <label key={color}>
            <input
              type="checkbox"
              value={color}
              checked={selectedColors.includes(color)}
              onChange={() => handleColorChange(color)}
            />
            {color}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filters;
