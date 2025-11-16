import React from "react";
import skillsData from "../data/skills.json";
import { Box, Typography, Chip, Stack, useTheme, useMediaQuery } from "@mui/material";

/**
 * Skills component displays technical and professional skills
 * Color-coded chips with cyan for technical skills and yellow for soft skills
 */
const Skills: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ margin: { xs: 2, sm: 3 } }}>

      {skillsData.skills.map((category: any, idx: number) => (
        <Box key={idx} sx={{ marginBottom: 2 }}>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              fontWeight: "bold", 
              marginBottom: 1,
              fontSize: { xs: '0.9rem', sm: '1rem' }
            }}
          >
            {category.category}:
          </Typography>
          <Stack 
            direction="row" 
            spacing={1} 
            sx={{ 
              flexWrap: "wrap",
              gap: 1,
              '& .MuiChip-root': {
                fontSize: { xs: '0.7rem', sm: '0.8125rem' },
                height: { xs: 24, sm: 32 }
              }
            }}
          >
            {category.items.map((item: string, i: number) => (
              <Chip 
                key={i} 
                label={item} 
                size="small" 
                color={
                  category.category === "Technical Skills" 
                    ? "primary"
                    : "secondary"
                }
              />
            ))}
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default Skills;