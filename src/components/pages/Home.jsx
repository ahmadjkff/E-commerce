import { useEffect, useRef, useState } from "react";
import ProductsData from "../../ProductsData";
import FirstSection from "./Home/FirstSection";
import FlashSales from "./Home/FlashSales";
import BrowseByCategory from "./Home/BrowseByCategory";
import BestSelling from "./Home/BestSelling";
import Explore from "./Home/Explore";
import New from "./Home/New";
import Services from "./Home/Services";
import ad2 from "../../assets/Home/ad2.png";
import uparrow from "../../assets/Home/uparrow.png";

function Home() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(4);

  const moveTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    ProductsData(limit).then((data) => setProducts(data));
  }, [limit]);
  return (
    <div className="flex flex-col gap-[140px] mb-[140px] xs:mx-20 md:mx-[135px] relative">
      <FirstSection />
      <FlashSales products={products} />
      <BrowseByCategory />
      <BestSelling products={products} />
      <img src={ad2} alt="" />
      <Explore products={products} limit={limit} setLimit={setLimit} />
      <New />
      <Services />
      <button
        className="absolute -bottom-28 right-0 p-3 rounded-full bg-secondary"
        onClick={moveTop}
      >
        <img src={uparrow} alt="" width={24} />
      </button>
    </div>
  );
}

export default Home;
