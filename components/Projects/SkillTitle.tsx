import { Box } from "@mui/material";
import React from "react";
import Text from "../Layout/Text";

const SkillTitle = ({ title }: { title: string }) => {
  return (
    <Box
      component={"div"}
      sx={{ width: "100px", textAlign: "left", padding: "6px" }}
    >
      <Text>{title}</Text>
    </Box>
  );
};

export default SkillTitle;
