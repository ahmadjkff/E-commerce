import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CircularSize from "../Loading";
import rating from "../../assets/rating.png";
import favorait from "../../assets/fav.png";
import truck2 from "../../assets/truck2.png";
import returnIcon from "../../assets/return.png";
import Product from "../Product";
import fetchSingleProduct from "../../fetchSingleProduct";
import ProductsData from "../../ProductsData";
import { Category } from "@mui/icons-material";
import Ratingg from "../Ratingg";
const SIZES = ["XS", "S", "M", "L", "XL"];

function ProductView() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("red");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const category = `${product?.category}`;

  useEffect(() => {
    setLoading(true); // Set loading to true before fetching the product
    fetchSingleProduct(id)
      .then((data) => {
        setProduct(data); // Set the product data
      })
      .catch((error) => {
        console.error("Error fetching product:", error); // Handle any potential errors
      })
      .finally(() => setLoading(false)); // Set loading to false after fetch completes
  }, [id]);

  useEffect(() => {
    ProductsData(4, category).then((data) => setProducts(data));
  }, [product]);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scroll to the top
      });
    };

    scrollToTop();
  }, [product]);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };
  const handlePlusQuantityChange = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleMinusQuantityChange = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };
  if (loading) return <CircularSize />;

  return (
    <div className="flex flex-col  mx-[135px] my-[140px]">
      <div className="flex gap-[30px] mb-[140px] xs:flex-col md:flex-col lg:flex-row xs:items-center">
        <div className="grid gap-4 gap-x-52 xs:grid-cols-2 lg:grid-cols-1 xs:mr-40">
          {[...Array(4)].map((_, index) => (
            <img
              key={index}
              className="min-w-[170px] min-h-[138px] max-w-[170px] max-h-[138px] bg-secondary"
              src={product?.images[0] || "https://via.placeholder.com/170x138"}
              alt={product?.title}
              width={170}
              height={138}
            />
          ))}
        </div>
        <div className="min-w-[500px] min-h-[600px] max-w-[500px] max-h-[600px] bg-secondary overflow-hidden px-10">
          <img
            src={product?.images[0] || "https://via.placeholder.com/500x600"}
            alt={product?.title}
            width={400}
            height={500}
          />
        </div>
        <div className="flex flex-col gap-4 text-start mx-[70px]">
          <h1 className="text-2xl font-semibold">{product?.title}</h1>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <Ratingg rating={product?.rating} />
              <p className="text-sm">({product?.reviews?.length})</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 border-l border-gray-400" />
              <p
                className={`text-sm ${
                  product?.availabilityStatus === "In Stock"
                    ? "text-green-300"
                    : "text-red-500"
                }`}
              >
                {product?.availabilityStatus}
              </p>
            </div>
          </div>
          <p className="text-2xl">${product?.price}</p>
          <p className="text-sm">{product?.description}</p>
          <hr className="border-t border-gray-300 my-4" />
          <div className="flex gap-6">
            <p className="text-xl">Colours:</p>
            <div className="flex gap-2">
              <button
                className={`w-6 h-6 bg-red-400 rounded-full ${
                  selectedColor === "red" ? "border-2 border-black" : ""
                }`}
                onClick={() => handleColorSelect("red")}
              />
              <button
                className={`w-6 h-6 bg-blue-400 rounded-full ${
                  selectedColor === "blue" ? "border-2 border-black" : ""
                }`}
                onClick={() => handleColorSelect("blue")}
              />
            </div>
          </div>
          <div className="flex gap-6">
            <p className="text-xl">Size:</p>
            <div className="flex gap-4 items-center">
              {SIZES.map((size) => (
                <button
                  key={size}
                  className={`w-8 h-8 border p-1 text-center rounded-md hover:bg-button2 hover:text-white ${
                    selectedSize === size ? "bg-button2 text-white" : ""
                  }`}
                  onClick={() => handleSizeSelect(size)}
                >
                  <span className="text-center">{size}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-4 items-center mb-10">
            <div className="flex items-center border rounded-md">
              <button
                className="border w-10 h-11 hover:bg-button2 hover:text-white rounded-md"
                onClick={handleMinusQuantityChange}
              >
                <span className="text-xl">-</span>
              </button>
              <span className="w-20 text-center">{quantity}</span>
              <button
                className="border w-10 h-11 hover:bg-button2 hover:text-white rounded-md"
                onClick={handlePlusQuantityChange}
              >
                <span className="text-xl">+</span>
              </button>
            </div>
            <button className="bg-button2 py-3 text-white rounded-md w-[165px]">
              Buy Now
            </button>
            <button className="border w-[40px] h-[40px] py-1 px-1 hover:bg-button2 rounded-md">
              <img src={favorait} alt="" width={32} height={32} />
            </button>
          </div>

          <div className="flex flex-col ">
            <div className="flex gap-2 w-[400px] items-center border p-4">
              <img
                className="w-10 h-10"
                src={truck2}
                alt=""
                width={40}
                height={40}
              />
              <div className="flex flex-col gap-2 ">
                <p>Free Delivery</p>
                <a href="#" className="text-xs underline">
                  Enter your postal code for Delivery Availability
                </a>
              </div>
            </div>
            <div className="flex gap-2 w-[400px] items-center border p-4">
              <img
                className="w-10 h-10"
                src={returnIcon}
                alt=""
                width={40}
                height={40}
              />
              <div className="flex flex-col gap-2 ">
                <p>Return Delivery</p>
                <p className="text-xs">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 text-start  xs:items-center md:items-start">
        <div className="flex gap-4 items-center">
          <div className="bg-button2 w-5 h-10 rounded-md" />
          <h1 className="text-xl text-button2">Related Item</h1>
        </div>

        <div className="flex flex-wrap gap-[30px] justify-center">
          {products?.map((product, index) => {
            if (index < 4)
              return (
                <div key={index}>
                  <Product
                    id={product.id}
                    name={product.title}
                    price={product.price}
                    discount={product.discountPercentage}
                    image={product.images[0]}
                  />
                  <div className="flex text-sm gap-2 items-center mt-2 ">
                    <Ratingg rating={product.rating} />
                    <p>({product.reviews.length})</p>
                  </div>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductView;
