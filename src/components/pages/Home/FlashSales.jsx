import { Link } from "react-router-dom";
import Product from "../../Product";
import rating from "../../../assets/rating.png";
import CountdownTimer from "../../common/CountdownTimer";

function FlashSales({ products }) {
  return (
    <div className="flex flex-col gap-10 text-start  xs:items-center md:items-start">
      <div className="flex gap-4 items-center">
        <div className="bg-button2 w-5 h-10 rounded-md" />
        <h1 className="text-xl text-button2">Today's</h1>
      </div>
      <div className="flex gap-[87px] items-center">
        <h1 className="text-4xl font-semibold">Flash Sales</h1>
        <CountdownTimer initialTime={340000} />
      </div>

      <div className="flex flex-wrap gap-[30px] justify-center">
        {products?.map((product, index) => {
          if (index < 4)
            return (
              <div key={index}>
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

export default FlashSales;
