import { Link } from "react-router-dom";
import Product from "../../Product";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../Contexts/ProductContext";

function Explore({ wishList }) {
  const { fetchProductsData, setProducts } = useContext(ProductContext);
  const [exploreProducts, setExploreProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchProductsData("mobile-accessories", 8);
      setExploreProducts(data);
    };

    fetchProducts();
  }, [fetchProductsData, setProducts]);
  return (
    <div className="flex flex-col gap-10 text-start">
      <div className="flex gap-4 items-center xs:justify-center md:justify-start">
        <div className="bg-button2 w-5 h-10 rounded-md" />
        <h1 className="text-xl text-button2">Our Products</h1>
      </div>
      <div className="flex justify-between xs2:flex-col xs2:items-center xs:gap-4 md:flex-row">
        <h1 className="text-4xl font-semibold xs:text-center">
          Explore Our Products
        </h1>
        <Link className="py-4 px-12 bg-button2 rounded-md text-white border border-black hover:bg-white hover:text-button2">
          View All
        </Link>
      </div>

      <div className="flex flex-wrap gap-[30px] justify-center">
        {exploreProducts?.slice(0, 8).map((product, index) => {
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

export default Explore;
