import { useMemo } from 'react';

const useFilteredProducts = (products, searchTerm, priceRange, selectedColors, sortBy) => {
  const filters = [
    (product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    (product) => product.price >= priceRange[0] && product.price <= priceRange[1],
    (product) => selectedColors.length === 0 || selectedColors.includes(product.color),
  ];

  return useMemo(() => {
    return products.filter(product => 
      filters.every(filter => filter(product))
    ).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return b.rating - a.rating;
    });
  }, [products, searchTerm, priceRange, selectedColors, sortBy]);
};

export default useFilteredProducts;
