import React from "react";
import "../assets/css/Navbar/Navigationbar.css";
const Navigationbar = () => {
  return (
    <div className="navigationparent">
      <div className="myhome">
        <img
          src="images/Navbar/my.svg"
          alt=""
        
          height="25px"
          width="auto"
        />
        <br />
        <span>Home</span>
      </div>
      <div className="myprofile">
        <img
          src="images/Navbar/profile.svg"
          alt=""
        
          height="25px"
          width="auto"
        />
        <br />
        <span>Profile</span>
      </div>
    </div>
  );
};

export default Navigationbar;
