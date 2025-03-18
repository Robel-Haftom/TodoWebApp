import React from "react";
import searchIcon from "../assets/user.png";
const NavBar = () => {
  return (
    <div className="nav-bar">
      <h2>
        <span className="pink">Dash</span>board
      </h2>
      <div className="search-div">
        <input type="text" placeholder="Search your task here..." />
        <img src={searchIcon} />
      </div>
      <div className="notification-div">
        <img src={searchIcon} />
        <img src={searchIcon} />
        <div>
          <p>Tuesday</p>
          <p>20/03/22023</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
