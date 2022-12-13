import React from "react";

import { Box, BoxProps } from "@mui/material";

const ProfileBox = (props: BoxProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "row" },
      }}
      {...props}
      component={"div"}
    />
  );
};

export default ProfileBox;
