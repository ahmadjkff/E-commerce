import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [wishList, setWishList] = useState(
    JSON.parse(localStorage.getItem("wishList")) || []
  );

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

  return (
    <ProductContext.Provider value={{ wishList, setWishListItems }}>
      {children}
    </ProductContext.Provider>
  );
};
