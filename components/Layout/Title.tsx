import React from "react";

import { Typography, TypographyProps } from "@mui/material";

const Title: typeof Typography = (props: TypographyProps) => {
  return (
    <Typography
      variant="h1"
      sx={{
        fontFamily: `"AppleSDGothicNeo", "Noto Sans KR", sans-serif`,
        fontSize: { xs: "35px", sm: "50px" },
        fontWeight: "bold",
        marginBottom: { xs: "5px", sm: "0" },
      }}
      {...props}
    />
  );
};

export default Title;
