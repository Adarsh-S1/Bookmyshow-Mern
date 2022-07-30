import React from "react";
import "../assets/css/Moviedetails/Moviedetails.css";
import Button from "react-bootstrap/Button";
import { BsFillPlayFill } from "react-icons/bs";
import { RiHeartFill } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const MoviedetailsBanner = () => {
  return (
    <div>
      <div className="moviebanner">
        <div className="moviecard">
          <img
            src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kaduva-et00330368-02-06-2022-04-30-06.jpg"
            alt=""
          />
          <span>In cinemas</span>
          <Button>
            <BsFillPlayFill /> Trailer
          </Button>
        </div>
        <div className="moviedetails">
          <h1>Kaduva</h1>
          <div className="movierating">
            <RiHeartFill size={28} fill="#f84464" />
            <h4> &nbsp;&nbsp;87%</h4>
            <span>
              &nbsp;&nbsp; 10.3K ratings
              <MdOutlineKeyboardArrowRight fill="#989898" />
            </span>
          </div>
          <div className="ratingboard">
            <div className="ratingboard1">
              <h6>Add your rating & review</h6>
              <span>Your ratings matter</span>
            </div>
            <div className="ratingboard2">
              <Button>Rate now</Button>
            </div>
          </div>
          <div className="languages">2D - Malayalam,Hindi,Telungu,Tamil</div>
          <div className="genre">2h 35m • Action/Drama • U/A • 7 Jul,2022</div>
          <div className="booktickets">
            <Button>Book Tickets</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviedetailsBanner;
