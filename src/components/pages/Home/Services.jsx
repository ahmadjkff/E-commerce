import truck from "../../../assets/Home/truck.png";
import headphone from "../../../assets/Home/headphone.png";
import guarantee from "../../../assets/Home/guarantee.png";

function Services() {
  return (
    <div className="flex justify-around xs2:flex-col xs:gap-8 md:flex-row">
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
  );
}

export default Services;
