import React from 'react';

const RatingSort = ({ handleSort, sortBy }) => {
  const isActive = sortBy === 'rating';

  return (
    <button
      onClick={() => handleSort('rating')}
      style={{ backgroundColor: isActive ? '#e0e0e0' : '#f5f5f5' }}
      class='rating-sort'
    >
      Sort by Rating
    </button>
  );
};

export default RatingSort;
