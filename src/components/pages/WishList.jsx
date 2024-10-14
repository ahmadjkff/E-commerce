import { useContext } from "react";
import Product from "../Product";
import { ProductContext } from "../../Contexts/ProductContext";
import { WishlistContext } from "../../Contexts/WishlistContext";
import { CartContext } from "../../Contexts/CartContext";

function WishList() {
  const { products } = useContext(ProductContext);
  const { wishList, setWishList } = useContext(WishlistContext);
  const { setCartItems } = useContext(CartContext);

  return (
    <div className="flex flex-col xs:px-10 sm:px-20 md:px-[135px]">
      <div className="flex gap-5 mb-16 items-center justify-between">
        <h1 className="text-xl">WishList ({wishList.length})</h1>
        <button
          className="border mt-4 xs:px-4 sm:px-6 sm:py-2 md:px-12 md:py-4 rounded-md hover:border-black hover:bg-button2 hover:text-white"
          onClick={() => {
            wishList.forEach((item) => setCartItems(item, true));
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
            isWishList={wishList.some((item) => item?.id === product?.id)}
            product={product}
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
              isWishList={wishList.some((item) => item?.id === product?.id)}
              product={product}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishList;
