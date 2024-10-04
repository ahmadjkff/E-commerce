import { useEffect, useRef, useState } from "react";
import Product from "../Product";
import rating from "../../assets/rating.png";
import productsData from "../../ProductsData";

function WishList() {
  const wihsListItems = useRef();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productsData(4).then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="flex flex-col xs:px-10 sm:px-20 md:px-[135px]">
      <div className="flex gap-5 mb-16 items-center justify-between">
        <h1 className="text-xl">WishList ({wihsListItems.current})</h1>
        <button className="border mt-4 xs:px-4 sm:px-6 sm:py-2 md:px-12 md:py-4">
          Move All To Bag
        </button>
      </div>
      <div className="flex flex-wrap gap-[30px] mb-20 justify-center">
        {products.map((product) => {
          return (
            <Product
              id={product.id}
              name={product.title}
              price={product.price}
              discount={product.discountPercentage}
              image={product.images[0]}
            />
          );
        })}
      </div>
      <div className="flex gap-5 mb-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-button2 w-5 h-10 rounded-md" />
          <h1 className="text-xl">Just For You</h1>
        </div>
        <button className="border mt-4 xs:px-4 sm:px-6 sm:py-2 md:px-12 md:py-4">
          See All
        </button>
      </div>
      <div className="flex flex-wrap gap-[30px] mb-36 justify-center">
        {products.map((product) => {
          return (
            <div>
              <Product
                id={product.id}
                name={product.title}
                price={product.price}
                discount={product.discountPercentage}
                image={product.images[0]}
              />
              <div className="flex text-sm gap-2 items-center mt-2 ">
                <img src={rating} alt="" width={100} />
                <p>(65)</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WishList;
