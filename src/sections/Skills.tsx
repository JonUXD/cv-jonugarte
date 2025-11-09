import React from "react";
import skillsData from "../data/skills.json";
import { Box, Typography, Chip, Stack } from "@mui/material";

const Skills: React.FC = () => (
  <Box sx={{ margin: 3 }}>
    <Typography variant="h5" gutterBottom>
      Skills & Technical Skills
    </Typography>

    {skillsData.skills.map((category: any, idx: number) => (
      <Box key={idx} sx={{ marginBottom: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 0.5 }}>
          {category.category}:
        </Typography>
        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
          {category.items.map((item: string, i: number) => (
            <Chip key={i} label={item} size="small" />
          ))}
        </Stack>
      </Box>
    ))}
  </Box>
);

export default Skills;
