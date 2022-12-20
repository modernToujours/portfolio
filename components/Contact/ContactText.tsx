import { Typography, TypographyProps } from "@mui/material";
import React from "react";

const ContactText = (props: TypographyProps) => {
  return (
    <Typography
      sx={{
        fontFamily: `"AppleSDGothicNeo", "Noto Sans KR", sans-serif`,
        fontWeight: "bold",
        fontSize: { xs: "0.6rem", sm: "1rem" },
      }}
      {...props}
    />
  );
};

export default ContactText;
