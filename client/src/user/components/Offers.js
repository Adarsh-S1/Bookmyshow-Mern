import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/Moviedetails/Aboutmovie.css";

const Offers = () => {
  return (
    <div className="applicableoffers ">
      <h4>Applicable Offers</h4>
      <Swiper
        slidesPerView={1.8}
        spaceBetween={10}
        slidesPerGroup={1.8}
        loop={false}
        speed={700}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="offers">
            <img
              alt="offer"
              src="https://in.bmscdn.com/offers/offerlogo/bms-stream-first-movie-free-datenight.jpg?19022021140646"
            />
            <div className="offersdetails">
              <span>WATCH THESE MOVIES FOR FREE !</span>
              <br />
              <p>&nbsp;Limited Period Offer</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="offers">
            <img
              alt="offer"
              src="https://in.bmscdn.com/offers/offerlogo/bms-stream-first-movie-free-datenight.jpg?19022021140646"
            />
            <div className="offersdetails">
              <span>WATCH THESE MOVIES FOR FREE !</span>
              <br />
              <p>&nbsp;Limited Period Offer</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="offers">
            <img
              alt="offer"
              src="https://in.bmscdn.com/offers/offerlogo/bms-stream-first-movie-free-datenight.jpg?19022021140646"
            />
            <div className="offersdetails">
              <span>WATCH THESE MOVIES FOR FREE !</span>
              <br />
              <p>&nbsp;Limited Period Offer</p>
            </div>
          </div>
        </SwiperSlide>
        <div className="shade"></div>
      </Swiper>
    </div>
  );
};

export default Offers;
