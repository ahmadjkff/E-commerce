import { Link, NavLink, useNavigate } from "react-router-dom";
import searchIcon from "../assets/search.png";
import favorait from "../assets/fav.png";
import cart from "../assets/cart.png";
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
              <img src={favorait} alt="" width={32} />
              <div
                className={`absolute bg-button2 rounded-full xs2:w-3 md:w-4 xs2:h-3 md:h-4 top-0 right-0 ${
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
              <img src={cart} alt="" width={32} />
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
