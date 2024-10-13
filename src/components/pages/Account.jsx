import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/auth";
import { useContext } from "react";

function Account() {
  const { user, name, password } = useContext(AuthContext);
  return (
    <div className="xs2:mx-20 md:mx-[135px]">
      <div className="flex justify-between mb-20 gap-10 xs2:flex-col md:flex-row">
        <h1>
          <span className="text-gray-400">Home /</span> My Account
        </h1>
        <p>
          Welcome
          <span className="text-button2">{user ? user.displayName : name}</span>
        </p>
      </div>

      <div className="flex justify-between xs2:flex-col md:flex-row">
        <div className="flex flex-col gap-4 text-start">
          <h4 className="text-base font-medium">Manage My Account</h4>
          <ul className="ml-10 text-gray-400">
            <li className="hover:text-button2">
              <Link>My Profile</Link>
            </li>
            <li className="hover:text-button2">
              <Link>Address Book</Link>
            </li>
            <li className="hover:text-button2">
              <Link>My Payment Options</Link>
            </li>
          </ul>
          <h4 className="text-base font-medium">My Orders</h4>
          <ul className="ml-10 text-gray-400">
            <li className="hover:text-button2">
              <Link>My Returns</Link>
            </li>
            <li className="hover:text-button2">
              <Link>My Cancellations</Link>
            </li>
          </ul>
          <Link to="/wishlist" className="text-base font-medium">
            My Wishlist
          </Link>
        </div>

        <div className="flex flex-col gap-4 shadow-md text-start py-10 xs2:pr-16 md:px-20 mb-[140px] xs2:w-[300px] md:w-[870px]">
          <h3 className="text-button2 text-xl">Edit Your Profile</h3>
          <form className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-6 justify-between xs2:flex-col md:flex-row">
              <div className="flex flex-col">
                <label htmlFor="Fname">First Name</label>
                <input
                  placeholder="First Name"
                  type="text"
                  className="w-full py-[13px] xs2:px-2 md:px-4 bg-secondary rounded-md"
                  id="Fname"
                  defaultValue={user ? user.displayName : name}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="Lname">Last Name</label>
                <input
                  placeholder="Last Name"
                  type="text"
                  className="w-full py-[13px] xs2:px-2 md:px-4 bg-secondary rounded-md"
                  id="Lname"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  placeholder="Email"
                  type="email"
                  className="w-full py-[13px] xs2:px-2 md:px-4 bg-secondary rounded-md"
                  id="email"
                  defaultValue={user ? user.email : ""}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="address">Address</label>
                <input
                  placeholder="Address"
                  type="text"
                  className="w-full py-[13px] xs2:px-2 md:px-4 bg-secondary rounded-md"
                  id="address"
                />
              </div>
              <div className="flex flex-col gap-4 w-full">
                <h3 className="text-base">Password Changes</h3>
                <input
                  type="password"
                  className="w-full py-[13px] px-4 bg-secondary rounded-md"
                  placeholder="Current Password"
                  defaultValue={password}
                />
                <input
                  type="text"
                  className="w-full py-[13px] px-4 bg-secondary rounded-md"
                  placeholder="New Password"
                />
                <input
                  type="text"
                  className="w-full py-[13px] px-4 bg-secondary rounded-md"
                  placeholder="Confirm New Password"
                />
              </div>
            </div>
            <div className="flex justify-end gap-8 xs2:flex-col md:flex-row">
              <button className="border border-black py-4 px-12 rounded-md hover:bg-button2 hover:border-none hover:text-white">
                Cancel
              </button>
              <button className="bg-button2 rounded-md text-white py-4 px-12 hover:bg-white hover:border hover:border-black hover:text-black">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Account;
