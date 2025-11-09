import React from "react";
import { Chip } from "@mui/material";

interface SkillChipProps {
  label: string;
}

const SkillChip: React.FC<SkillChipProps> = ({ label }) => {
  return <Chip label={label} size="small" color="primary" />;
};

export default SkillChip;
