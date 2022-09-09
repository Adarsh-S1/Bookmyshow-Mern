import React from "react";
import { Offline, Online } from "react-detect-offline";
import { Outlet } from "react-router-dom";
import Header from "../components/Header"
const SharedLayoutAdmin = () => {
  return (
    <div>
      <h1><Header/></h1>

      {/* <Online> */}
      <Outlet />
      {/* </Online> */}
      {/* <Offline>
          <InternetError />
        </Offline> */}
      <h1>Footer</h1>
    </div>
  );
};

export default SharedLayoutAdmin;
