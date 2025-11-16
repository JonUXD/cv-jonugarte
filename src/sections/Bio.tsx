import React from "react";
import { Card, CardContent, Typography, Box, Avatar, useTheme, useMediaQuery } from "@mui/material";
import bioData from "../data/bio.json";
import type { Bio } from "../types";

/**
 * Bio component displays personal information and profile summary
 * Uses primary color for the name and clean, professional styling
 */
const Bio: React.FC = () => {
  const bio = bioData as Bio;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Card sx={{ marginBottom: 3 }}>
      <CardContent sx={{ 
        display: "flex", 
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "flex-start", sm: "center" },
        gap: 2,
        textAlign: { xs: "center", sm: "left" }
      }}>
        {bio.photo && (
          <Avatar 
            alt={bio.name} 
            src={bio.photo} 
            sx={{ 
              width: { xs: 60, sm: 80 }, 
              height: { xs: 60, sm: 80 },
              mx: { xs: "auto", sm: "0" }
            }} 
          />
        )}

        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" component="h2" gutterBottom color="text.primary">
            {bio.name}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            {bio.email} ❖ {bio.phone} ❖ {bio.location.display}
          </Typography>
          {bio.summary && (
            <Typography variant="body2" sx={{ marginTop: 1, fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
              {bio.summary}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Bio;