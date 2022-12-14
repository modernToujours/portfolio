import React from "react";

import { Typography, TypographyProps } from "@mui/material";

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
