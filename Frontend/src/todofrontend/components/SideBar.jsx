import React from "react";
import {
  alert_pink,
  clipboards_pink,
  dashboard_pink,
  list_pink,
  logout_pink,
  question_pink,
  setting_pink,
  userIcon,
} from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../../store/users";

const SideBar = () => {
  const navigate = useNavigate();

  const { user, isLogged } = useUserStore();

  return (
    <div className=" relative flex flex-col w-fit h-full mt-12 bg-teal-300 items-center justify-center gap-1 px-4 py-2 text-white rounded-br-lg rounded-tr-lg shadow-md ">
      <div
        onClick={() => navigate("/account")}
        className=" absolute -top-8 cursor-pointer w-20 h-20 bg-white rounded-full border-double border-2 border-teal-300 overflow-hidden"
      >
        <img
          src={user?.image || userIcon}
          alt="profile picture"
          className="w-full h-full object-cover "
        />
      </div>
      <div className="flex flex-col items-center justify-center ">
        <h3 className="text-xl font-semibold">{user?.image}</h3>
        <p>{user?.email}</p>
      </div>
      <div className="flex flex-col items-center justify-start gap-1">
        <div
          onClick={() => navigate("/dashboard")}
          className="flex w-full items-center justify-between px-6 py-2 gap-8 cursor-pointer rounded-lg hover:bg-white hover:text-teal-300"
        >
          <img src={dashboard_pink} alt="dashboard" className="w-[35px]" />
          <p className="flex-1 ">Dashboard</p>
        </div>
        <div
          onClick={() => navigate("/vital")}
          className="flex w-full items-center justify-between px-6 py-2 gap-8 cursor-pointer rounded-lg hover:bg-white hover:text-teal-300"
        >
          <img src={alert_pink} alt="dashboard" className="w-[35px]" />
          <p className="flex-1 ">Vital Task</p>
        </div>
        <div
          onClick={() => navigate("/myTask")}
          className="flex w-full items-center justify-between px-6 py-2 gap-8 cursor-pointer rounded-lg hover:bg-white hover:text-teal-300"
        >
          <img src={clipboards_pink} alt="dashboard" className="w-[35px]" />
          <p className="flex-1 ">My Task</p>
        </div>
        <div className="flex w-full items-center justify-between px-6 py-2 gap-8 cursor-pointer rounded-lg hover:bg-white hover:text-teal-300">
          <img src={list_pink} alt="dashboard" className="w-[35px]" />
          <p className="flex-1 ">Task Categories</p>
        </div>
        <div className="flex w-full items-center justify-between px-6 py-2 gap-8 cursor-pointer rounded-lg hover:bg-white hover:text-teal-300">
          <img src={setting_pink} alt="dashboard" className="w-[35px]" />
          <p className="flex-1 ">Settings</p>
        </div>
        <div className="flex w-full items-center justify-between px-6 py-2 gap-8 cursor-pointer rounded-lg hover:bg-white hover:text-teal-300">
          <img src={question_pink} alt="dashboard" className="w-[35px]" />
          <p className="flex-1 ">Help</p>
        </div>
      </div>
      <div className="flex w-full flex-col self-start items-start justify-start gap-25">
        <div className="flex-1"></div>
        <div className="flex w-full items-start justify-start self-end- px-6 py-2 gap-2 rounded-lg hover:bg-white hover:text-teal-300">
          <img src={logout_pink} alt="dashboard" className="w-[35px]" />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
