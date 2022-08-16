import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/Moviedetails/Aboutmovie.css";

const Alsolike = () => {
  return (
    <div className="alsolike">
      <h4>You might also like</h4>
      <Swiper
        slidesPerView={3.3}
        spaceBetween={10}
        slidesPerGroup={3.3}
        loop={false}
        speed={700}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="alsolikemovie">
            <img
              src="https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/malayankunju-et00334328-1657877172.jpg"
              alt=""
            />
            <h6>Kaduva</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="alsolikemovie">
            <img
              src="https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/malayankunju-et00334328-1657877172.jpg"
              alt=""
            />
            <h6>Kaduva</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="alsolikemovie">
            <img
              src="https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/malayankunju-et00334328-1657877172.jpg"
              alt=""
            />
            <h6>Kaduva</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="alsolikemovie">
            <img
              src="https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/malayankunju-et00334328-1657877172.jpg"
              alt=""
            />
            <h6>Kaduva</h6>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="alsolikemovie">
            <img
              src="https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/malayankunju-et00334328-1657877172.jpg"
              alt=""
            />
            <h6>Kaduva</h6>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="alsolikemovie">
            <img
              src="https://assets-in.bmscdn.com/iedb/movies/images/website/poster/large/malayankunju-et00334328-1657877172.jpg"
              alt=""
            />
            <h6>Kaduva</h6>
          </div>
        </SwiperSlide>
        <div className="alsolikeshade"></div>
      </Swiper>
    </div>
  );
};

export default Alsolike;
