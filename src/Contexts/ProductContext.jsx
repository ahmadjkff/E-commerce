import { createContext, useState, useEffect } from "react";
import { fetchProductsData, fetchSingleProduct } from "../API";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(0);
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState(null);
  const [id, setId] = useState(null);
  const [ratingProducts, setRatingProducts] = useState(
    JSON.parse(localStorage.getItem("ratingProducts")) || []
  );

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

  const setRatingProductsItems = (product, newValue) => {
    const isProductInReview = ratingProducts.some(
      (item) => item.product.id === product.id
    );
    setRatingProducts((prevRatingProducts) => {
      return isProductInReview
        ? window.confirm(`Do you want to rereview ${product?.title}`)
          ? (prevRatingProducts.filter((item) => item?.id !== product?.id),
            [...prevRatingProducts, { product, userRating: newValue }])
          : [...prevRatingProducts]
        : (window.alert("Thank you for your review"),
          [...prevRatingProducts, { product, userRating: newValue }]);
    });
  };

  useEffect(() => {
    localStorage.setItem("ratingProducts", JSON.stringify(ratingProducts));
  }, [ratingProducts]);

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
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
