import { createContext, useState, useEffect } from "react";
import { fetchProductsData, fetchSingleProduct } from "../API";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(0);
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState(null);
  const [id, setId] = useState(null);
  const [ratingProducts, setRatingProducts] = useState([]);
  const [rating, setRating] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchProductsData(category, limit);
      setProducts(data);
    };

    fetchProducts();
  }, [category, limit]);

  useEffect(() => {
    if (id !== null) {
      const fetchProduct = async () => {
        const data = await fetchSingleProduct(id);
        setProduct(data);
      };
      fetchProduct();
    }
  }, [id]);

  const setRatingProductsItems = (product) => {
    setRatingProducts((prevRatingProducts) => {
      return [...prevRatingProducts, product];
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        limit,
        setLimit,
        setCategory,
        fetchProductsData,
        setProducts,
        fetchSingleProduct,
        product,
        setId,
        setProduct,
        ratingProducts,
        setRatingProducts,
        setRatingProductsItems,
        setRating,
        rating,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
