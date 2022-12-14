import React from "react";

import { Box } from "@mui/material";

import Title from "../Layout/Title";

const ProjectTitle = ({ name }: { name: string }) => {
  return (
    <Box component={"div"} sx={{ height: "50px" }}>
      <Title
        sx={{
          fontSize: { xs: "1.1rem", sm: "2rem" },
          fontWeight: "bold",
        }}
      >
        {name}
      </Title>
    </Box>
  );
};

export default ProjectTitle;
