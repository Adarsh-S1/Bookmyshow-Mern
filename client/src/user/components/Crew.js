import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/css/Moviedetails/Aboutmovie.css";

const Crew = () => {
  return (
    <div className="applicableoffers castmain">
      <h4>Crew</h4>
      <Swiper
        slidesPerView={5.5}
        spaceBetween={30}
        slidesPerGroup={5.5}
        loop={false}
        speed={700}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="cast">
            <img
              alt="offer"
              src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prithviraj-sukumaran-31501-16-09-2017-05-40-22.jpg"
            />

            <span>Prithiraj sukumaran</span>
            <p>Actor</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cast">
            <img
              alt="offer"
              src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prithviraj-sukumaran-31501-16-09-2017-05-40-22.jpg"
            />

            <span>Prithiraj sukumaran</span>
            <p>Actor</p>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="cast">
            <img
              alt="offer"
              src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prithviraj-sukumaran-31501-16-09-2017-05-40-22.jpg"
            />

            <span>Prithiraj sukumaran</span>
            <p>Actor</p>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="cast">
            <img
              alt="offer"
              src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prithviraj-sukumaran-31501-16-09-2017-05-40-22.jpg"
            />

            <span>Prithiraj sukumaran</span>
            <p>Actor</p>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="cast">
            <img
              alt="offer"
              src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prithviraj-sukumaran-31501-16-09-2017-05-40-22.jpg"
            />

            <span>Prithiraj sukumaran</span>
            <p>Actor</p>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="cast">
            <img
              alt="offer"
              src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prithviraj-sukumaran-31501-16-09-2017-05-40-22.jpg"
            />

            <span>Prithiraj sukumaran</span>
            <p>Actor</p>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="cast">
            <img
              alt="offer"
              src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prithviraj-sukumaran-31501-16-09-2017-05-40-22.jpg"
            />

            <span>Prithiraj sukumaran</span>
            <p>Actor</p>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="cast">
            <img
              alt="offer"
              src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/prithviraj-sukumaran-31501-16-09-2017-05-40-22.jpg"
            />

            <span>Prithiraj sukumaran</span>
            <p>Actor</p>
          </div>
        </SwiperSlide>
        <div className="castshade"></div>
      </Swiper>
    </div>
  );
};

export default Crew;
