import React from "react";
import { userIcon } from "../assets/assets";
const NavBar = () => {
  return (
    <div className="h-full px-16 py-4 shadow-2xl gap-10 items-center justify-evenly hidden md:flex">
      <div className="flex items-center justify-center">
        <h2 className="text-4xl font-bold">
          <span className="text-teal-300">Dash</span>Board
        </h2>
      </div>
      <div className="flex-1 flex items-center justify-between border border-gray-200 rounded-lg max-w-[500px] shadow-xl">
        <input
          type="text"
          placeholder="Search you tasks here..."
          className="px-4 text-md focus:outline-none flex-1"
        />
        <div className="w-[30px] h-[30px] bg-teal-300 rounded-lg p-1">
          <img
            src={userIcon}
            alt="search-icon"
            className="w-full object-cover"
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-8">
        <img src={userIcon} alt="search-icon" className="w-[25px]" />
        <img src={userIcon} alt="search-icon" className="w-[25px]" />
        <div className="flex flex-col items-center justify-center">
          <p>Tuesday</p>
          <p>21/03/2025</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
