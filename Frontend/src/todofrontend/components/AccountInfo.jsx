import { Link } from "react-router-dom";
import { userIcon } from "../assets/assets";

const AccountInfo = () => {
  return (
    <div className="p-4 w-full mt-8">
      <div className="flex flex-col justify-evenly gap-4 shadow-2xl border border-gray-500 px-8 py-4 rounded-md">
        <div className="flex items-center justify-between py-1">
          <p>Account Information</p>
          <Link to="/">
            <p>Go Back</p>
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <div className="w-20 h-20 bg-white rounded-full border-double border-2 border-teal-300 overflow-hidden">
            <img
              src={userIcon}
              alt="profile picture"
              className="w-full h-full object-cover "
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-center">
            <h3 className="text-xl font-semibold">User Name</h3>
            <p>User email address</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 shadow-2xl border border-gray-500 px-8 py-3  rounded-md">
          <p className="font-semibold">First Name</p>
          <input
            type="text"
            className="focus:outline-none px-4 max-w-6/10 border border-gray-400  rounded-sm py-1"
          />
          <p className="font-semibold">Last Name</p>
          <input
            type="text"
            className="focus:outline-none px-4 max-w-6/10 border border-gray-400  rounded-sm py-1"
          />
          <p className="font-semibold">Email</p>
          <input
            type="text"
            className="focus:outline-none px-4 max-w-6/10 border border-gray-400  rounded-sm py-1"
          />
          <p className="font-semibold">Contact Number</p>
          <input
            type="text"
            className="focus:outline-none px-4 max-w-6/10 border border-gray-400  rounded-sm py-1"
          />
          <p className="font-semibold">Position</p>
          <input
            type="text"
            className="focus:outline-none px-4 max-w-6/10 border border-gray-400  rounded-sm py-1"
          />
          <div className="flex gap-4 items-center mt-2">
            <button className="rounded bg-teal-300 text-white font-semibold px-5 py-2 hover:text-teal-300 hover:bg-white hover:shadow-md border-teal-300 border transition-all cursor-pointer">
              Update Info
            </button>
            <button
              onClick={() => navigate("/changePassword")}
              className="rounded bg-teal-300 text-white font-semibold px-5 py-2 hover:text-teal-300 hover:bg-white hover:shadow-md border-teal-300 border transition-all cursor-pointer"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
