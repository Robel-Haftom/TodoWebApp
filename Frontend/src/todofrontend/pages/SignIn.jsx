import { Link, useNavigate } from "react-router-dom";
import { padlock_lock, sign_in_background, userIcon } from "../assets/assets";
import { useState } from "react";

const SignIn = () => {
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    userName: "",
    password: "",
  });
  return (
    <div className="bg-teal-300 w-full min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-md flex flex-col md:flex-row-reverse items-start justify-center px-6 py-4 ">
        <h1 className="text-2xl font-bold md:hidden self-center my-2">
          Todo App
        </h1>
        <div>
          <img
            src={sign_in_background}
            alt="sign-up-image"
            className="hidden md:block"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-center gap-4 py-12">
          <h1 className="font-semibold text-xl md:text-3xl ">Sign Up</h1>
          <form className="flex flex-col items-start justify-center gap-4">
            <div className="flex border border-gray-600 rounded-md p-2 gap-3 md:min-w-96">
              <img src={userIcon} alt="edit-icon" className="w-[25px] " />
              <input
                type="text"
                placeholder="Enter User Name"
                className="focus:outline-none"
                value={userInput.userName}
                onChange={(e) =>
                  setUserInput({ ...userInput, userName: e.target.value })
                }
              />
            </div>
            <div className="flex border border-gray-600 rounded-md p-2 gap-3 md:min-w-96">
              <img src={padlock_lock} alt="edit-icon" className="w-[25px] " />
              <input
                type="text"
                placeholder="Enter Password"
                className="focus:outline-none"
                value={userInput.password}
                onChange={(e) =>
                  setUserInput({ ...userInput, password: e.target.value })
                }
              />
            </div>
          </form>
          <div className="flex gap-3 pl-1">
            <input type="checkbox" className="scale-150" />
            <p>Remember me</p>
          </div>
          <button
            onClick={() => navigate("/register")}
            className="cursor-pointer bg-teal-300 px-3 py-2 md:px-8 md:py-3 rounded-sm shadow-xs shadow-gray-500 text-white md:font-semibold text-lg hover:text-teal-300 hover:bg-white hover:shadow-md border-teal-300 border transition-all"
          >
            Login
          </button>
          <div className="flex mt-6 ">
            <p>Or Login with,</p>
            <span className="flex gap-1.5 px-2">
              <img src={padlock_lock} alt="edit-icon" className="w-[25px] " />
              <img src={padlock_lock} alt="edit-icon" className="w-[25px] " />
              <img src={padlock_lock} alt="edit-icon" className="w-[25px] " />
            </span>
          </div>
          <p>
            Don't have an account ?{" "}
            <Link to="/register">
              <a
                href="#home"
                className="text-blue-500 font-medium hover:underline visited:text-blue-800 active:text-blue-500"
              >
                Create One
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
