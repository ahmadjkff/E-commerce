import { useEffect, useContext } from "react";
import Product from "../Product";
import { ProductContext } from "../../Contexts/ProductContext";
import { WishlistContext } from "../../Contexts/WishlistContext";

function Reviews() {
  const { wishList } = useContext(WishlistContext);
  const { ratingProducts, rating } = useContext(ProductContext);

  console.log("ratingProducts", rating);

  return (
    <div className="flex flex-col gap-8 mx-[135px] my-32 items-center">
      <div className="flex  gap-8 flex-wrap">
        {ratingProducts.map((product) => (
          <Product
            rating={rating}
            isWishList={wishList.some((item) => item?.id === product?.id)}
            product={product}
            key={product?.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
