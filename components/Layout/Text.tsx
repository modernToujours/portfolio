import React from "react";

import { Typography, TypographyProps } from "@mui/material";

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
