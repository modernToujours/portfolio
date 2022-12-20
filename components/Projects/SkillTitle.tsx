import React from "react";

import { Box } from "@mui/material";

import Text from "../Layout/Text";

const SkillTitle = ({ title }: { title: string }) => {
  return (
    <Box
      component={"div"}
      sx={{
        minWidth: { xs: "65px", sm: "100px" },
        textAlign: "left",
        padding: { xs: "3px", sm: "6px" },
      }}
    >
      <Text sx={{ fontSize: { xs: "0.7rem", sm: "1rem" }, fontWeight: "bold" }}>
        {title}
      </Text>
    </Box>
  );
};

export default SkillTitle;
