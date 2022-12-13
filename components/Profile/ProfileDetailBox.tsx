import React from "react";

import { Box, BoxProps } from "@mui/system";

const ProfileDetailBox = (props: BoxProps) => {
  return (
    <Box
      sx={{
        flex: "2",
        display: "flex",
        margin: { xs: "0 auto", sm: "20px auto" },
        minHeight: "100%",
        textAlign: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "0 5px",
      }}
      {...props}
      component={"div"}
    />
  );
};

export default ProfileDetailBox;
