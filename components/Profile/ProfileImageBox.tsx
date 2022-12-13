import React from "react";

import { Box, BoxProps } from "@mui/material";

const ProfileImageBox = (props: BoxProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        margin: { xs: "0 auto", sm: "20px auto" },
        height: { xs: "270px", sm: "450px" },
        textAlign: "center",
        alignItems: "center",
        flex: "1",
        padding: "0 5px",
      }}
      {...props}
      component={"div"}
    />
  );
};

export default ProfileImageBox;
