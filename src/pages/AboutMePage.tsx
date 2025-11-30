import React from "react";
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Grid,
  Chip,
  Stack 
} from "@mui/material";
import bioData from "../data/bio.json";
import ReactMarkdown from "react-markdown";
import type { Bio } from "../types";

import ContactForm from '../components/ContactForm';
import ProfileHeader from "../components/ProfileHeader";
import VisualInterests from "../components/VisualInterests";
import LocationsMap from "../components/LocationsMap";

// Simple icon mapping for interests
const interestIcons: Record<string, string> = {
  "Surfing": "🏄‍♂️",
  "Swimming": "🏊‍♂️", 
  "Retro Games": "🎮",
  "Movies": "🎬",
  "Electric Guitar": "🎸"
};

const bio = bioData as Bio;

/**
 * AboutMePage component with consistent section styling
 */
const AboutMePage: React.FC = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ mb: 3 }}>
      <ProfileHeader/>
      </Box>
      <Grid container spacing={4}>
        {/* Main Content Column */}
        <Grid size={{ xs: 12, md: 8 }}>
          {/* Professional Summary Section */}
          <Box sx={{ marginBottom: 6 }}>
            <Typography variant="h4" sx={{ 
              marginBottom: 4,
              fontWeight: 700,
              color: "text.primary",
              borderBottom: "2px solid",
              borderColor: "primary.main",
              paddingBottom: 1
            }}>
              About me
            </Typography>
            
            <Card sx={{ mb: 3 }} elevation={2}>
              <CardContent>
                {bio.summary_long && (
                  <ReactMarkdown
                    components={{
                      p: ({ children }) => (
                        <Typography variant="body1" sx={{ marginBottom: 2, lineHeight: 1.6 }}>
                          {children}
                        </Typography>
                      ),
                    }}
                  >
                    {bio.summary_long}
                  </ReactMarkdown>
                )}
              </CardContent>
            </Card>
          </Box>
        </Grid>
        {/* Sidebar Column */}
        <Grid size={{ xs: 12, md: 4 }}>
          {/* Contact Section */}
          <ContactForm />
        </Grid>
        {/* Added negative space as the gap was too big in the grid */}
        <Grid size={{ xs: 12, md: 12}} sx={{ mt: -2, mb: -12 }}> 
          <VisualInterests />
          <LocationsMap />
        </Grid>

      </Grid>
    </Box>
  );
};

export default AboutMePage;