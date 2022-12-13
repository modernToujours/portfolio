import React from "react";

import { Box, BoxProps } from "@mui/material";

const TitleBox = (props: BoxProps) => {
  return (
    <Box
      sx={{
        maxWidth: { xs: "300px", sm: "700px" },
        wordBreak: "keep-all",
      }}
      {...props}
      component={"div"}
    />
  );
};

export default TitleBox;
