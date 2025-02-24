import React, { useRef } from "react";
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
  const swiperRef = useRef(null);

  return (
    <div className="flex flex-col items-center justify-center w-full  p-4">
      {/* Swiper Container */}
      <div className="w-full h-full relative">
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
          navigation={false}
          modules={[EffectCoverflow, Navigation, Pagination]}
          breakpoints={{
            320: { slidesPerView: 1 }, // Mobile
            480: { slidesPerView: 1 }, // Mobile
            512: { slidesPerView: 2 }, // Small tablets
            768: { slidesPerView: 2 }, // Tablets
            1024: { slidesPerView: 3 }, // Laptops
            1560: { slidesPerView: 3 }, // Large screens
          }}
          className="rounded-lg h-full w-full"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <img
                src={img}
                alt={`Slide ${index}`}
                className="rounded-lg shadow-lg w-full h-full max-w-xs sm:max-w-sm md:max-w-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 justify-center mt-6">
        {/* Left Button */}
        <button
          className="bg-white text-black w-12 h-12 md:w-14 md:h-14 rounded-full z-10 shadow-md  transition flex items-center justify-center"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <i className="fa-solid fa-arrow-left text-lg md:text-xl"></i>
        </button>

        {/* Right Button */}
        <button
          className="bg-white text-black w-12 h-12 md:w-14 md:h-14 rounded-full z-10 shadow-md  transition flex items-center justify-center"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <i className="fa-solid fa-arrow-right text-lg md:text-xl"></i>
        </button>
      </div>
    </div>
  );
};

export default ResumeSlider2;
