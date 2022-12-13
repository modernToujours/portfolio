import React from "react";
import { HashNavigation, Keyboard, Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperProps } from "swiper/react";

const MainSwiper = (props: SwiperProps) => {
  return (
    <Swiper
      className="main"
      direction={"vertical"}
      slidesPerView={1}
      spaceBetween={100}
      mousewheel
      simulateTouch={false}
      speed={2000}
      hashNavigation={{
        watchState: true,
      }}
      pagination={{
        clickable: true,
      }}
      keyboard={{
        enabled: true,
      }}
      modules={[Keyboard, Mousewheel, Pagination, HashNavigation]}
      {...props}
    />
  );
};

export default MainSwiper;
