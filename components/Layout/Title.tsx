import { Typography } from "@mui/material";
import { TypographyProps } from "@mui/system";
import React from "react";

const Title: typeof Typography = (props: TypographyProps) => {
  return (
    <Typography
      variant="h1"
      sx={{
        fontFamily: `"AppleSDGothicNeo", "Noto Sans KR", sans-serif`,
        fontSize: "50px",
        fontWeight: "bold",
        marginBottom: { xs: "10px", sm: "0" },
      }}
      {...props}
    />
  );
};

export default Title;
