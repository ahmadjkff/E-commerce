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
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");

  const setCartItems = (product, fromWishlist) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.some((item) => item.id === product.id);

      if (isProductInCart) {
        setShowAlert(true);
        setAlertMessage(
          `${
            fromWishlist
              ? "Products already in cart"
              : `"${product.title}" already in cart`
          }`
        );
        setAlertSeverity("warning");
        return [...prevCart];
      }
      setShowAlert(true);
      setAlertMessage(
        `${
          fromWishlist
            ? "Products moved to cart"
            : `"${product.title}" added to cart`
        }`
      );
      setAlertSeverity("success");
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
  useEffect(() => {
    setTotal(
      parseFloat(
        cart
          .reduce((acc, product) => acc + product.price * product.quantity, 0)
          .toFixed(2)
      )
    );
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        setCartItems,
        removeCartItem,
        total,
        setTotal,
        showAlert,
        setShowAlert,
        alertMessage,
        alertSeverity,
        setAlertMessage,
        setAlertSeverity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
