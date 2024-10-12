import { useContext } from "react";
import { CartContext } from "../../../Contexts/CartContext";

function CartCard({ product }) {
  const { removeCartItem, setCart } = useContext(CartContext);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10) || 1;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const discountPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="items-center p-4 shadow-md border-gray-200 xs2:flex-col lg:grid xs2:grid-cols-1 lg:grid-cols-4">
      <div className="flex items-center space-x-4">
        <button
          className="text-red-500 text-xl"
          onClick={() => removeCartItem(product.id)}
        >
          ❌
        </button>
        <img
          src={product?.images?.[0]}
          alt={product.name}
          className="w-12 h-12 object-cover"
        />
        <span>{product.name}</span>
      </div>
      <div className="flex justify-between gap-4">
        <span className="xs2:block lg:hidden">Price:</span>
        <span className="text-center">${discountPrice}</span>
      </div>
      <div className="flex justify-between gap-4">
        <span className="xs2:block lg:hidden">Quantity:</span>
        <input
          type="number"
          value={product.quantity}
          onChange={handleQuantityChange}
          className="w-16 px-2 py-1 border rounded text-center"
          min="1"
        />
      </div>
      <div className="flex justify-between gap-4">
        <span className="xs2:block lg:hidden">Total:</span>
        <span className="text-center">
          ${(discountPrice * product.quantity).toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default CartCard;
