import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 0,
    name: "LCD Monitor",
    price: 650,
    quantity: 1,
    image: "https://via.placeholder.com/52x52",
  },
  {
    id: 1,
    name: "H1 Gamepad",
    price: 550,
    quantity: 2,
    image: "https://via.placeholder.com/52x52",
  },
];

const Cart = () => {
  const [cartProducts, setCartProducts] = useState(products);
  const [total, setTotal] = useState(0);

  const handleQuantityChange = (e, index) => {
    const newQuantity = Number(e.target.value);
    const updatedProducts = [...cartProducts];
    updatedProducts[index].quantity = newQuantity;
    setCartProducts(updatedProducts);
  };

  useEffect(() => {
    const newTotal = cartProducts.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setTotal(newTotal);
  }, [cartProducts]); // Recalculate total whenever cartProducts changes

  const removeItem = (index) => {
    const updatedProducts = cartProducts.filter((_, i) => i !== index);
    setCartProducts(updatedProducts);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full xs:max-w-full lg:max-w-[calc(100%-270px)] xs:mx-10">
        <p className="text-start mb-20">
          <span className="text-gray-400">Home /</span> Cart
        </p>
        <div className="flex flex-col gap-10 p-4">
          <div className="grid grid-cols-4 font-semibold text-gray-700 py-4 shadow-md border-gray-300 xs:hidden lg:grid">
            <span>Product</span>
            <span className="text-center">Price</span>
            <span className="text-center">Quantity</span>
            <span className="text-center">Subtotal</span>
          </div>
          {cartProducts.map((product, index) => (
            <div
              key={index}
              className="items-center p-4 shadow-md border-gray-200 xs:flex-col lg:grid xs:grid-cols-1 lg:grid-cols-4"
            >
              <div className="flex items-center space-x-4">
                <button
                  className="text-red-500 text-xl"
                  onClick={() => removeItem(index)}
                >
                  ❌
                </button>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 object-cover"
                />
                <span>{product.name}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="xs:block lg:hidden">Price:</span>
                <span className="text-center">${product.price}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="xs:block lg:hidden">Quantity:</span>
                <input
                  type="number"
                  value={product.quantity}
                  onChange={(e) => handleQuantityChange(e, index)}
                  className="w-16 px-2 py-1 border rounded text-center"
                  min="1"
                />
              </div>
              <div className="flex justify-between gap-4">
                <span className="xs:block lg:hidden">Total:</span>
                <span className="text-center">
                  ${product.price * product.quantity}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mb-20 gap-4 xs:flex-col lg:flex-row">
          <button className="px-12 py-4 border border-black rounded-md hover:bg-button2 hover:text-white">
            Return To Shop
          </button>
          <button className="px-12 py-4 border border-black rounded-md hover:bg-button2 hover:text-white">
            Update Cart
          </button>
        </div>

        <div className="flex justify-between mb-20 xs:flex-col lg:flex-row">
          <div className="flex gap-4 h-14 xs:flex-col lg:flex-row xs:mb-28">
            <input
              className="py-4 px-6 border border-black"
              type="text"
              placeholder="Coupon Code"
            />
            <button className="bg-button2 px-12 py-4 text-white rounded-md hover:bg-white hover:text-black border hover:border-black">
              Apply Coupon
            </button>
          </div>
          <div className="flex flex-col gap-4 border-2 border-black lg:w-[470px] px-6 py-8 justify-center">
            <p className="text-xl text-start mb-2">Cart Total</p>
            <div className="flex justify-between">
              <p>Subtotal:</p>
              <p>{total}</p>
            </div>
            <hr className="my-4 w-full border-t border-gray-300" />
            <div className="flex justify-between">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <hr className="my-4 w-full border-t border-gray-300" />
            <div className="flex justify-between">
              <p>Total:</p>
              <p>{total}</p>
            </div>
            <Link
              to="/checkout"
              className="bg-button2 px-12 py-4 self-center rounded-md text-white hover:bg-white hover:text-black border hover:border-black"
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
