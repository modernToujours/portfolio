import React, { useEffect, useState } from "react";

import { Box } from "@mui/material";
import SwiperCore from "swiper";
import { SwiperSlide } from "swiper/react";
import axios from "axios";

import PersistentDrawer from "../components/Drawer/PersistentDrawer";
import FakerHeaderBox from "../components/Swiper/Main/FakerHeaderBox";
import MainSwiper from "../components/Swiper/Main/MainSwiper";
import SwiperSection from "../components/Swiper/Main/SwiperSection";
import MyCanvas from "../components/Three/MyCanvas";
import Hero from "../components/Home/Hero";
import Profile from "../components/Profile/Profile";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import { ProfileProps } from "../components/Profile/ProfileDetailTable";
import { Project } from "../components/Projects/ProjectCard";

import "swiper/css";
import "swiper/css/pagination";

export default function Home({
  profile,
  projects,
}: {
  profile: ProfileProps;
  projects: Project[];
}) {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [angle, setAngle] = useState<number>(0);

  const onClickMenu = (id: number) => {
    if (swiper) swiper.slideTo(id, 2000);
  };

  console.log(projects);
  return (
    <Box component={"div"} sx={{ overflow: "hidden" }}>
      <PersistentDrawer onClickMenu={onClickMenu}>
        <FakerHeaderBox />
        <MainSwiper
          onSwiper={setSwiper}
          onSlidePrevTransitionStart={() => setAngle((prev) => prev - 1)}
          onSlideNextTransitionStart={() => setAngle((prev) => prev + 1)}
        >
          <SwiperSlide data-hash="Home">
            <SwiperSection>
              <Hero />
            </SwiperSection>
          </SwiperSlide>
          <SwiperSlide data-hash="About">
            <SwiperSection>
              {profile && <Profile profile={profile} />}
            </SwiperSection>
          </SwiperSlide>
          <SwiperSlide data-hash="Projects">
            <SwiperSection>
              {projects && <Projects projects={projects} />}
            </SwiperSection>
          </SwiperSlide>
          <SwiperSlide data-hash="Contact">
            <SwiperSection>
              <Contact />
            </SwiperSection>
          </SwiperSlide>
        </MainSwiper>
      </PersistentDrawer>
      <MyCanvas angle={angle} />
    </Box>
  );
}

export const getStaticProps = async () => {
  const profileRes = await axios.get(
    "https://portfolio-a876e-default-rtdb.firebaseio.com/profile.json"
  );
  const profile = profileRes.data;
  const projectsRes = await axios.get(
    "https://portfolio-a876e-default-rtdb.firebaseio.com/projects.json"
  );
  const projects = projectsRes.data;
  console.log(projects);
  return {
    props: { profile, projects },
  };
};
