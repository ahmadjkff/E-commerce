import { Link } from "react-router-dom";
import phone from "../../../assets/Home/phone.png";
import computer from "../../../assets/Home/computer.png";
import watch from "../../../assets/Home/watch.png";
import camera from "../../../assets/Home/camera.png";
import headphones from "../../../assets/Home/headphones.png";
import gaming from "../../../assets/Home/gaming.png";

const images = [phone, computer, watch, camera, headphones, gaming];
const categories = [
  "Phones",
  "Computers",
  "Watches",
  "Cameras",
  "Headphones",
  "Gaming",
];

function BrowseByCategory() {
  return (
    <div className="flex flex-col gap-10 text-start xs:items-center md:items-start">
      <div className="flex gap-4">
        <div className="bg-button2 w-5 h-10 rounded-md" />
        <h1 className="text-xl text-button2">Categories</h1>
      </div>
      <h1 className="text-4xl font-semibold text-center">Browse By Category</h1>
      <div className="category flex justify-between flex-wrap xs:flex-col xs:items-center xs:gap-8 md:flex-row">
        {images.map((image, index) => (
          <Link
            key={index} // Add a key prop to uniquely identify each Link
            to="/products"
            className="border rounded-[4px] py-4 px-6 w-44 h-40 flex flex-col items-center justify-center hover:bg-secondary"
          >
            <img src={image} alt={categories[index]} width={56} />
            <p>{categories[index]}</p>
          </Link>
        ))}
      </div>
      <hr className="border-t border-gray-400 my-8 w-full" />
    </div>
  );
}

export default BrowseByCategory;
