import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/css/Recommended/Recommended.css";
const Streammovies = () => {
  return (
    <div
      style={{
        marginTop: "80px",
        paddingTop: "50px",
        marginBottom: "40px",
        backgroundColor: "#2b3148",
      }}
      className="recommended"
    >
      <img
        className="img-fluid"
        src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-rupay-banner-web-collection-202104230555.png"
        alt=""
      />
      <h1 style={{ color: "#fff" }}>Premiere</h1>
      <span style={{ color: "#fff",fontSize:"14px" }}>Brand new releases every Friday</span>
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
        <SwiperSlide style={{ backgroundColor: "#2b3148" }}>
          <div className="recommendedmovie">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODglICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330368-kvrdmmmlnk-portrait.jpg"
              alt=""
            />
            <h6 style={{ color: "#fff" }}>Kaduva</h6>
            <span style={{ color: "#fff" }}>Action/Drama</span>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#2b3148" }}>
          <div className="recommendedmovie">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODglICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330368-kvrdmmmlnk-portrait.jpg"
              alt=""
            />
            <h6 style={{ color: "#fff" }}>Kaduva</h6>
            <span style={{ color: "#fff" }}>Action/Drama</span>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide style={{ backgroundColor: "#2b3148" }}>
          <div className="recommendedmovie">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODglICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330368-kvrdmmmlnk-portrait.jpg"
              alt=""
            />
            <h6 style={{ color: "#fff" }}>Kaduva</h6>
            <span style={{ color: "#fff" }}>Action/Drama</span>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide style={{ backgroundColor: "#2b3148" }}>
          <div className="recommendedmovie">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODglICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330368-kvrdmmmlnk-portrait.jpg"
              alt=""
            />
            <h6 style={{ color: "#fff" }}>Kaduva</h6>
            <span style={{ color: "#fff" }}>Action/Drama</span>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide style={{ backgroundColor: "#2b3148" }}>
          <div className="recommendedmovie">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODglICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330368-kvrdmmmlnk-portrait.jpg"
              alt=""
            />
            <h6 style={{ color: "#fff" }}>Kaduva</h6>
            <span style={{ color: "#fff" }}>Action/Drama</span>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide style={{ backgroundColor: "#2b3148" }}>
          <div className="recommendedmovie">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODglICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330368-kvrdmmmlnk-portrait.jpg"
              alt=""
            />
            <h6 style={{ color: "#fff" }}>Kaduva</h6>
            <span style={{ color: "#fff" }}>Action/Drama</span>
          </div>
        </SwiperSlide>
      </Swiper>
      <br />
      <br />
    </div>
  );
};

export default Streammovies;
