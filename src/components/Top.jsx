import { Link } from "react-router-dom";

function Top() {
  return (
    <div className="w-full h-12 bg-black flex items-center gap-2 justify-center">
      <h1 className="text-white xs2:text-[8px] md:text-sm text-center py-4">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </h1>
      <Link className="underline text-xs text-white font-semibold">
        ShopNow
      </Link>

      <select
        name="language"
        id=""
        className="xs2:block md:absolute right-20 bg-black text-white"
      >
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
      </select>
    </div>
  );
}

export default Top;
