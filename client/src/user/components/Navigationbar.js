import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar/Navigationbar.css";
const Navigationbar = () => {
  return (
    <div className="navigationparent">
      <div className="myhome">
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          <img src="/user/Navbar/my.svg" alt="" height="25px" width="auto" />
          <br />
          <span>Home</span>
        </Link>
      </div>
      <div className="myprofile">
        <Link
          to="/profile"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <img
            src="/user/Navbar/profile.svg"
            alt=""
            height="25px"
            width="auto"
          />
          <br />
          <span>Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default Navigationbar;
