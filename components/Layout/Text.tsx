import { Typography, TypographyProps } from "@mui/material";
import React from "react";

const Text = (props: TypographyProps) => {
  return (
    <Typography
      sx={{
        fontFamily: `"AppleSDGothicNeo", "Noto Sans KR", sans-serif`,
        fontWeight: "bold",
      }}
      {...props}
    />
  );
};

export default Text;
