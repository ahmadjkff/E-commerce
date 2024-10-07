import { useContext } from "react";
import FirstSection from "./Home/FirstSection";
import FlashSales from "./Home/FlashSales";
import BrowseByCategory from "./Home/BrowseByCategory";
import BestSelling from "./Home/BestSelling";
import Explore from "./Home/Explore";
import New from "./Home/New";
import Services from "./Home/Services";
import ad2 from "../../assets/Home/ad2.png";
import uparrow from "../../assets/Home/uparrow.png";
import { ProductContext } from "../../ProductContext";

function Home() {
  const products = useContext(ProductContext).products;
  const wishList = useContext(ProductContext).wishList;
  const setWishListItems = useContext(ProductContext).setWishListItems;

  const moveTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col gap-[140px] mb-[140px] xs:mx-20 md:mx-[135px] relative">
      <FirstSection />
      <FlashSales
        products={products}
        wishList={wishList}
        setWishListItems={setWishListItems}
      />
      <BrowseByCategory />
      <BestSelling
        products={products}
        wishList={wishList}
        setWishListItems={setWishListItems}
      />
      <img src={ad2} alt="" />
      <Explore
        products={products}
        wishList={wishList}
        setWishListItems={setWishListItems}
      />
      <New />
      <Services />
      <button
        className="fixed bottom-8 right-8 p-3 rounded-full bg-secondary"
        onClick={moveTop}
      >
        <img src={uparrow} alt="" width={24} />
      </button>
    </div>
  );
}

export default Home;
