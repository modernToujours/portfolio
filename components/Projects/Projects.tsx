import React from "react";

import { Box } from "@mui/material";
import { SwiperSlide } from "swiper/react";

import Title from "../Layout/Title";
import ProjectCard, { Project } from "./ProjectCard";
import ProjectSwiper from "../Swiper/Projects/ProjectSwiper";
import SwiperWrapper from "./SwiperWrapper";

export type ProjectsType = { projects: Project[] };

const Projects = (props: ProjectsType) => {
  return (
    <Box
      component={"div"}
      sx={{
        textAlign: "center",
        padding: "0 20px",
        justifyContent: "center",
      }}
    >
      <Title>PROJECTS</Title>

      <SwiperWrapper>
        <ProjectSwiper>
          {props.projects.map((project) => {
            return (
              <SwiperSlide key={project.name}>
                <ProjectCard {...project} />
              </SwiperSlide>
            );
          })}
        </ProjectSwiper>
      </SwiperWrapper>
    </Box>
  );
};

export default Projects;
