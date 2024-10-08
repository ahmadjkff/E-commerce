import { useContext } from "react";
import Product from "../Product";
import RatingComponent from "../RatingComponent";
import { ProductContext } from "../../ProductContext";

function WishList() {
  const { products, wishList, setWishList, setCartItems } =
    useContext(ProductContext);

  return (
    <div className="flex flex-col xs:px-10 sm:px-20 md:px-[135px]">
      <div className="flex gap-5 mb-16 items-center justify-between">
        <h1 className="text-xl">WishList ({wishList.length})</h1>
        <button
          className="border mt-4 xs:px-4 sm:px-6 sm:py-2 md:px-12 md:py-4 rounded-md hover:border-black hover:bg-button2 hover:text-white"
          onClick={() => {
            wishList.forEach((item) => setCartItems(item));
            setWishList([]);
          }}
        >
          Move All To Bag
        </button>
      </div>
      <div className="flex flex-wrap gap-[30px] mb-20 justify-center">
        {wishList.map((product) => (
          <Product
            key={product?.id}
            id={product?.id}
            name={product?.title}
            price={product?.price}
            discount={product?.discountPercentage}
            image={product?.images?.[0] || ""}
            isWishList={wishList.some((item) => item?.id === product?.id)}
            productData={product}
          />
        ))}
      </div>
      <div className="flex gap-5 mb-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-button2 w-5 h-10 rounded-md" />
          <h1 className="text-xl">Just For You</h1>
        </div>
        <button className="border mt-4 xs:px-4 sm:px-6 sm:py-2 md:px-12 md:py-4 rounded-md hover:border-black hover:bg-button2 hover:text-white">
          See All
        </button>
      </div>
      <div className="flex flex-wrap gap-[30px] mb-36 justify-center">
        {products.slice(0, 4).map((product) => (
          <div key={product?.id}>
            <Product
              id={product?.id}
              name={product?.title}
              price={product?.price}
              discount={product?.discountPercentage}
              image={product?.images?.[0] || ""}
              isWishList={wishList.some((item) => item?.id === product?.id)}
              productData={product}
            />
            <div className="flex text-sm gap-2 items-center mt-2">
              <RatingComponent rating={product?.rating} />
              <p>({product?.reviews?.length})</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishList;
