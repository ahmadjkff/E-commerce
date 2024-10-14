import React, { createContext, useEffect, useState } from "react";

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders")) || []
  );
  const [canceledOrders, setCanceledOrders] = useState([]);

  function setOrdersItems(order) {
    setOrders((prevOrders) => [...prevOrders, order]);
  }

  function cancelOrder(id) {
    setCanceledOrders((prevOrders) => [...prevOrders, orders[id]]);
    setOrders((prevOrders) => {
      return prevOrders.filter((order, index) => index !== id);
    });
  }

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  return (
    <OrdersContext.Provider
      value={{ orders, setOrdersItems, cancelOrder, canceledOrders }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
