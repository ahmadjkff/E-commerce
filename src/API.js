// api.js
export const fetchProductsData = async (category = "", limit) => {
  const url = category
    ? `https://dummyjson.com/products/category/${category}?limit=${limit}`
    : `https://dummyjson.com/products?limit=${limit}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.products || [];
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};

export const fetchSingleProduct = async (id) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return null;
  }
};
