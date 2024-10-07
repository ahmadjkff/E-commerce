import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const productsData = async (category, limit) => {
  try {
    const url = category
      ? `https://dummyjson.com/products/category/${category}?limit=${limit}`
      : `https://dummyjson.com/products?limit=${limit}`;

    const response = await fetch(url);
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const ProductProvider = ({ children }) => {
  const [wishList, setWishList] = useState(
    JSON.parse(localStorage.getItem("wishList")) || []
  );
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(0);
  const [category, setCategory] = useState("");

  const setWishListItems = (id) => {
    if (!wishList.includes(id)) {
      setWishList((prevWishList) => [...prevWishList, id]);
    } else {
      setWishList((prevWishList) => prevWishList.filter((item) => item !== id));
    }
  };

  useEffect(() => {
    const loadWishList = () => {
      const data = localStorage.getItem("wishList");
      if (data) {
        setWishList(JSON.parse(data));
      }
    };
    loadWishList();
  }, []);

  useEffect(() => {
    const saveWishList = () => {
      localStorage.setItem("wishList", JSON.stringify(wishList));
    };
    saveWishList();
  }, [wishList]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await productsData(category, limit); // Adjust the limit and category as needed
      setProducts(data);
    };
    fetchProducts();
  }, [category, limit]);

  return (
    <ProductContext.Provider
      value={{
        wishList,
        setWishListItems,
        products,
        limit,
        setLimit,
        setCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
