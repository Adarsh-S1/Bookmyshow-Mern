import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const SharedLayout = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default SharedLayout;
