import { Link } from "react-router-dom";
import Product from "../../Product";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../Contexts/ProductContext";

function BestSelling({ wishList }) {
  const { fetchProductsData, setProducts } = useContext(ProductContext);
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchProductsData("smartphones", 8);
      setBestProducts(data);
    };

    fetchProducts();
  }, [fetchProductsData, setProducts]);
  return (
    <div className="flex flex-col gap-10 text-start ">
      <div className="flex gap-4 items-center xs2:justify-center md:justify-start">
        <div className="bg-button2 w-5 h-10 rounded-md" />
        <h1 className="text-xl text-button2">This Month</h1>
      </div>
      <div className="flex justify-between xs2:flex-col xs2:items-center xs2:gap-4 md:flex-row">
        <h1 className="text-4xl font-semibold xs2:text-center">
          Best Selling Products
        </h1>
        <Link className="py-4 px-12 bg-button2 rounded-md text-white border border-black hover:bg-white hover:text-button2">
          View All
        </Link>
      </div>
      <div className="flex flex-wrap gap-[30px] justify-center">
        {bestProducts?.slice(0, 4)?.map((product, index) => {
          if (index < 4)
            return (
              <div key={index}>
                <Product
                  isWishList={wishList.some((item) => item.id === product.id)}
                  product={product}
                />
              </div>
            );
        })}
      </div>
      <Link
        to="/products"
        className="py-4 px-12 bg-button2 self-center text-white mt-5 rounded-md border border-black hover:bg-white hover:text-button2"
      >
        View All Products
      </Link>
      <hr className="border-t border-gray-400 my-8 w-full" />
    </div>
  );
}

export default BestSelling;
