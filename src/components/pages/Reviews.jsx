import { useEffect, useContext } from "react";
import Product from "../Product";
import { ProductContext } from "../../Contexts/ProductContext";
import { WishlistContext } from "../../Contexts/WishlistContext";

function Reviews() {
  const { wishList } = useContext(WishlistContext);
  const { ratingProducts } = useContext(ProductContext);

  console.log("ratingProducts", ratingProducts);

  return (
    <div className="flex flex-col gap-8 mx-[135px] my-32 items-start">
      <p className=" mb-20 ">
        <span className="text-gray-400">Home /</span> My reviews
      </p>
      <h1 className="text-3xl font-semibold">
        Reviews({ratingProducts.length})
      </h1>
      <div className="flex gap-8 flex-wrap  items-center">
        {ratingProducts?.map((product) => (
          <Product
            key={product?.product?.id}
            rating={product?.userRating}
            ratingReadonly={true}
            isWishList={wishList.some(
              (item) => item?.id === product?.product?.id
            )}
            product={product?.product}
          />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
