import React from 'react';

const PriceSort = ({ handleSort, sortBy }) => {
  const isActiveAsc = sortBy === 'price-asc';
  const isActiveDesc = sortBy === 'price-desc';

  return (
    <div className="price-sort">
      <button
        onClick={() => handleSort('price-asc')}
        style={{ backgroundColor: isActiveAsc ? '#e0e0e0' : '#f5f5f5' }}
      >
        Sort by Price Ascending
      </button>
      <button
        onClick={() => handleSort('price-desc')}
        style={{ backgroundColor: isActiveDesc ? '#e0e0e0' : '#f5f5f5' }}
      >
        Sort by Price Descending
      </button>
    </div>
  );
};

export default PriceSort;
