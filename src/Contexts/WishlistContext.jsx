import React, { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishList, setWishList] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  const setWishListItems = (product) => {
    setWishList((prevWishList) => {
      const isProductInWishlist = prevWishList.some(
        (item) => item?.id === product?.id
      );

      return isProductInWishlist
        ? prevWishList.filter((item) => item?.id !== product?.id)
        : [...prevWishList, product];
    });
  };

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishList));
  }, [wishList]);
  return (
    <WishlistContext.Provider
      value={{ wishList, setWishList, setWishListItems }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
