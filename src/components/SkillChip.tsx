import React, { memo } from "react";
import { Chip, type ChipProps } from "@mui/material";

/**
 * Reusable chip component for displaying skills and technologies
 * Extends Material-UI Chip with required label and sensible defaults
 * Memoized to prevent unnecessary re-renders
 */
interface SkillChipProps extends Omit<ChipProps, 'label'> {
  label: string;
}

const SkillChip: React.FC<SkillChipProps> = memo(({ 
  label, 
  size = 'small',
  color = 'primary',
  ...props 
}) => {
  return (
    <Chip 
      label={label} 
      size={size}
      color={color}
      sx={{ color: "text.primary" }}
      {...props}
    />
  );
});

export default SkillChip;