import { Link, NavLink, useNavigate } from "react-router-dom";
import searchIcon from "../assets/search.png";
import Menu from "./common/Menu";
import LongMenu from "./common/LongMenu";
import { useContext } from "react";
import { WishlistContext } from "../Contexts/WishlistContext";
import { CartContext } from "../Contexts/CartContext";

const options = [
  { name: "Home", to: "/" },
  { name: "Contact", to: "/contact" },
  { name: "About", to: "/about" },
  { name: "SignUp", to: "signup" },
];

function Header() {
  const wishListLength = useContext(WishlistContext).wishList.length;
  const cartLength = useContext(CartContext).cart.length;
  const navigate = useNavigate();

  const handleSearchChange = async (e) => {
    const query = e.target.value;
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <header className="flex flex-col md:flex-row justify-between my-10 border-b-2 w-full px-4 md:px-20 pb-4">
      <div className="hidden lg:block">
        <Link
          to="/"
          className="font-bold xs:text-[14px] sm:text-[20px] md:text-[24px] text-center"
        >
          Exclusive
        </Link>
      </div>

      <div className="hidden md:flex gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline" : "hover:underline"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "underline" : "hover:underline"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "underline" : "hover:underline"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive ? "underline" : "hover:underline"
          }
        >
          Sign Up
        </NavLink>
      </div>

      <div className="flex gap-6">
        <div className="relative">
          <input
            className="bg-secondary py-2 px-5 w-full md:w-[243px] rounded-md text-xs md:text-sm"
            type="text"
            placeholder="What are you looking for?"
            width={243}
            onChange={handleSearchChange}
          />
          <img
            className="absolute -translate-y-1/2 right-3 top-1/2 w-3"
            src={searchIcon}
            alt="search icon"
            width={16}
          />
        </div>
        <div className="flex gap-4 items-center">
          <div className="relative">
            <Link to="/wishlist">
              <svg
                width="32"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div
                className={`absolute bg-button2 rounded-full xs2:w-3 md:w-4 xs2:h-3 md:h-4 -top-1 right-0 ${
                  wishListLength ? "absolute" : "hidden"
                }`}
              >
                <p className="xs2:text-[8px] md:text-xs text-white text-center">
                  {wishListLength}
                </p>
              </div>
            </Link>
          </div>
          <div className="relative">
            <Link to="/cart">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 5H7L10 22H26"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div
                className={`bg-button2 rounded-full xs2:w-3 md:w-4  xs2:h-3 md:h-4 top-0 right-0 ${
                  cartLength ? "absolute" : "hidden"
                }`}
              >
                <p className="xs2:text-[8px] md:text-xs text-white text-center">
                  {cartLength}
                </p>
              </div>
            </Link>
          </div>

          <Menu />
          <LongMenu options={options} />
        </div>
      </div>
    </header>
  );
}

export default Header;
