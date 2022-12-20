import React from "react";
import Text from "../Layout/Text";
import { TypographyProps } from "@mui/material";

const ProjectDetail = (props: TypographyProps) => {
  return (
    <Text
      sx={{
        fontFamily: `"AppleSDGothicNeo", "Noto Sans KR", sans-serif`,
        fontWeight: "bold",
        fontSize: { xs: "6px", sm: "1rem" },
      }}
      {...props}
    />
  );
};

export default ProjectDetail;
