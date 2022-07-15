import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/css/Recommended/Recommended.css";
const Entertainment = () => {
  return (
    <div style={{ paddingTop: "40px" }} className="entertainment recommended">
      <h1>Stream Movies</h1>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={5}
        loop={true}
        speed={700}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/fitness-collection-2020081150.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-collection-202007220710.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/comedy-shows-collection-202007220710.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MSBFdmVudA%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/music-shows-collection-202007220710.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/theatre-shows-collection-202012041128.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Entertainment;
