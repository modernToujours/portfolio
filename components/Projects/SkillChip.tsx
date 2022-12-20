import React from "react";

import { Chip } from "@mui/material";

const SkillChip = ({ skill }: { skill: string }) => {
  return (
    <Chip
      key={skill}
      label={skill}
      size="small"
      sx={{
        padding: { xs: "0px", sm: "4px" },
        height: { xs: "16px", sm: "32px" },
        margin: { xs: "0px", sm: "3px" },
      }}
    />
  );
};

export default SkillChip;
