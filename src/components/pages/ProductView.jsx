import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import CircularSize from "../common/Loading";
import truck2 from "../../assets/truck2.png";
import returnIcon from "../../assets/return.png";
import Product from "../Product";
import RatingComponent from "../common/RatingComponent";
import { ProductContext } from "../../Contexts/ProductContext";
import { WishlistContext } from "../../Contexts/WishlistContext";

const SIZES = ["XS", "S", "M", "L", "XL"];

function ProductView() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("red");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  const {
    products,
    setProducts,
    fetchSingleProduct,
    setId,
    fetchProductsData,
  } = useContext(ProductContext);
  const { wishList, setWishListItems } = useContext(WishlistContext);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        setId(id);
        const singleData = await fetchSingleProduct(id);
        setProduct(singleData);

        if (singleData?.category) {
          const relatedProducts = await fetchProductsData(
            singleData.category,
            8
          );
          setProducts(relatedProducts);
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (increment) => {
    setQuantity((prev) => Math.max(1, prev + increment));
  };

  if (loading) return <CircularSize />;

  return (
    <div className="flex flex-col xs2:px-[72px] mx-[135px] my-[140px]">
      <div className="flex gap-[30px] mb-[140px] xs2:flex-col md:flex-col lg:flex-row xs2:items-center">
        <div className="grid gap-4 gap-x-52 xs2:grid-cols-2 lg:grid-cols-1 xs2:mr-40">
          {[...Array(4)].map((_, index) => (
            <img
              key={index}
              className="min-w-[170px] min-h-[138px] max-w-[170px] max-h-[138px] bg-secondary"
              src={
                product?.images?.[0] || "https://via.placeholder.com/170x138"
              }
              alt={product?.title}
              width={170}
              height={138}
            />
          ))}
        </div>
        <div className="min-w-[500px] min-h-[600px] max-w-[500px] max-h-[600px] bg-secondary overflow-hidden px-10">
          <img
            src={product?.images?.[0] || "https://via.placeholder.com/500x600"}
            alt={product?.title}
            width={400}
            height={500}
          />
        </div>
        <div className="flex flex-col gap-4 text-start mx-[70px]">
          <h1 className="text-2xl font-semibold">{product?.title}</h1>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <RatingComponent rating={product?.rating} />
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

          {/* Color and Size Selection */}
          <div className="flex gap-6">
            <p className="text-xl">Colours:</p>
            <div className="flex gap-2">
              {["red", "blue"].map((color) => (
                <button
                  key={color}
                  className={`w-6 h-6 rounded-full ${
                    selectedColor === color ? "border-[3px] border-black" : ""
                  } ${color === "red" ? "bg-red-500" : "bg-blue-500"}`}
                  onClick={() => handleColorSelect(color)}
                />
              ))}
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
                  <span>{size}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4 items-center mb-10">
            <div className="flex items-center border rounded-md">
              <button
                className="border w-10 h-11 hover:bg-button2 hover:text-white rounded-md"
                onClick={() => handleQuantityChange(-1)}
              >
                <span className="text-xl">-</span>
              </button>
              <span className="w-20 text-center">{quantity}</span>
              <button
                className="border w-10 h-11 hover:bg-button2 hover:text-white rounded-md"
                onClick={() => handleQuantityChange(1)}
              >
                <span className="text-xl">+</span>
              </button>
            </div>
            <button className="bg-button2 py-3 text-white rounded-md w-[165px]">
              Buy Now
            </button>
            <button
              className="border w-[40px] h-[40px] py-1 px-1 rounded-md"
              onClick={() => setWishListItems(product)}
            >
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill={`${
                  wishList.some((item) => item?.id === parseInt(id))
                    ? "#DB4444"
                    : "none"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                className="hover:fill-button2 ml-1"
              >
                <path
                  d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col">
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

      <div className="flex flex-col gap-10 text-start xs2:items-center md:items-start">
        <div className="flex gap-4 items-center">
          <div className="bg-button2 w-5 h-10 rounded-md" />
          <h1 className="text-xl text-button2">Related Item</h1>
        </div>

        <div className="flex gap-[30px] justify-center xs2:flex-wrap md:flex-nowrap">
          {products?.slice(0, 4).map((product) => (
            <div key={product.id}>
              <Product
                setWishListItems={setWishListItems}
                isWishList={wishList.some((item) => item.id === product.id)}
                product={product}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductView;
