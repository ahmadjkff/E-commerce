import { useState } from "react";

const CART = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    quantity: 1,
    image: "https://via.placeholder.com/54x54",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    quantity: 3,
    image: "https://via.placeholder.com/54x54",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    quantity: 1,
    image: "https://via.placeholder.com/54x54",
  },
];

function Cart() {
  const [cart, setCart] = useState(CART);

  // Function to calculate the subtotal based on price and quantity
  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };

  // Function to handle changes in quantity input
  const handleOnChange = (event, id) => {
    const newQuantity = parseInt(event.target.value, 10);

    // Update the quantity in the cart
    const updatedCart = cart.map((product) =>
      product.id === id ? { ...product, quantity: newQuantity } : product
    );

    setCart(updatedCart);
  };

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce(
      (acc, product) =>
        acc + calculateSubtotal(product.price, product.quantity),
      0
    );
  };

  return (
    <div className="flex flex-col mx-[135px]">
      <p className=" text-start mb-20">
        <span className="text-gray-400">Home /</span> Cart
      </p>

      <div className="flex justify-between shadow-md mb-20 py-6 px-10">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>

      {cart.map((product) => (
        <div
          key={product.id}
          className="flex justify-between items-center mb-10 py-6 px-10 shadow-md"
        >
          <div className="flex gap-6 items-center ">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </div>
          <p className="-ml-16">{product.price}</p>
          <input
            className="border py-[6px] px-3 w-[60px] h-[40px]"
            type="number"
            value={product.quantity}
            min={1}
            onChange={(event) => handleOnChange(event, product.id)}
          />
          <p className="ml-14">
            ${calculateSubtotal(product.price, product.quantity)}
          </p>
        </div>
      ))}

      <div className="flex justify-between mb-20">
        <button className="px-12 py-4 border border-black">
          Return To Shop
        </button>
        <button className="px-12 py-4 border border-black">Update Cart</button>
      </div>

      <div className="flex justify-between mb-20">
        <div className="flex gap-4 h-14">
          <input
            className="py-4 px-6 border border-black rounded-md"
            type="text"
            placeholder="Coupon Code"
          />
          <button className="bg-button2 px-12 py-4 text-white rounded-md">
            Apply Coupon
          </button>
        </div>
        <div className="flex flex-col gap-4 border-2 border-black w-[470px] px-6 py-8 justify-center text-sm">
          <p className="text-xl text-start mb-2">Cart Total</p>
          <div className="flex justify-between">
            <p>Subtotal:</p>
            <p>${calculateTotal()}</p>
          </div>
          <hr className="my-4 w-full border-t border-gray-300" />
          <div className="flex justify-between">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <hr className="my-4 w-full border-t border-gray-300" />
          <div className="flex justify-between">
            <p>Total:</p>
            <p>${calculateTotal()}</p>
          </div>
          <button className="bg-button2 px-12 py-4 self-center rounded-md text-white">
            Process To Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
