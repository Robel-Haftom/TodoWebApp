import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const ProfilePage = () => {
  return (
    <div className="profile">
      <NavBar />
      <Sidebar />
      <Routes>
        <Route path="/homepage" element={<MainContent />} />
      </Routes>
    </div>
  );
};

export default ProfilePage;
