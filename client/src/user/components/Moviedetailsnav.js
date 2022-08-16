import React from "react";
import { RiHeartFill } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/Moviedetails/Aboutmovie.css";
const Moviedetailsnav = () => {
  return (
    <div className="moviedetailsnav1">
      <h4>Kaduva</h4>
      <div className="movierating2">
        <RiHeartFill size={18} fill="#f84464" />
        <h4> &nbsp;&nbsp;87%</h4>
        <span>
          &nbsp;&nbsp; 10.3K ratings
          <MdOutlineKeyboardArrowRight fill="#989898" />
        </span>
      </div>
    </div>
  );
};

export default Moviedetailsnav;
