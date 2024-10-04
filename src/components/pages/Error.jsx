import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <p className="text-start ml-20">
        <span className="text-gray-400">Home /</span> Error 404
      </p>
      <div className="mt-[140px] mb-20">
        <h1 className="text-[110px] font-medium">404 Not Found</h1>
        <p className="mt-10 mb-20">
          Your visited page not found. You may go home page.
        </p>
      </div>
      <Link to="/">
        <button className="bg-button2 px-12 py-4 text-white rounded-md mb-[140px]">
          Back to home page
        </button>
      </Link>
    </div>
  );
}

export default Error;
