import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight, MdOutlineSettings } from "react-icons/md";
import { BsChatDots } from "react-icons/bs"
import {
  ProSidebar,
  SidebarContent,
  SidebarHeader,
  Menu,
  MenuItem,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "../assets/css/Navbar/Sidebar.css";
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
          <center>
            <img src="logo192.png" alt="logo" height="80" width="132" />
          </center>
        </SidebarHeader>
        <SidebarContent>
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
              Stream Library
              <br />
              <span className="menuspan">Rented & Purchased movies</span>
            </MenuItem>
            <MenuItem
              suffix={<BsChatDots />}
              className="notifications"
              icon={<MdOutlineKeyboardArrowRight />}
            >
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
              Rewards
              <br />
              <span className="menuspan">
                View your rewards and unlock new ones
              </span>
            </MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;
