import { Link } from "react-router-dom";
import fav from "../assets/Product/favoraite.png";
import view from "../assets/view.png";
import { useContext, useMemo, useState } from "react";
import { ProductContext } from "../ProductContext";

function Product({
  id,
  name,
  price,
  discount,
  image,
  isWishList,
  productData,
}) {
  const priceAfterDiscount = useMemo(() => {
    return (price - (price * Math.floor(discount)) / 100).toFixed(2);
  }, [price, discount]);
  const [isHovered, setIsHovered] = useState(false);
  const { setWishListItems, setCartItems } = useContext(ProductContext);

  return (
    <div
      className="flex flex-col flex-wrap gap-4 w-[270px] text-start justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-secondary rounded-md px-10 py-4 min-h-[222px] max-h-[222px]">
        <img
          className="max-h-[200px]"
          src={image || "https://via.placeholder.com/150"}
          alt={name}
          width={190}
          loading="lazy"
        />
        {Math.floor(discount) > 0 && (
          <div className="absolute top-3 left-2 bg-button2 text-white px-3 py-1 rounded-md text-center">
            <span className="text-xs">-{Math.floor(discount)}%</span>
          </div>
        )}
        <button
          onClick={() => setWishListItems(productData)}
          className={`absolute top-3 right-2 rounded-full bg-white p-1 transition duration-300 hover:bg-button2 ${
            isWishList ? "bg-button2" : ""
          }`}
        >
          <img
            className={`${isWishList ? "bg-button2 rounded-full" : ""}`}
            src={fav}
            alt="Wishlist icon"
            width={24}
          />
        </button>
        <Link
          to={`/products/${id}`}
          className="absolute top-[55px] right-2 rounded-full bg-white p-2 hover:bg-button2 transition duration-300"
        >
          <img src={view} alt="View icon" width={19} height={14} />
        </Link>
        <button
          className={`absolute bottom-0 right-0 w-full h-8 bg-black text-white hover:text-yellow-200 ${
            isHovered ? "opacity-100" : "opacity-0"
          } transition duration-300`}
          onClick={() => setCartItems(productData)}
        >
          Add to Cart
        </button>
      </div>
      <div>
        <h2>{name}</h2>
        <div>
          {Math.floor(discount) > 0 ? (
            <p>
              <span className="text-button2">${priceAfterDiscount}</span>
              <span className="ml-3 line-through ">${price}</span>
            </p>
          ) : (
            <p className="text-button2">${price}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
