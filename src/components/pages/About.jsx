import pink from "../../assets/pink.png";
import market from "../../assets/market.png";
import money from "../../assets/money.png";
import bag from "../../assets/bag.png";
import dollar from "../../assets/dollar.png";
import tom from "../../assets/tom.png";
import emma from "../../assets/emma.png";
import twitterblack from "../../assets/twitterblack.png";
import linkedinblack from "../../assets/linkedinblack.png";
import instagramblack from "../../assets/instagramblack.png";
import dots from "../../assets/dots.png";
import truck from "../../assets/Home/truck.png";
import headphone from "../../assets/Home/headphone.png";
import guarantee from "../../assets/Home/guarantee.png";
function About() {
  return (
    <div>
      <p className="text-start ml-20">
        <span className="text-gray-400">Home /</span> About
      </p>
      <div className="flex flex-col gap-[75px] mb-20 sm:items-center md:justify-center">
        <div className="flex xs:flex-col  md:flex-row">
          <div className="flex flex-col gap-6 px-[75px] mt-[179px] text-start">
            <h1 className="text-[54px] font-semibold">Our Story</h1>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <img
            className="mt-11 max-w-[709px] h-auto self-center md:w-full"
            src={pink}
            alt="pink image"
          />
        </div>
        <div className="flex mx-[135px] my-[140px] gap-[30px] items-center xs:flex-col md:flex-row">
          <div className="flex flex-col gap-4 items-center w-[270px] h-[230px] border py-[30px] rounded-md">
            <img className="w-20" src={market} alt="market icon" />
            <p className="text-[32px] font-bold">10.5K</p>
            <p className="-mt-4">Sallers active our site</p>
          </div>
          <div className="flex flex-col gap-4 items-center w-[270px] h-[230px] border py-[30px] rounded-md bg-button2">
            <img className="w-20" src={dollar} alt="dollar icon" />
            <p className="text-[32px] font-bold text-white">33K</p>
            <p className="-mt-4 text-white">Mopnthly Produduct Sale</p>
          </div>
          <div className="flex flex-col gap-4 items-center w-[270px] h-[230px] border py-[30px] rounded-md">
            <img className="w-20" src={bag} alt="bag icon" />
            <p className="text-[32px] font-bold">45.5K</p>
            <p className="-mt-4">Customer active in our site</p>
          </div>
          <div className="flex flex-col gap-4 items-center w-[270px] h-[230px] border py-[30px] rounded-md">
            <img className="w-20" src={money} alt="money icon" />
            <p className="text-[32px] font-bold">25K</p>
            <p className="-mt-4">Anual gross sale in our site</p>
          </div>
        </div>
      </div>

      <div className="flex mb-36 justify-center min-h-[564px] overflow-y-auto gap-[30px] xs:flex-col xs:gap-32 xs:mx-5 md:flex-row">
        <div className="bg-secondary h-[430px] text-start">
          <img
            className="min-w-[326px] h-[392px] mx-auto mt-[39px]"
            src={tom}
            alt="tom image"
          />
          <div className="  ml-2">
            <p className="text-2xl">Will Smith</p>
            <p>Product Designer</p>
          </div>
          <div className="flex gap-4 mt-[16px]">
            <a href="#">
              <img className="w-6" src={twitterblack} alt="twitter icon" />
            </a>
            <a href="#">
              <img className="w-6" src={instagramblack} alt="instagram icon" />
            </a>
            <a href="#">
              <img className="w-6" src={linkedinblack} alt="linkedin icon" />
            </a>
          </div>
        </div>
        <div className="bg-secondary h-[430px] text-start">
          <img
            className="min-w-[326px] h-[392px] mx-auto mt-[39px]"
            src={emma}
            alt="tom image"
          />
          <div className=" mt-8 ml-2">
            <p className="text-2xl">Emma Watson</p>
            <p>Managing Director</p>
          </div>
          <div className="flex gap-4 mt-[16px]">
            <a href="#">
              <img className="w-6" src={twitterblack} alt="twitter icon" />
            </a>
            <a href="#">
              <img className="w-6" src={instagramblack} alt="instagram icon" />
            </a>
            <a href="#">
              <img className="w-6" src={linkedinblack} alt="linkedin icon" />
            </a>
          </div>
        </div>
        <div className="bg-secondary h-[430px] text-start">
          <img
            className="min-w-[326px] h-[392px] mx-auto mt-[39px]"
            src={emma}
            alt="tom image"
          />
          <div className=" mt-8 ml-2">
            <p className="text-2xl">Will Smith</p>
            <p>Product Designer</p>
          </div>
          <div className="flex gap-4 mt-[16px]">
            <a href="#">
              <img className="w-6" src={twitterblack} alt="twitter icon" />
            </a>
            <a href="#">
              <img className="w-6" src={instagramblack} alt="instagram icon" />
            </a>
            <a href="#">
              <img className="w-6" src={linkedinblack} alt="linkedin icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10"></div>

      <div className="flex justify-around my-[140px] xs:flex-col xs:gap-8 md:flex-row">
        <div className="flex flex-col items-center">
          <div className="bg-customblack rounded-full p-2">
            <div className="bg-black p-2 rounded-full">
              <img className=" w-10" src={truck} alt="truck icon" />
            </div>
          </div>
          <p className="font-semibold text-xl mt-6">FREE AND FAST DELIVERY</p>
          <p className="mt-2">Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-customblack rounded-full p-2">
            <div className="bg-black p-2 rounded-full">
              <img className=" w-10" src={headphone} alt="headphone icon" />
            </div>
          </div>
          <p className="font-semibold text-xl mt-6">24/7 CUSTOMER SERVICE</p>
          <p className="mt-2">Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-customblack rounded-full p-2">
            <div className="bg-black p-2 rounded-full">
              <img className=" w-10" src={guarantee} alt="guarantee icon" />
            </div>
          </div>
          <p className="font-semibold text-xl mt-6">MONEY BACK GUARANTEE</p>
          <p className="mt-2">We reurn money within 30 days</p>
        </div>
      </div>
    </div>
  );
}

export default About;
