import React from "react";
import { Box, Typography } from "@mui/material";

import surfPhoto from "../assets/photos/profile-interests-surf.jpg";
import paddleSurfPhoto from "../assets/photos/profile-interests-paddlesurf.jpg";
import retroGamesPhoto from "../assets/photos/profile-interests-retro-games.png";
import guitarPhoto from "../assets/photos/profile-interests-guitar.png";
import moviesPhoto from "../assets/photos/profile-interests-movies.png";
import videographyPhoto from "../assets/photos/profile-interests-videography.png";

const visualInterests = [
  { image: surfPhoto, label: "Surfing", alt: "Surfing in Basque Country" },
  { image: paddleSurfPhoto, label: "Paddle Surf", alt: "Stand up paddle at sunrise in Barcelona" },
  { image: retroGamesPhoto, label: "Retro Games", alt: "Retro gaming collage" },
  { image: guitarPhoto, label: "Guitar", alt: "Playing guitar" },
  { image: moviesPhoto, label: "Movies", alt: "Favorite movies collage" },
  { image: videographyPhoto, label: "Videography", alt: "Video editing and filming" },
];

const VisualInterests: React.FC = () => {
  return (
    <Box sx={{ marginBottom: 6 }}>
      <Typography 
        variant="h4" 
        sx={{ 
          marginBottom: 4,
          fontWeight: 700,
          color: "text.primary",
          borderBottom: "2px solid",
          borderColor: "primary.main",
          paddingBottom: 1
        }}
      >
        When I am not working
      </Typography>
      
            <Box
        sx={{
          display: "flex",
          gap: 3,
          overflowX: "auto",
          py: 2,
        }}
      >
                {visualInterests.map((interest, index) => (
          <Box key={index} sx={{ textAlign: "center", flexShrink: 0 }}>
            <Box
              component="img"
              src={interest.image}
              alt={interest.alt}
              sx={{
                width: 200,
                height: 200,
                objectFit: "cover",
                borderRadius: 1,
                boxShadow: 1,
                mb: 1,
              }}
            />
            <Typography variant="body1" color="text.primary">
              {interest.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default VisualInterests;

