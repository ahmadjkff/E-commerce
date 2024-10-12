import arrow from "../assets/arrow.png";
import barcode from "../assets/barcode.png";
import gplay from "../assets/gplay.png";
import appStore from "../assets/appStore.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";

function Footer() {
  return (
    <footer className="flex bg-black text-white text-start px-[135px] pt-20 pb-32 gap-24 xs:w-full xs2:flex-col sm:flex-col sm:items-center sm:text-center md:flex-row md:text-start">
      <div className="flex flex-col gap-6">
        <h2 className="font-bold text-xl">Exclusive</h2>
        <h4>Subscribe</h4>
        <p>Get 10% off your first order</p>

        <div className="relative">
          <input
            className="border-2 py-3 px-4 bg-black"
            type="text"
            placeholder="Enter Your Email"
          />
          <button className="absolute top-1/2 w-6 right-3 transform -translate-y-1/2">
            <img src={arrow} alt="arrow icon" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h2>Support</h2>
        <p className="mt-2">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <h2>Account</h2>
        <a className="hover:underline" href="#">
          My Account
        </a>
        <a className="hover:underline" href="#">
          Login / Register
        </a>
        <a className="hover:underline " href="#">
          Cart
        </a>
        <a className="hover:underline" href="#">
          Wishlist
        </a>
        <a className="hover:underline" href="#">
          Shop
        </a>
      </div>
      <div className="flex flex-col gap-4 w-full sm:ml-0 md:-ml-36">
        <h2>Quick Link</h2>
        <a className="hover:underline" href="#">
          Privacy Policy
        </a>
        <a className="hover:underline" href="#">
          Terms Of Use
        </a>
        <a className="hover:underline" href="#">
          FAQ
        </a>
        <a className="hover:underline" href="#">
          Contact
        </a>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <h2>Download App</h2>
        <p className="text-xs">Save $3 with App New User Only</p>
        <div className="flex gap-2 justify-center ">
          <a href="#">
            <img src={barcode} alt="barcode" width={80} />
          </a>
          <div className="flex flex-col gap-1">
            <a href="#">
              <img src={gplay} alt="google play" width={110} />
            </a>
            <a href="#">
              <img src={appStore} alt="app store" width={110} />
            </a>
          </div>
        </div>

        <div className="flex gap-6 justify-center ">
          <a href="#">
            <img src={facebook} alt="facebook logo" width={24} />
          </a>
          <a href="#">
            <img src={twitter} alt="twitter logo" width={24} />
          </a>
          <a href="#">
            <img src={instagram} alt="instagram logo" width={24} />
          </a>
          <a href="#">
            <img src={linkedin} alt="linkedin logo" width={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
