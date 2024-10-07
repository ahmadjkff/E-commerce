import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const fetchProductsData = async (category = "", limit) => {
  const url = category
    ? `https://dummyjson.com/products/category/${category}?limit=${limit}`
    : `https://dummyjson.com/products?limit=${limit}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.products || []; // Return an empty array if products are undefined
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};

const fetchSingleProduct = async (id) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const ProductProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(8);
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState(null);
  const [id, setId] = useState(null);

  const setWishListItems = (id) => {
    setWishList((prevWishList) => {
      return prevWishList.includes(id)
        ? prevWishList.filter((item) => item !== id)
        : [...prevWishList, id];
    });
  };

  useEffect(() => {
    const loadWishList = () => {
      const data = localStorage.getItem("wishList");
      if (data) {
        setWishList(JSON.parse(data));
      } else {
        setWishList([]); // Set to empty array if no data found
      }
    };

    loadWishList();
  }, []);

  // Save wishlist to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList, setWishList]);

  // Fetch products based on category and limit
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchProductsData(category, limit);
      setProducts(data);
    };

    fetchProducts();
  }, [category, limit]);

  // Fetch single product by id
  useEffect(() => {
    if (id !== null) {
      const fetchProduct = async () => {
        const data = await fetchSingleProduct(id);
        setProduct(data);
      };
      fetchProduct();
    }
  }, [id]);

  return (
    <ProductContext.Provider
      value={{
        wishList,
        setWishListItems,
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
        setWishList,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
