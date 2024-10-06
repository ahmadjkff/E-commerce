import { Link } from "react-router-dom";
import Product from "../../Product";
import rating from "../../../assets/rating.png";
import { useEffect } from "react";
import Ratingg from "../../Ratingg";

function Explore({ products, limit, setLimit }) {
  useEffect(() => {
    setLimit(8);
  }, [setLimit]);

  return (
    <div className="flex flex-col gap-10 text-start">
      <div className="flex gap-4 items-center xs:justify-center md:justify-start">
        <div className="bg-button2 w-5 h-10 rounded-md" />
        <h1 className="text-xl text-button2">Our Products</h1>
      </div>
      <div className="flex justify-between xs:flex-col xs:items-center xs:gap-4 md:flex-row">
        <h1 className="text-4xl font-semibold xs:text-center">
          Explore Our Products
        </h1>
        <Link className="py-4 px-12 bg-button2 rounded-md text-white">
          View All
        </Link>
      </div>
      <div className="flex flex-wrap gap-[30px] justify-center">
        {products?.map((product) => {
          return (
            <div key={product.id}>
              <Product
                id={product.id}
                name={product.title}
                price={product.price}
                discount={product.discountPercentage}
                image={product.images[0]}
              />
              <div className="flex text-sm gap-2 items-center mt-2 ">
                <Ratingg rating={product.rating} />
                <p>({product.reviews.length})</p>
              </div>
            </div>
          );
        })}
      </div>

      <Link
        to="/products"
        className="py-4 px-12 bg-button2 self-center text-white mt-5 rounded-md"
      >
        View All Products
      </Link>
      <hr className="border-t border-gray-400 my-8 w-full" />
    </div>
  );
}

export default Explore;
