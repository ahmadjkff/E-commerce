import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const setCartItems = (product) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.some((item) => item.id === product.id);
      if (isProductInCart) {
        window.alert("Product already in cart");
        return [...prevCart];
      }
      return [...prevCart, product];
    });
  };

  const removeCartItem = (id) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== id);
    });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <CartContext.Provider
      value={{ cart, setCart, setCartItems, removeCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
