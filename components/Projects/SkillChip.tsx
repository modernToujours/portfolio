import React from "react";

import { Chip } from "@mui/material";

const SkillChip = ({ skill }: { skill: string }) => {
  return (
    <Chip key={skill} label={skill} sx={{ padding: "4px", margin: "3px" }} />
  );
};

export default SkillChip;
