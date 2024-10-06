import LongMenu from "../../LongMenu";
import rightarrow from "../../../assets/rightarrow.png";
import { Link } from "react-router-dom";
import ad from "../../../assets/Home/ad.png";

const options = [
  { name: "Woman’s Fashion", to: "/products" },
  { name: "Men’s Fashion", to: "/products" },
  { name: "Electronics", to: "/products" },
  { name: "Home &Lifestyle", to: "/products" },
  { name: "Medicine", to: "/products" },
  { name: "Sports &Outdoor", to: "/products" },
  { name: "Baby’s &Toys", to: "/products" },
  { name: "Groceries &Pets", to: "/products" },
  { name: "Health &Beauty", to: "/products" },
];

function FirstSection() {
  return (
    <div className="flex justify-between">
      <LongMenu options={options} />
      <ul className="flex flex-col text-start gap-4 xs:hidden sm:hidden md:hidden lg:flex xl:flex">
        <li className="relative w-[200px]">
          <Link to="/products">
            Woman’s Fashion
            <img
              className="absolute right-0 top-[5px]"
              src={rightarrow}
              width={8}
            />
          </Link>
        </li>
        <li className="relative w-[200px]">
          <Link to="/products">
            Men’s Fashion
            <img
              className="absolute right-0 top-[5px]"
              src={rightarrow}
              width={8}
            />
          </Link>
        </li>
        <li>
          <Link to="/products">Electronics</Link>
        </li>
        <li>
          <Link to="/products">Home &Lifestyle</Link>
        </li>
        <li>
          <Link to="/products">Medicine</Link>
        </li>
        <li>
          <Link to="/products">Sports &Outdoor</Link>
        </li>
        <li>
          <Link to="/products">Baby’s &Toys</Link>
        </li>
        <li>
          <Link to="/products">Groceries &Pets</Link>
        </li>
        <li>
          <Link to="/products">Health &Beauty</Link>
        </li>
      </ul>
      <div className="border-l-2 border-gray-300 mx-8 -mt-10" />
      <div>
        <img src={ad} alt="Placeholder" />
      </div>
    </div>
  );
}

export default FirstSection;
