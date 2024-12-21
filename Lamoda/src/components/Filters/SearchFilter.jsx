import React from 'react';

const SearchFilter = ({ searchTerm, handleSearch }) => (
  <div className="search-filter">
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={handleSearch}
    />
  </div>
);

export default SearchFilter;
