import LongMenu from "../../common/LongMenu";
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
    <div className="flex flex-col lg:flex-row justify-between">
      <LongMenu options={options} />
      <ul className=" text-start gap-4 xs2:hidden xs:hidden sm:hidden md:hidden lg:flex lg:flex-col lg:gap-4">
        {options.map((option, index) => (
          <li key={index} className="relative w-[200px]">
            <Link to={option.to}>
              {option.name}
              {index < 2 && (
                <img
                  className="absolute right-0 top-[5px]"
                  src={rightarrow}
                  width={8}
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
      <div className="border-l-2 border-gray-300 mx-8 my-4 lg:my-0 lg:-mt-10" />
      <div className="flex justify-center lg:block">
        <img src={ad} alt="Placeholder" className="max-w-full h-auto" />
      </div>
    </div>
  );
}

export default FirstSection;
