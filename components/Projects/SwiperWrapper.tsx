import React from "react";

import { Box, BoxProps } from "@mui/material";

const SwiperWrapper = (props: BoxProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        margin: { xs: "20px 20px", sm: "40px 20px" },
        textAlign: "center",
        alignItems: "center",
        flex: "1",
        maxWidth: "80vw",
        padding: "0 5px",
        flexDirection: "column",
      }}
      {...props}
      component={"div"}
    />
  );
};

export default SwiperWrapper;
