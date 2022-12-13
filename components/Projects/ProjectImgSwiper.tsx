import React from "react";

import Image from "next/image";

import { SwiperSlide } from "swiper/react";
import InnerSwiper from "../Swiper/Projects/InnerSwiper";

const ProjectImgSwiper = ({ projectImgs }: { projectImgs: string[] }) => {
  return (
    <InnerSwiper>
      {projectImgs.map((img) => {
        return (
          <SwiperSlide key={img}>
            <Image src={img} alt={img} fill />
          </SwiperSlide>
        );
      })}
    </InnerSwiper>
  );
};

export default ProjectImgSwiper;
