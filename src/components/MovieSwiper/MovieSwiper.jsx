// В MovieSwiper.js - ПРАВИЛЬНЫЙ порядок
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Сначала базовые стили Swiper
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Потом твои кастомные стили
import "./styles.css";

import { Autoplay, EffectCoverflow } from "swiper/modules";

function MovieSwiper({ slides }) {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
      modules={[Autoplay, EffectCoverflow]}
      className="movieSwiper"
    >
      {slides.map((slide) => (
        <SwiperSlide key = {slide._id}>
          <img src={slide.previewImg} alt="Preview Img"></img>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MovieSwiper;
