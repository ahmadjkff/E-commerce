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

function Home() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    ProductsData(limit).then((data) => setProducts(data));
  }, [limit]);
  return (
    <div className="flex flex-col gap-[140px] mb-[140px] xs:mx-20 md:mx-[135px]">
      <FirstSection />
      <FlashSales products={products} />
      <BrowseByCategory />
      <BestSelling products={products} />
      <img src={ad2} alt="" />
      <Explore products={products} limit={limit} setLimit={setLimit} />
      <New />
      <Services />
    </div>
  );
}

export default Home;
