import { Link } from "react-router-dom";
import fav from "../assets/fav.png";
import view from "../assets/view.png";
import { useMemo } from "react";

function Product({
  id,
  name,
  price,
  discount,
  image,
  setWishListItems,
  isWishList,
}) {
  const priceAfterDiscount = useMemo(() => {
    return (price - (price * Math.floor(discount)) / 100).toFixed(2);
  }, [price, discount]);
  discount = Math.floor(discount);

  return (
    <div className="flex flex-col flex-wrap gap-4 w-[270px] text-start justify-center">
      <div className="relative bg-secondary rounded-md px-10 py-4 min-h-[222px] max-h-[222px] ">
        <img
          className="max-h-[200px]"
          src={image ? image : "https://via.placeholder.com/150"}
          alt=""
          width={190}
          loading="lazy"
        />
        <div>
          {discount > 0 && (
            <div className="absolute top-3 left-2 bg-button2 text-white px-3 py-1 rounded-md text-center">
              <span className="text-xs">-{Math.floor(discount)}%</span>
            </div>
          )}
        </div>
        <button
          onClick={() => setWishListItems(id)}
          className={`absolute top-3 right-2 rounded-full bg-white p-1 transition duration-300 hover:bg-button2 ${
            isWishList ? "bg-button2" : ""
          }`}
        >
          <img
            className={`${isWishList ? "bg-button2 rounded-full" : ""}`}
            src={fav}
            alt=""
            width={24}
          />
        </button>
        <Link
          to={`/products/${id}`}
          className="absolute top-[55px] right-2 rounded-full bg-white p-2 hover:bg-button2 transition duration-300"
        >
          <img src={view} alt="" width={19.23} height={14} />
        </Link>
      </div>
      <div>
        <h2>{name}</h2>
        <div>
          {discount > 0 ? (
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
