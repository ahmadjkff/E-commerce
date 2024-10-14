import { LocalLaundryService } from "@mui/icons-material";
import React, { createContext, useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders")) || []
  );
  const [canceledOrders, setCanceledOrders] = useState(
    JSON.parse(localStorage.getItem("canceledOrders")) || []
  );
  const { setShowAlert, setAlertMessage, setAlertSeverity } =
    useContext(CartContext);

  function setOrdersItems(order) {
    setOrders((prevOrders) => [...prevOrders, order]);
  }

  function cancelOrder(order, id) {
    setCanceledOrders((prevOrders) => [...prevOrders, order]);
    setOrders((prevOrders) => {
      return prevOrders.filter((order, index) => index !== id);
    });
    setShowAlert(true);
    setAlertMessage("Order has been canceled");
    setAlertSeverity("info");
  }

  function Reorder(id) {
    setCanceledOrders((prevOrders) => {
      setOrders((prevOrders) => [...prevOrders, canceledOrders[id]]);
      return prevOrders.filter((order, index) => index !== id);
    });
    setShowAlert(true);
    setAlertMessage("Order has been reordered");
    setAlertSeverity("success");
  }

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem("canceledOrders", JSON.stringify(canceledOrders));
  }, [canceledOrders]);

  return (
    <OrdersContext.Provider
      value={{ orders, setOrdersItems, cancelOrder, canceledOrders, Reorder }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
