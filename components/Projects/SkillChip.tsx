import { Chip } from "@mui/material";
import React from "react";

const SkillChip = ({ skill }: { skill: string }) => {
  return (
    <Chip key={skill} label={skill} sx={{ padding: "4px", margin: "3px" }} />
  );
};

export default SkillChip;
