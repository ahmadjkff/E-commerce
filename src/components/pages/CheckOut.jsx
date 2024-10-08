import { useContext } from "react";
import payment from "../../assets/payment.png";
import { CartContext } from "../../Contexts/CartContext";

const DETAILS = [
  { name: "First Name", label: "name", required: true, type: "text" },
  { name: "Company Name", label: "company", required: false, type: "text" },
  { name: "Street Address", label: "address", required: true, type: "text" },
  {
    name: "Apartment, floor, etc. (optional)",
    label: "apartment",
    required: false,
    type: "text",
  },
  { name: "Town / City", label: "city", required: true, type: "text" },
  { name: "Phone Number", label: "phone", required: true, type: "text" },
  { name: "Email Address", label: "email", required: true, type: "email" },
];

function Checkout() {
  const { cart, total } = useContext(CartContext);

  return (
    <div className="xs:mx-20 md:mx-[135px] text-start mb-36">
      <p className="mb-20">
        <span className="text-gray-400">
          Account / My Account / Product / View Cart /
        </span>
        Check Out
      </p>

      <h2 className="text-4xl mb-12">Billing Details</h2>

      <div className="flex xs:flex-col xs:justify-center md:justify-between md:flex-row">
        <div className="xs:w-full md:w-[500px]">
          {DETAILS.map((detail, index) => (
            <div key={index} className="flex flex-col">
              <label htmlFor={detail.label}>
                {detail.name}
                <span className="text-button2">
                  {detail.required ? "*" : ""}
                </span>
              </label>
              <input
                className="bg-secondary py-4 px-4 rounded-md mb-8"
                id={detail.label}
                type={detail.type}
                required={detail.required}
              />
            </div>
          ))}
          <div className="flex gap-4 mb-10">
            <input className="w-6 h-6" type="checkbox" name="save" id="save" />
            <p>Save this information for faster check-out next time</p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {cart.map((product, index) => (
            <div className="flex justify-between items-center" key={index}>
              <div className="flex gap-6 items-center">
                <img src={product.images[0]} alt="" width={70} />
                <p>{product.title}</p>
              </div>
              <span>${product.price * product.quantity}</span>
            </div>
          ))}
          <div className="flex justify-between items-center">
            <span>Subtotal:</span>
            <span>${total}</span>
          </div>
          <div className="w-full border-t border-black" />
          <div className="flex justify-between items-center">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="w-full border-t border-black" />
          <div className="flex justify-between items-center">
            <span>Total:</span>
            <span>${total}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <input
                className="w-6 h-6 text-black"
                id="bank"
                name="PaymentMethod"
                type="radio"
              />
              <label htmlFor="bank">Bank</label>
            </div>
            <img src={payment} alt="" width={192} />
          </div>
          <div className="flex gap-4">
            <input
              className="w-6 h-6 text-black"
              id="cash"
              name="PaymentMethod"
              type="radio"
            />
            <label htmlFor="cash">Cash On Delivery</label>
          </div>
          <div className="flex gap-4  xs:flex-col md:flex-row">
            <input
              className="py-4 px-6 bg-secondary rounded-md border border-black"
              type="text"
              placeholder="Coupon Code"
            />
            <button className="bg-button2 py-4 px-12 rounded-md text-white">
              Apply Coupon
            </button>
          </div>
          <button className="bg-button2 py-4 px-12 rounded-md text-white">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
