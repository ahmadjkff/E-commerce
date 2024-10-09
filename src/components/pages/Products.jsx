import { useEffect, useContext } from "react";
import Product from "../Product";
import { ProductContext } from "../../Contexts/ProductContext";
import { WishlistContext } from "../../Contexts/WishlistContext";

function Products() {
  const { products, setLimit, limit } = useContext(ProductContext);
  const { wishList } = useContext(WishlistContext);

  useEffect(() => {
    setLimit(10);
  }, []);

  const handleOnClick = () => {
    setLimit(() => limit + 10);
  };
  return (
    <div className="flex flex-col gap-8 mx-[135px] my-32 items-center">
      <div className="flex  gap-8 flex-wrap">
        {products.map((product) => (
          <Product
            id={product?.id}
            name={product?.title}
            price={product?.price}
            discount={product?.discountPercentage}
            image={product?.images?.[0] || ""}
            rating={product?.rating}
            reviews={product?.reviews?.length}
            isWishList={wishList.some((item) => item?.id === product?.id)}
            productData={product}
            key={product?.id}
          />
        ))}
      </div>
      <button
        className="bg-button2 rounded-md px-12 py-4 text-white border border-black hover:bg-white hover:text-button2"
        onClick={handleOnClick}
      >
        Load More
      </button>
    </div>
  );
}

export default Products;
