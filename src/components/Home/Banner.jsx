import React from "react";
import "./Banner.css";
import "swiper/css";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/module";
const Banner = () => {
  return (
    <>
      <Swiper
        scrollbar={{ hide: true }}
        autoplay={{
          delay: 400000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide> </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
