import { useContext } from "react";
import { OrdersContext } from "../../Contexts/OrdersContext";

function Cancellations() {
  const { canceledOrders, Reorder } = useContext(OrdersContext);

  return (
    <div className="flex flex-col mx-[135px] gap-5 my-20 text-start">
      <h1 className="text-2xl">Your Cancellations({canceledOrders?.length})</h1>
      {canceledOrders?.map((order, index) => (
        <div key={index} className="flex flex-col gap-4 shadow-md py-6 px-12">
          <div className="flex justify-between items-center">
            <h1>
              <span className="font-semibold">Order date: </span>
              {new Date().toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </h1>
            <p className="text-button2 font-bold">Canceled</p>
          </div>
          <div>
            {order.items.map((item, index) => (
              <div key={item.id || index} className="flex flex-col">
                <div className="flex justify-between items-center">
                  <div className="flex gap-4 items-center">
                    <img
                      src={item?.images?.[0] || ""}
                      alt={item.title || "product image"}
                      width={70}
                    />
                    <p className="font-semibold">{item.title}</p>
                  </div>
                  <p className="font-medium">${item.price}</p>
                </div>
                <div className="border-t border-button2 my-4"></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <p>Total: ${order.total}</p>
            <button
              className="border border-black rounded-md py-4 px-12 hover:bg-button2 hover:text-white"
              onClick={() => Reorder(index)}
            >
              Reorder
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cancellations;
