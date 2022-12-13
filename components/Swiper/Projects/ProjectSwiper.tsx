import React from "react";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperProps } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProjectSwiper = (props: SwiperProps) => {
  return (
    <Swiper
      cssMode={true}
      className="project"
      slidesPerView={1}
      speed={500}
      spaceBetween={100}
      pagination={{ type: "fraction" }}
      navigation={true}
      modules={[Pagination, Navigation]}
      {...props}
    />
  );
};

export default ProjectSwiper;
