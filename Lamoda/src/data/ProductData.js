const colors = ['white', 'black', 'red', 'green', 'blue'];
const productNames = ['T-shirt', 'Sneakers', 'Hat', 'Jacket', 'Socks',  'Scarf', 'Jeans', 'Belt', 'Boots', 'Sunglasses' ];
const clothingCategories = ['Shirts', 'Pants', 'Dresses', 'Skirts', 'Coats', 'Blazers', 'Underwear', 'Swimwear', 'Accessories', 'Footwear'];


const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
const getRandomPrice = () => Math.floor(Math.random() * (9990)) + 10;
const getRandomRating = () => (Math.random() * 5).toFixed(1);
const getRandomCategory = () => colors[Math.floor(Math.random() * clothingCategories.length)];

const generateRandomString = (length) => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export const generateProducts = (numProducts) => {
  const initialProducts = [];

  for (let i = 0; i < numProducts; i++) {
    const randomIndex = Math.floor(Math.random() * productNames.length);
    const product = {
      id: i + 1,
      name: productNames[randomIndex],
      description: generateRandomString(Math.floor(Math.random() * (5)) + 10),
      color: getRandomColor(),
      price: getRandomPrice(),
      rating: getRandomRating(),
      category: getRandomCategory(),
      image: `images/${productNames[randomIndex].toLowerCase()}.webp`,
    };
    initialProducts.push(product);
  }

  return initialProducts;
};
