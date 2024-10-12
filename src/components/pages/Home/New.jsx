import newad1 from "../../../assets/Home/newad1.png";
import newad2 from "../../../assets/Home/newad2.png";
import newad3 from "../../../assets/Home/newad3.png";
import newad4 from "../../../assets/Home/newad4.png";

function New() {
  return (
    <div className="flex flex-col gap-10 text-start">
      <div className="flex gap-4 items-center">
        <div className="bg-button2 w-5 h-10 rounded-md" />
        <h1 className="text-xl text-button2">Featured</h1>
      </div>
      <h1 className="text-4xl font-semibold">New Arrival</h1>
      <div className="flex gap-[30px] xs2:flex-col md:flex-row">
        <img src={newad1} alt="" width={570} height={600} />
        <div className="flex flex-col gap-[30px]">
          <img src={newad2} alt="" width={570} height={284} />
          <div className="flex gap-[30px] xs2:flex-col md:flex-row ">
            <img src={newad3} alt="" width={270} height={284} />
            <img src={newad4} alt="" width={270} height={284} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
