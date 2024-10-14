import { useContext } from "react";
import { OrdersContext } from "../../Contexts/OrdersContext";

function Orders() {
  const { orders, cancelOrder } = useContext(OrdersContext);

  return (
    <div className="flex flex-col items-center xs2:mx-20 md:mx-[135px] gap-5 my-20 text-start">
      <h1 className="text-2xl">Your Orders: ({orders?.length})</h1>
      {orders.map((order, index) => (
        <div key={index} className="flex flex-col gap-4 shadow-md py-6 px-12">
          <div className="flex justify-between items-center gap-2 xs2:flex-col md:flex-row">
            <h1>
              <span className="font-semibold">Order date: </span>
              {new Date(order.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </h1>
            <p className="text-green-500 font-bold">Processing</p>
          </div>
          <div>
            {order.items.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex justify-between items-center gap-2 xs2:flex-col md:flex-row">
                  <div className="flex gap-4 items-center xs2:flex-col md:flex-row">
                    <img src={item.images[0]} alt="product image" width={70} />
                    <p className="font-semibold">{item.title}</p>
                  </div>
                  <p className="font-medium">${item.price}</p>
                </div>
                <div className="border-t border-button2 my-4"></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center gap-3 xs2:flex-col md:flex-row">
            <p>Total: ${order.total}</p>
            <button
              className="border border-black rounded-md py-4 px-12 hover:bg-button2 hover:text-white"
              onClick={() => cancelOrder(order, index)}
            >
              Cancel
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Orders;
