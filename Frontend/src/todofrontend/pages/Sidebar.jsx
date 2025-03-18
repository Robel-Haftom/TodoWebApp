import React from "react";

import profile from "../assets/molle.jpg";
import dashboard_white from "../assets/dashboard_white.png";
import dashboard_pink from "../assets/dashboard_pink.png";
import clipboards_white from "../assets/clipboards_white.png";
import clipboards_pink from "../assets/clipboards_pink.png";
import list_white from "../assets/list_white.png";
import list_pink from "../assets/list_pink.png";
import setting_white from "../assets/setting_white.png";
import setting_pink from "../assets/setting_pink.png";
import question_white from "../assets/question_white.png";
import question_pink from "../assets/question_pink.png";
import logout_white from "../assets/logout_white.png";
import logout_pink from "../assets/logout_pink.png";
import alert_white from "../assets/alert_white.png";
import alert_pink from "../assets/alert_pink.png";

const Sidebar = () => {
  return (
    <div className="dashboard-side-bar">
      <div className="profile-picture">
        <img src={profile} alt="" />
      </div>
      <div className="side-bar-menus">
        <div className="user-detail">
          <h4 className="userName">Robel Haftom</h4>
          <p className="email">robelhaftom80@gmail.com</p>
        </div>
        <div className="menus">
          <div className="menu-list">
            <div>
              <img src={dashboard_white} alt="" />
              <p>Dashboard</p>
            </div>
          </div>
          <div className="menu-list">
            <div>
              <img src={alert_white} alt="" />
              <p>Vital Tasks</p>
            </div>
          </div>
          <div className="menu-list">
            <div>
              <img src={clipboards_white} alt="" />
              <p>My Tasks</p>
            </div>
          </div>
          <div className="menu-list">
            <div>
              <img src={list_white} alt="" />
              <p>Task Categories</p>
            </div>
          </div>
          <div className="menu-list">
            <div>
              <img src={setting_white} alt="" />
              <p>Settings</p>
            </div>
          </div>
          <div className="menu-list">
            <div>
              <img src={question_white} alt="" />
              <p>Help</p>
            </div>
          </div>
        </div>
      </div>

      <div className="logout">
        <img src={logout_white} alt="" />
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
