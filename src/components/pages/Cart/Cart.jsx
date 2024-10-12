import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import CartCard from "./CartCard";
import { CartContext } from "../../../Contexts/CartContext";

const Cart = () => {
  const { cart, total, setTotal } = useContext(CartContext);

  useEffect(() => {
    const newTotal = cart.reduce((acc, product) => {
      const discountPrice =
        product.price - (product.price * product.discountPercentage) / 100;
      return acc + discountPrice * product.quantity;
    }, 0);
    setTotal(newTotal.toFixed(2));
  }, [cart, setTotal]);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full xs2:max-w-full lg:max-w-[calc(100%-270px)] xs2:mx-10">
        <p className="text-start mb-20">
          <span className="text-gray-400">Home /</span> Cart
        </p>
        <div className="flex flex-col gap-10 p-4">
          <div className="grid grid-cols-4 font-semibold text-gray-700 py-4 shadow-md border-gray-300 xs2:hidden lg:grid">
            <span>Product</span>
            <span className="text-center">Price</span>
            <span className="text-center">Quantity</span>
            <span className="text-center">Subtotal</span>
          </div>
          {cart.map((product, index) => (
            <CartCard product={product} key={index} />
          ))}
        </div>
        <div className="flex justify-between mb-20 gap-4 xs2:flex-col lg:flex-row">
          <button className="px-12 py-4 border border-black rounded-md hover:bg-button2 hover:text-white">
            Return To Shop
          </button>
          <button className="px-12 py-4 border border-black rounded-md hover:bg-button2 hover:text-white">
            Update Cart
          </button>
        </div>

        <div className="flex justify-between mb-20 xs2:flex-col lg:flex-row">
          <div className="flex gap-4 h-14 xs2:flex-col lg:flex-row xs:mb-28">
            <input
              className="py-4 px-6 border border-black"
              type="text"
              placeholder="Coupon Code"
            />
            <button className="bg-button2 px-12 py-4 text-white rounded-md hover:bg-white hover:text-black border hover:border-black">
              Apply Coupon
            </button>
          </div>
          <div className="flex flex-col gap-4 border-2 border-black lg:w-[470px] px-6 py-8 xs2:my-24 md:my-auto justify-center">
            <p className="text-xl text-start mb-2">Cart Total</p>
            <div className="flex justify-between">
              <p>Subtotal:</p>
              <p>${total}</p>
            </div>
            <hr className="my-4 w-full border-t border-gray-300" />
            <div className="flex justify-between">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <hr className="my-4 w-full border-t border-gray-300" />
            <div className="flex justify-between">
              <p>Total:</p>
              <p>${total}</p>
            </div>
            <Link
              to="/checkout"
              className={`bg-button2 px-12 py-4 self-center rounded-md text-white hover:bg-white hover:text-black border hover:border-black ${
                cart.length === 0 && "pointer-events-none"
              }`}
            >
              Process To Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
