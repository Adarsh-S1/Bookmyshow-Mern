import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { RiHeartFill } from "react-icons/ri";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/Moviedetails/Aboutmovie.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Reviewsslide = () => {
  return (
    <div className="topreviews entertainment">
      <h4>Top reviews</h4>
      <div className="noofreviews">
        <span>Summary of 5.9K reviews</span>
        <h5>
          5.9K reviews <MdOutlineKeyboardArrowRight />
        </h5>
      </div>
      <Swiper
        slidesPerView={1.7}
        spaceBetween={-100}
        slidesPerGroup={1}
        loop={false}
        speed={700}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="topreviewscard">
            <div className="reviewscard1">
              {" "}
              <img
                src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prithviraj-sukumaran-31501-16-09-2017-05-40-22.jpg"
                alt=""
              />
              &nbsp; &nbsp; <h5>User</h5>
              <RiHeartFill size={25} fill="#f84464" />
              &nbsp;
              <span>100%</span>
            </div>
            <div className="reviewdetails">
              <h2>Review heading</h2>
              <p>Review details</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="topreviewscard">
            <div className="reviewscard1">
              {" "}
              <img
                src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prithviraj-sukumaran-31501-16-09-2017-05-40-22.jpg"
                alt=""
              />
              &nbsp; &nbsp; <h5>User</h5>
              <RiHeartFill size={25} fill="#f84464" />
              &nbsp;
              <span>100%</span>
            </div>
            <div className="reviewdetails">
              <h2>Review heading</h2>
              <p>Review details</p>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="topreviewscard">
            <div className="reviewscard1">
              {" "}
              <img
                src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prithviraj-sukumaran-31501-16-09-2017-05-40-22.jpg"
                alt=""
              />
              &nbsp; &nbsp; <h5>User</h5>
              <RiHeartFill size={25} fill="#f84464" />
              &nbsp;
              <span>100%</span>
            </div>
            <div className="reviewdetails">
              <h2>Review heading</h2>
              <p>Review details</p>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="topreviewscard">
            <div className="reviewscard1">
              {" "}
              <img
                src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prithviraj-sukumaran-31501-16-09-2017-05-40-22.jpg"
                alt=""
              />
              &nbsp; &nbsp; <h5>User</h5>
              <RiHeartFill size={25} fill="#f84464" />
              &nbsp;
              <span>100%</span>
            </div>
            <div className="reviewdetails">
              <h2>Review heading</h2>
              <p>Review details</p>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="topreviewscard">
            <div className="reviewscard1">
              {" "}
              <img
                src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prithviraj-sukumaran-31501-16-09-2017-05-40-22.jpg"
                alt=""
              />
              &nbsp; &nbsp; <h5>User</h5>
              <RiHeartFill size={25} fill="#f84464" />
              &nbsp;
              <span>100%</span>
            </div>
            <div className="reviewdetails">
              <h2>Review heading</h2>
              <p>Review details</p>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="topreviewscard">
            <div className="reviewscard1">
              {" "}
              <img
                src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prithviraj-sukumaran-31501-16-09-2017-05-40-22.jpg"
                alt=""
              />
              &nbsp; &nbsp; <h5>User</h5>
              <RiHeartFill size={25} fill="#f84464" />
              &nbsp;
              <span>100%</span>
            </div>
            <div className="reviewdetails">
              <h2>Review heading</h2>
              <p>Review details</p>
            </div>
          </div>
        </SwiperSlide>
        <div className="alsolikeshade"></div>
      </Swiper>
    </div>
  );
};

export default Reviewsslide;
