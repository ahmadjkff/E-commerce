import { Link } from "react-router-dom";
import fav from "../assets/Product/favoraite.png";
import view from "../assets/view.png";
import { useContext, useMemo, useState } from "react";
import RatingComponent from "./common/RatingComponent";
import { WishlistContext } from "../Contexts/WishlistContext";
import { CartContext } from "../Contexts/CartContext";

function Product({ rating, isWishList, product }) {
  const priceAfterDiscount = useMemo(() => {
    return (
      product.price -
      (product.price * Math.floor(product.discountPercentage)) / 100
    ).toFixed(2);
  }, [product.price, product.discountPercentage]);

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
          src={product.images?.[0] || "https://via.placeholder.com/150"}
          alt={product.title}
          width={190}
          loading="lazy"
        />
        {Math.floor(product.discountPercentage) > 0 && (
          <div className="absolute top-3 left-2 bg-button2 text-white px-3 py-1 rounded-md text-center">
            <span className="text-xs">
              -{Math.floor(product.discountPercentage)}%
            </span>
          </div>
        )}
        <button
          onClick={() => setWishListItems(product)}
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
          to={`/products/${product.id}`}
          className="absolute top-[55px] right-2 rounded-full bg-white p-2 hover:bg-button2 transition duration-300"
        >
          <img src={view} alt="View icon" width={19} height={14} />
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
        <h2>{product.title}</h2>
        <div>
          {Math.floor(product.discountPercentage) > 0 ? (
            <p>
              <span className="text-button2">${priceAfterDiscount}</span>
              <span className="ml-3 line-through ">${product.price}</span>
            </p>
          ) : (
            <p className="text-button2">${product.price}</p>
          )}
        </div>
      </div>
      <div className="flex text-sm gap-2 items-center">
        <RatingComponent
          product={product}
          rating={rating ? rating : product.rating}
        />
        <p>({product?.reviews?.length})</p>
      </div>
    </div>
  );
}

export default Product;
