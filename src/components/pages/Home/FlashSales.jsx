import { Link } from "react-router-dom";
import Product from "../../Product";
import CountdownTimer from "../../common/CountdownTimer";
import scroll from "../../../assets/Home/scroll.png";
import { useContext, useEffect, useRef, useState } from "react";
import { ProductContext } from "../../../Contexts/ProductContext";

function FlashSales({ wishList }) {
  const { fetchProductsData, setProducts } = useContext(ProductContext);
  const [flashProducts, setFlashProducts] = useState([]);
  const productContainerRef = useRef(null); // Ref for the product container

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchProductsData("", 8);
      setFlashProducts(data);
    };

    fetchProducts();
  }, [fetchProductsData, setProducts]);

  const scrollLeft = () => {
    if (productContainerRef.current) {
      productContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (productContainerRef.current) {
      productContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col gap-10 text-start xs:items-center md:items-start">
      <div className="flex gap-4 items-center">
        <div className="bg-button2 w-5 h-10 rounded-md" />
        <h1 className="text-xl text-button2">Today's</h1>
      </div>
      <div className="flex justify-between w-full xs2:flex-col md:flex-row">
        <div className="flex items-center xs2:flex-col xs2:gap-4 md:gap-[87px] md:flex-row">
          <h1 className="text-4xl font-semibold">Flash Sales</h1>
          <CountdownTimer initialTime={340000} />
        </div>
        <div className="flex gap-2 mt-4">
          <button
            className="shadow-sm bg-secondary rounded-full p-4 w-12 h-12"
            onClick={scrollLeft}
          >
            <img className="rotate-180" src={scroll} alt="" width={16} />
          </button>
          <button
            className="shadow-sm bg-secondary rounded-full p-4 w-12 h-12"
            onClick={scrollRight}
          >
            <img src={scroll} alt="" width={16} />
          </button>
        </div>
      </div>

      <div
        ref={productContainerRef}
        className="flex flex-nowrap gap-[30px] overflow-x-auto w-full no-scrollbar"
      >
        {flashProducts?.slice(0, 8)?.map((product, index) => (
          <div key={index} className="shrink-0 w-64">
            <Product
              isWishList={wishList.some((item) => item.id === product.id)}
              product={product}
            />
          </div>
        ))}
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

export default FlashSales;
