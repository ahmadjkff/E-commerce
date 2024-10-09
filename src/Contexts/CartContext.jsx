import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [total, setTotal] = useState(
    parseFloat(
      cart
        .reduce((acc, product) => acc + product.price * product.quantity, 0)
        .toFixed(2)
    )
  );

  const setCartItems = (product) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.some((item) => item.id === product.id);

      if (isProductInCart) {
        window.alert(`Product "${product.title}" already in cart`);
        return [...prevCart];
      }

      return [...prevCart, { ...product, quantity: 1 }];
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
      value={{ cart, setCart, setCartItems, removeCartItem, total, setTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
