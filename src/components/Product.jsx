import { Link } from "react-router-dom";
import { useContext, useMemo, useState } from "react";
import RatingComponent from "./common/RatingComponent";
import { WishlistContext } from "../Contexts/WishlistContext";
import { CartContext } from "../Contexts/CartContext";

function Product({ rating, ratingReadonly, isWishList, product }) {
  const priceAfterDiscount = useMemo(() => {
    return (
      product?.price -
      (product?.price * Math.floor(product?.discountPercentage)) / 100
    ).toFixed(2);
  }, [product?.price, product?.discountPercentage]);

  const [isHovered, setIsHovered] = useState(false);
  const { setWishListItems } = useContext(WishlistContext);
  const { setCartItems } = useContext(CartContext);

  return (
    <div
      className="flex flex-col flex-wrap gap-4 w-[270px] text-start justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-secondary rounded-md px-10 py-4 min-h-[222px] max-h-[222px]">
        <img
          className="max-h-[200px]"
          src={product?.images?.[0] || "https://via.placeholder.com/150"}
          alt={product?.title}
          width={190}
          loading="lazy"
        />
        {Math.floor(product?.discountPercentage) > 0 && (
          <div className="absolute top-3 left-2 bg-button2 text-white px-3 py-1 rounded-md text-center">
            <span className="text-xs">
              -{Math.floor(product?.discountPercentage)}%
            </span>
          </div>
        )}
        <button
          onClick={() => setWishListItems(product)}
          className="absolute top-3 right-2 rounded-full bg-white p-1 transition duration-300"
        >
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill={`${isWishList ? "#DB4444" : "none"}`}
            xmlns="http://www.w3.org/2000/svg"
            className="hover:fill-button2"
          >
            <path
              d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <Link
          to={`/products/${product?.id}`}
          className="absolute top-[55px] right-2 rounded-full bg-white p-2"
        >
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:fill-button2"
          >
            <path
              d="M20.257 6.962C20.731 7.582 20.731 8.419 20.257 9.038C18.764 10.987 15.182 15 11 15C6.81801 15 3.23601 10.987 1.74301 9.038C1.51239 8.74113 1.38721 8.37592 1.38721 8C1.38721 7.62408 1.51239 7.25887 1.74301 6.962C3.23601 5.013 6.81801 1 11 1C15.182 1 18.764 5.013 20.257 6.962V6.962Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11 11C12.6569 11 14 9.65685 14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8C8 9.65685 9.34315 11 11 11Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
        <button
          className={`absolute bottom-0 right-0 w-full h-8 bg-black text-white hover:text-button2 ${
            isHovered ? "opacity-100" : "opacity-0"
          } transition duration-300`}
          onClick={() => setCartItems(product)}
        >
          Add to Cart
        </button>
      </div>
      <div>
        <h2>{product?.title}</h2>
        <div>
          {Math.floor(product?.discountPercentage) > 0 ? (
            <p>
              <span className="text-button2">${priceAfterDiscount}</span>
              <span className="ml-3 line-through ">${product?.price}</span>
            </p>
          ) : (
            <p className="text-button2">${product?.price}</p>
          )}
        </div>
      </div>
      <div className="flex text-sm gap-2 items-center">
        <RatingComponent
          product={product}
          rating={rating ? rating : product.rating}
          isreadonly={ratingReadonly}
        />
        <p>{ratingReadonly ? "" : `(${product?.reviews?.length})`}</p>
      </div>
    </div>
  );
}

export default Product;
