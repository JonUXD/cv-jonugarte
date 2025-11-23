import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import bioData from "../data/bio.json";
import ReactMarkdown from "react-markdown";
import type { Bio } from "../types";
import LoadingSpinner from "../components/LoadingSpinner";

const bio = bioData as Bio;

/**
 * AboutMePage component displays personal information and interests
 * Uses consistent color theme with primary cyan for headings
 */
const AboutMePage: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ 
        marginBottom: 4,
        fontWeight: 700,
        color: "text.primary",
        borderBottom: "2px solid",
        borderColor: "primary.main",
        paddingBottom: 1
      }}>
        About Me
      </Typography>

      <Card sx={{ margin: 3 }}>
        <CardContent>
          {bio.summary && (
            <Box sx={{ marginBottom: 2 }}>
              <ReactMarkdown>{bio.summary}</ReactMarkdown>
            </Box>
          )}

          {(bio.interests || []).length > 0 && (
            <Box>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Interests
              </Typography>
              <Typography variant="body1">
                {(bio.interests || []).join(", ")}
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
   </Box>
  );
};

export default AboutMePage;