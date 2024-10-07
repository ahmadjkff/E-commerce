import { Link, NavLink } from "react-router-dom";
import searchIcon from "../assets/search.png";
import favorait from "../assets/fav.png";
import cart from "../assets/cart.png";
import Menu from "./Menu";
import LongMenu from "./LongMenu";
import { useContext } from "react";
import { ProductContext } from "../ProductContext";

const options = [
  { name: "Home", to: "/" },
  { name: "Contact", to: "/contact" },
  { name: "About", to: "/about" },
  { name: "SignUp", to: "signup" },
];

function Header() {
  const wishListLength = useContext(ProductContext).wishList.length;
  return (
    <header className="flex justify-between my-10 border-b-2 w-full xs:px-10 sm:px-16 md:px-20 pb-4">
      <div className=" xs:hidden sm:hidden md:block lg:block xl:block">
        <Link
          to="/"
          className="font-bold xs:text-[14px] sm:text-[20px] md:text-[24px] text-center"
        >
          Exclusive
        </Link>
      </div>

      <div className="gap-8 xs:hidden sm:hidden md:hidden lg:flex xl:flex">
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
            className="bg-secondary py-2 px-5 w-[243px] rounded-md xs:w-[140px] sm:w-[190px] md:w-[243px] xs:text-[8px] sm:text-xs md:text-sm "
            type="text"
            placeholder="What are you looking for?"
            width={243}
          />
          <img
            className="absolute -translate-y-1/2 xs:right-1 sm:right-1 md:right-3 xs:top-[38%] sm:top-[40%] md:top-1/2 xs:w-3"
            src={searchIcon}
            alt="search icon"
            width={16}
          />
        </div>
        <div className="flex gap-4 items-center">
          <div className="relative">
            <Link to="/wishlist">
              <img src={favorait} alt="" width={32} />
              <div className="absolute bg-button2 rounded-full w-4 h-4 top-0 right-0">
                <p className="text-xs text-white text-center">
                  {wishListLength}
                </p>
              </div>
            </Link>
          </div>
          <div className="relative">
            <Link to="/cart">
              <img src={cart} alt="" width={32} />
              <div className="absolute bg-button2 rounded-full w-4 h-4 top-0 right-0">
                <p className="text-xs text-white text-center">4</p>
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
