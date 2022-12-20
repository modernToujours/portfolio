import React from "react";

import { Box, BoxProps } from "@mui/material";

const ContactTitleBox = (props: BoxProps) => {
  return (
    <Box
      component={"div"}
      sx={{ width: { xs: "50px", sm: "80px" }, textAlign: "left" }}
      {...props}
    />
  );
};

export default ContactTitleBox;
