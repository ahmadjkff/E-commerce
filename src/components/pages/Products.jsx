import { useEffect, useRef, useState, useCallback } from "react";
import ProductsData from "../../ProductsData";
import Product from "../Product";

function Products() {
  const [products, setProducts] = useState([]);
  const limit = useRef(10);

  const fetchProductsData = useCallback(() => {
    ProductsData(limit.current).then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    fetchProductsData();
  }, [fetchProductsData]);

  const handleOnClick = () => {
    limit.current += 10;
    fetchProductsData();
  };
  return (
    <div className="flex flex-col gap-8 mx-[135px] my-32 items-center">
      <div className="flex  gap-8 flex-wrap">
        {products.map((product) => (
          <Product
            id={product.id}
            name={product.title}
            price={product.price}
            discount={product.discountPercentage}
            image={product.images[0]}
          />
        ))}
      </div>
      <button
        className="bg-button2 rounded-md px-12 py-4 text-white"
        onClick={handleOnClick}
      >
        Load More
      </button>
    </div>
  );
}

export default Products;
