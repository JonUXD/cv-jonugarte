import React from "react";
import skillsData from "../data/skills.json";
import { Box, Typography, Chip, Stack, Card, CardContent } from "@mui/material";

const Skills: React.FC = () => {
  return (
    <Card sx={{ marginBottom: 3 }}>
      <CardContent>
        {skillsData.skills.map((category: any, idx: number) => (
          <Box key={idx} sx={{ marginBottom: 3 }}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600, 
                marginBottom: 2,
                color: "text.primary"
              }}
            >
              {category.category}
            </Typography>
            <Stack 
              direction="row" 
              spacing={1} 
              sx={{ 
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              {category.items.map((item: string, i: number) => (
                <Chip 
                  key={i} 
                  label={item} 
                  size="small" 
                  variant="outlined"
                  color={category.category === "Technical Skills" ? "primary" : "secondary"}
                  sx={{
                    fontWeight: 500,
                    borderRadius: 1.5,
                    borderWidth: 1.5,
                    color: 'text.primary', // This should make the text black
                  }}
                />
              ))}
            </Stack>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default Skills;