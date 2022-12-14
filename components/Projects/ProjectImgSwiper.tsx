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
            <Image
              src={img}
              alt={img}
              fill
              sizes="(max-width:600px) 200px, (min-width:601px) 480px"
            />
          </SwiperSlide>
        );
      })}
    </InnerSwiper>
  );
};

export default ProjectImgSwiper;
