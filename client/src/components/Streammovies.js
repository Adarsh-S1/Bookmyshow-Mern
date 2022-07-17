import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/css/Recommended/Recommended.css";
const Streammovies = () => {
  return (
    <div style={{ paddingTop: "80px" }} className="recommended">
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
          <div className="recommendedmovie">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODglICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330368-kvrdmmmlnk-portrait.jpg"
              alt=""
            />
            <h6>Kaduva</h6>
            <span>Action/Drama</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="recommendedmovie">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODglICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330368-kvrdmmmlnk-portrait.jpg"
              alt=""
            />
            <h6>Kaduva</h6>
            <span>Action/Drama</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="recommendedmovie">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODglICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330368-kvrdmmmlnk-portrait.jpg"
              alt=""
            />
            <h6>Kaduva</h6>
            <span>Action/Drama</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="recommendedmovie">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODglICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330368-kvrdmmmlnk-portrait.jpg"
              alt=""
            />
            <h6>Kaduva</h6>
            <span>Action/Drama</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="recommendedmovie">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODglICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330368-kvrdmmmlnk-portrait.jpg"
              alt=""
            />
            <h6>Kaduva</h6>
            <span>Action/Drama</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="recommendedmovie">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODglICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330368-kvrdmmmlnk-portrait.jpg"
              alt=""
            />
            <h6>Kaduva</h6>
            <span>Action/Drama</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="recommendedmovie">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODglICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330368-kvrdmmmlnk-portrait.jpg"
              alt=""
            />
            <h6>Kaduva</h6>
            <span>Action/Drama</span>
          </div>
        </SwiperSlide>
      </Swiper>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Streammovies;
