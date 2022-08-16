import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../css/Homebanner/Homebanner.css"
const Homebanner = () => {
  return (
    <div className="swiperbanner">
      <Swiper
        scrollbar={{ draggable: true }}
        slidesPerView={1.04}
     spaceBetween={10}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1657199545852_webthor.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1657541125625_freeaccess_web.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1657108204582_restaurantweb.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Homebanner;
