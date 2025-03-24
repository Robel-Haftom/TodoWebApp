import { useState } from "react";
import {
  edit,
  email,
  padlock_lock,
  padlock_open,
  sign_up_background,
  userIcon,
} from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../../../store/users";

const SignUp = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { createUser } = useUserStore();
  const navigate = useNavigate();

  return (
    <div className="bg-teal-300 w-full min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-md flex flex-col md:flex-row items-start justify-center px-6 py-4 ">
        <h1 className="text-2xl font-bold md:hidden self-center my-2">
          Todo App
        </h1>
        <div>
          <img
            src={sign_up_background}
            alt="sign-up-image"
            className="hidden md:block"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-center gap-3">
          <h1 className="font-semibold text-xl md:text-3xl ">Sign Up</h1>
          <form className="flex flex-col items-start justify-center gap-4">
            <div className="flex border border-gray-600 rounded-md p-2 gap-3 md:min-w-96">
              <img src={edit} alt="edit-icon" className="w-[25px] " />
              <input
                type="text"
                placeholder="Enter First Name"
                className="focus:outline-none"
                value={user.firstName}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
              />
            </div>
            <div className="flex border border-gray-600 rounded-md p-2 gap-3 md:min-w-96">
              <img src={edit} alt="edit-icon" className="w-[25px] " />
              <input
                type="text"
                placeholder="Enter Last Name"
                className="focus:outline-none"
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
            </div>
            <div className="flex border border-gray-600 rounded-md p-2 gap-3 md:min-w-96">
              <img src={userIcon} alt="edit-icon" className="w-[25px] " />
              <input
                type="text"
                placeholder="Enter User Name"
                className="focus:outline-none"
                value={user.userName}
                onChange={(e) => setUser({ ...user, userName: e.target.value })}
              />
            </div>
            <div className="flex border border-gray-600 rounded-md p-2 gap-3 md:min-w-96">
              <img src={email} alt="edit-icon" className="w-[25px] " />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="focus:outline-none"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="flex border border-gray-600 rounded-md p-2 gap-3 md:min-w-96">
              <img src={padlock_lock} alt="edit-icon" className="w-[25px] " />
              <input
                type="password"
                placeholder="Enter Password"
                className="focus:outline-none"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div className="flex border border-gray-600 rounded-md p-2 gap-3 md:min-w-96">
              <img src={padlock_open} alt="edit-icon" className="w-[25px] " />
              <input
                type="password"
                placeholder="Confirm Password"
                className="focus:outline-none"
                value={user.confirmPassword}
                onChange={(e) =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
              />
            </div>
          </form>
          <div className="flex gap-3 pl-1">
            <input type="checkbox" className="scale-150" />
            <p>I agree to all the terms</p>
          </div>
          <button
            onClick={() => createUser(user, navigate)}
            className="cursor-pointer bg-teal-300 px-3 py-2 md:px-8 md:py-3 rounded-sm shadow-xs shadow-gray-500 text-white md:font-semibold text-lg hover:text-teal-300 hover:bg-white hover:shadow-md border-teal-300 border transition-all"
          >
            Register
          </button>
          <p>
            Already have an account ?{" "}
            <Link
              to="/login"
              className="text-blue-500 font-medium hover:underline visited:text-blue-800 active:text-blue-500"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
