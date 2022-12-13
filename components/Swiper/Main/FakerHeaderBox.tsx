import React from "react";

import { Box, BoxProps } from "@mui/material";

const FakerHeaderBox = () => {
  return (
    <Box
      component={"div"}
      sx={{
        height: "64px",
        top: "0",
        position: "relative",
        zIndex: "-1000",
        background: "transparent",
      }}
    />
  );
};

export default FakerHeaderBox;
