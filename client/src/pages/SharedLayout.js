import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useAppContext } from "../context/appContext";

const SharedLayout = () => {
    const { toggleSidebar, showSidebar } = useAppContext();

  return (
    <div>
      <Sidebar />
      <div onClick={!showSidebar ? toggleSidebar : console.log()}>
        <Navbar />
      </div>
      <div onClick={!showSidebar ? toggleSidebar : console.log()}>
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;
