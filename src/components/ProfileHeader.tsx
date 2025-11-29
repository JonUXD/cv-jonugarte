import React from "react";
import { Box, Avatar, Typography, Button, Stack, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import profilePhoto from "../assets/photos/profile-photo.jpeg";

/**
 * ProfileHeader Component - Hero section for the About Me page
 * Features profile photo on left, content on right
 */
const ProfileHeader: React.FC = () => {
  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 4, sm: 6 },
      }}
    >
      <Grid container spacing={2} alignItems="center">
        {/* Photo Column - Left */}
        <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: { xs: "center", md: "left" } }}>
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
        <Grid size={{ xs: 12, md: 8 }}>
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
            BI & Data Engineer | Navigating Complex Data Landscapes
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
            I build robust, cloud-native data infrastructure on AWS. I thrive on turning messy data challenges into elegant, reliable systems that teams can count on.
          </Typography>

          {/* Proof Point */}
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontStyle: "italic",
              fontWeight: 500,
              mb: 3,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            ...with a track record of delivering multi-million dollar operational savings.
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
              to="/projects"
              variant="contained"
              color="primary"
              size="large"
            >
              View My Work
            </Button>
            <Button
              component={Link}
              to="/cv"
              variant="outlined"
              color="secondary"
              size="large"
            >
              See My CV
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileHeader;