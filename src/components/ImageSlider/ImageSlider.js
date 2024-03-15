import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./imageSlider.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ImageSlider = () => {
  return (
    <div className="imageSliderContainer">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/AllImages/greenaura.jpg" alt="greenaura image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/AllImages/balance.jpg" alt="balance image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/AllImages/margaret.jpg" alt="margaret image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/AllImages/marguerite.jpg" alt="marguerite image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/AllImages/sunset.jpg" alt="sunset image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
