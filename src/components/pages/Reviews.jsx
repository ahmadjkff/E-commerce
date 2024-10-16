import {  useContext } from "react";
import Product from "../Product";
import { ProductContext } from "../../Contexts/ProductContext";
import { WishlistContext } from "../../Contexts/WishlistContext";

function Reviews() {
  const { wishList } = useContext(WishlistContext);
  const { ratingProducts } = useContext(ProductContext);

  return (
    <div className="flex flex-col gap-8 mx-[135px] my-32 xs2:items-center md:items-start">
      <p className=" mb-20 ">
        <span className="text-gray-400">Home /</span> My reviews
      </p>
      <h1 className="text-3xl font-semibold">
        Reviews({ratingProducts?.length})
      </h1>
      <div className="flex gap-8 flex-wrap items-center">
        {ratingProducts.length > 0 ? (
          ratingProducts?.map((product, index) => (
            <Product
              key={index}
              rating={product?.userRating}
              ratingReadonly={true}
              isWishList={wishList.some(
                (item) => item?.id === product?.product?.id
              )}
              product={product?.product}
            />
          ))
        ) : (
          <h1 className="text-5xl">No reviews yet</h1>
        )}
      </div>
    </div>
  );
}

export default Reviews;
