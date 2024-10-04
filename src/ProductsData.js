// Fetch multiple products with an optional limit
const productsData = async (limit = 0, category) => {
  try {
    const url = category
      ? `https://dummyjson.com/products/category/${category}?limit=${limit}`
      : `https://dummyjson.com/products?limit=${limit}`;

    const response = await fetch(url);
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.log(error);
  }
};

// Fetch a single product by ID

// Export both functions
export default productsData;
