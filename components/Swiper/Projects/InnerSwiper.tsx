import React from "react";

import { Swiper, SwiperProps } from "swiper/react";

const InnerSwiper = (props: SwiperProps) => {
  return (
    <Swiper
      className="inner"
      slidesPerView={1}
      speed={1000}
      spaceBetween={0}
      {...props}
    />
  );
};

export default InnerSwiper;
