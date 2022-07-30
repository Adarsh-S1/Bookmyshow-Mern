import React from "react";
import { Offline, Online } from "react-detect-offline";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import InternetError from "../components/InternetError";
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
        <Online>
          <Outlet />
        </Online>
        <Offline>
          <InternetError />
        </Offline>
      </div>
      <Footer />
    </div>
  );
};

export default SharedLayout;
