import { useContext, useEffect, useState } from "react";
import Product from "../Product";
import productsData from "../../ProductsData";
import Ratingg from "../Ratingg";
import { ProductContext } from "../../ProductContext";
function WishList() {
  const [products, setProducts] = useState([]);
  const wishList = useContext(ProductContext).wishList;
  const setWishListItems = useContext(ProductContext).setWishListItems;

  useEffect(() => {
    productsData().then((data) => {
      setProducts(data);
    });
  }, []);

  const handleMoveAllToBag = () => {
    // Add logic to move all wishlist items to the bag
    // For now, just clearing the wishlist
    // setWishList([]);
  };

  return (
    <div className="flex flex-col xs:px-10 sm:px-20 md:px-[135px]">
      <div className="flex gap-5 mb-16 items-center justify-between">
        <h1 className="text-xl">WishList ({wishList.length})</h1>
        <button
          onClick={handleMoveAllToBag}
          className="border mt-4 xs:px-4 sm:px-6 sm:py-2 md:px-12 md:py-4 rounded-md hover:border-black hover:bg-button2 hover:text-white"
        >
          Move All To Bag
        </button>
      </div>
      <div className="flex flex-wrap gap-[30px] mb-20 justify-center">
        {products.map((product) =>
          wishList.includes(product.id) ? (
            <Product
              key={product.id}
              id={product.id}
              name={product.title}
              price={product.price}
              discount={product.discountPercentage}
              image={product.images[0]}
              setWishListItems={setWishListItems}
              isWishList={wishList.includes(product.id)}
            />
          ) : null
        )}
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
          <div key={product.id}>
            <Product
              id={product.id}
              name={product.title}
              price={product.price}
              discount={product.discountPercentage}
              image={product.images[0]}
              setWishListItems={setWishListItems}
              isWishList={wishList.includes(product.id)}
            />
            <div className="flex text-sm gap-2 items-center mt-2 ">
              <Ratingg rating={product.rating} />
              <p>({product.reviews.length})</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishList;
