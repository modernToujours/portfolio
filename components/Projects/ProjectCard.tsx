import React from "react";

import { Box, Link, Typography } from "@mui/material";

import SkillChip from "./SkillChip";
import SkillTitle from "./SkillTitle";
import ProjectTitle from "./ProjectTitle";
import ProjectImgSwiper from "./ProjectImgSwiper";
import Text from "../Layout/Text";

export type Project = {
  name: string;
  detail: string;
  projectImgs: string[];
  skills: {
    frontEnd?: string[];
    backEnd?: string[];
    database?: string[];
    deployment?: string[];
  };
  githubLink: string;
  address: string;
};

const ProjectCard = (props: Project) => {
  return (
    <Box
      component={"div"}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <ProjectTitle name={props.name} />
      <Box
        component={"div"}
        sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
      >
        <ProjectImgSwiper projectImgs={props.projectImgs} />
        <Box
          component={"div"}
          sx={{
            padding: "10px",
            overflow: "hidden",
            width: { xs: "300px", sm: "500px" },
          }}
        >
          <Text>{props.detail}</Text>
          {props.skills.frontEnd && (
            <Box component={"div"} sx={{ display: "flex" }}>
              <SkillTitle title="Front End" />
              <Box component={"div"} sx={{ display: "flex", flexWrap: "wrap" }}>
                {props.skills.frontEnd.map((skill) => (
                  <SkillChip key={skill} skill={skill} />
                ))}
              </Box>
            </Box>
          )}
          {props.skills.backEnd && (
            <Box component={"div"} sx={{ display: "flex", flexWrap: "wrap" }}>
              <SkillTitle title="Back End" />
              {props.skills.backEnd.map((skill) => (
                <SkillChip key={skill} skill={skill} />
              ))}
            </Box>
          )}
          {props.skills.database && (
            <Box component={"div"} sx={{ display: "flex", flexWrap: "wrap" }}>
              <SkillTitle title="Database" />
              {props.skills.database.map((skill) => (
                <SkillChip key={skill} skill={skill} />
              ))}
            </Box>
          )}
          {props.skills.deployment && (
            <Box component={"div"} sx={{ display: "flex" }}>
              <SkillTitle title="Deployment" />
              {props.skills.deployment.map((skill) => (
                <SkillChip key={skill} skill={skill} />
              ))}
            </Box>
          )}
          <Box component={"div"} sx={{ display: "flex" }}>
            <Link target="blank" href={props.githubLink}>
              <SkillTitle title="Github" />
            </Link>
          </Box>
          <Box component={"div"} sx={{ display: "flex" }}>
            <Link target="blank" href={props.address}>
              <SkillTitle title="Address" />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
