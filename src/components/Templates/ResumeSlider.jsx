import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import imgResume1 from "../../assets/Images/Resume/resume1.png";
import imgResume2 from "../../assets/Images/Resume/resume2.png";
import imgResume3 from "../../assets/Images/Resume/resume3.png";

const images = [imgResume1, imgResume2, imgResume3, imgResume1, imgResume2];

const ResumeSlider2 = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        loop={true}
        pagination={{ clickable: true }}
        // navigation={true}
        modules={[EffectCoverflow, Navigation, Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1560: {
            slidesPerView: 3,
          },
        }}
        className="rounded-lg"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="">
            <img
              src={img}
              alt={`Slide ${index}`}
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ResumeSlider2;
