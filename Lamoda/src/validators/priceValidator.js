export const validatePriceInput = (value, defaultValue) => {
    if (value === '') return defaultValue;
    const parsedValue = parseInt(value, 10);
    return isNaN(parsedValue) ? defaultValue : parsedValue;
  };
  
export const adjustPriceRange = (min, max, minPrice, maxPrice) => [
  Math.max(minPrice, Math.min(min, max)),
  Math.min(maxPrice, Math.max(min, max)),
];
  