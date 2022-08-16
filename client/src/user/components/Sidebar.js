import React from "react";
import {Link} from "react-router-dom"
import { AiOutlineBell } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight, MdOutlineSettings } from "react-icons/md";
import { BsChatDots } from "react-icons/bs"
import {
  ProSidebar,
  SidebarContent,
  SidebarHeader,
  Menu,
  MenuItem,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "../css/Navbar/Sidebar.css";
import { useAppContext } from "../context/appContext";

const Sidebar = () => {
    const {  showSidebar } = useAppContext();

  return (
    <div className="direction">
      <ProSidebar
        className="parentsidebar"
        rtl={false}
        collapsed={showSidebar}
        collapsedWidth="0px"
      >
        <SidebarHeader>
          <div className="sidebarheader">
            <img
              src="https://in.bmscdn.com/webin/movies/superstar/profile_avatar.png"
              alt=""
            />
            <h3 className="sidebaruser">
              ! Hey Adarsh <br />
              <small>
                {" "}
                <MdOutlineKeyboardArrowRight />
                Edit profile{" "}
              </small>{" "}
            </h3>
          </div>
          <div className="loginsidebar">
            <div className="loginsidebarbutton">Login / Register</div>
            <div className="giftsidebar">
              Unlock special offers &amp; great benefits
            </div>
            <img
              src="https://in.bmscdn.com/webin/movies/superstar/rewards_login.png"
              alt=""
            />
          </div>
        </SidebarHeader>
        <SidebarContent className="sidebarmenu">
          <Menu innerSubMenuArrows={true}>
            <MenuItem
              suffix={<AiOutlineBell />}
              className="notifications"
              icon={<MdOutlineKeyboardArrowRight />}
            >
              Notifications
            </MenuItem>

            <MenuItem
              suffix={
                <img
                  height="20px"
                  width="auto"
                  src="https://assets-in.bmscdn.com/members/common/icons/purchasehistory.png"
                  alt=""
                />
              }
              className="notifications"
              icon={<MdOutlineKeyboardArrowRight />}
            >
              <Link to="/purchase-history" />
              Purchase History <br />
              <span className="menuspan">
                View all your bookings & purchase history
              </span>
            </MenuItem>

            <MenuItem
              suffix={
                <img
                  height="20px"
                  width="auto"
                  src="https://assets-in.bmscdn.com/members/common/icons/streamlibrary.png"
                  alt=""
                />
              }
              className="notifications"
              icon={<MdOutlineKeyboardArrowRight />}
            >
              <Link to="/stream-library" />
              Stream Library
              <br />
              <span className="menuspan">Rented & Purchased movies</span>
            </MenuItem>

            <MenuItem
              suffix={<BsChatDots />}
              className="notifications"
              icon={<MdOutlineKeyboardArrowRight />}
            >
              <Link to="/chat" />
              Help & Support
              <br />
              <span className="menuspan">
                View commonly asked queries and chat
              </span>
            </MenuItem>
            <MenuItem
              suffix={<MdOutlineSettings />}
              className="notifications"
              icon={<MdOutlineKeyboardArrowRight />}
            >
              <Link to="/profile" />
              Account & Settings
              <br />
              <span className="menuspan">
                Location,Payments,adresess and more
              </span>
            </MenuItem>
            <MenuItem
              suffix={
                <img
                  height="20px"
                  width="auto"
                  src="	https://assets-in.bmscdn.com/members/common/icons/rewards.png"
                  alt=""
                />
              }
              className="notifications"
              icon={<MdOutlineKeyboardArrowRight />}
            >
              <Link to="/offers" />
              Rewards
              <br />
              <span className="menuspan">
                View your rewards and unlock new ones
              </span>
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <div className="loginsidebar">
            <div className="logoutsidebarbutton">Sign Out</div>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;
