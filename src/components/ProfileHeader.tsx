import React from "react";
import { Box, Avatar, Typography, Button, Stack, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import profilePhoto from "../assets/photos/profile-photo.jpeg";
import bioData from "../data/bio.json";

import type { Bio } from "../types";

/**
 * ProfileHeader Component - Hero section for the About Me page
 * Features profile photo on left, content on right
 */

const ProfileHeader: React.FC = () => {
  const bio: Bio = bioData;
  return (
    <Box
      sx={{ padding: 3 }}
    >
      <Grid container spacing={2} alignItems="center">
        {/* Photo Column - Left */}
        <Grid size={{ xs: 12, md: 3 }} sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Avatar
            src={profilePhoto}
            alt="Professional headshot of Jon Ugarte in Iceland"
            sx={{
              width: { xs: 120, sm: 160, md: 200 },
              height: { xs: 120, sm: 160, md: 200 },
              border: "4px solid",
              borderColor: "primary.main",
              mx: { xs: "auto", md: 0 },
            }}
          />
        </Grid>

        {/* Content Column - Right */}
        <Grid size={{ xs: 12, md: 9 }}>
          {/* Main Headline */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "text.primary",
              lineHeight: 1.2,
              mb: 2,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Business Intelligence & Data Engineer
          </Typography>

          {/* Mission Statement */}
          <Typography
            variant="body1"
            sx={{
              color: "text.primary",
              lineHeight: 1.6,
              mb: 2,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {bio.summary_profile_header}
          </Typography>

          {/* Call-to-Action Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ 
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "center",
            }}
          >
            <Button
              component={Link}
              to="/cv"
              variant="outlined"
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  fontWeight: 600,
                  borderRadius: 1,
                  py: 1,
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  }
                }}
            >
              See My CV
            </Button>
            <Button
              component={Link}
              to="/projects"
              variant="contained"
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  fontWeight: 600,
                  borderRadius: 1,
                  py: 1,
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  }
                }}
            >
              View My Work
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileHeader;