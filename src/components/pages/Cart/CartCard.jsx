import { useContext } from "react";
import { ProductContext } from "../../../ProductContext";

function CartCard({ product }) {
  const { removeCartItem } = useContext(ProductContext);

  const handleQuantityChange = (e) => {
    console.log("handleQuantityChange", e.target.value);
  };

  return (
    <div className="items-center p-4 shadow-md border-gray-200 xs:flex-col lg:grid xs:grid-cols-1 lg:grid-cols-4">
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
        <span className="xs:block lg:hidden">Price:</span>
        <span className="text-center">${product.price}</span>
      </div>
      <div className="flex justify-between gap-4">
        <span className="xs:block lg:hidden">Quantity:</span>
        <input
          type="number"
          value={1}
          onChange={(e) => handleQuantityChange(e)}
          className="w-16 px-2 py-1 border rounded text-center"
          min="1"
        />
      </div>
      <div className="flex justify-between gap-4">
        <span className="xs:block lg:hidden">Total:</span>
        <span className="text-center">${product.price * 1}</span>
      </div>
    </div>
  );
}

export default CartCard;
