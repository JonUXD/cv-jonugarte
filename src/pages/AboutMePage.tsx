import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import bioData from "../data/bio.json";
import ReactMarkdown from "react-markdown";
import type { Bio } from "../types";
import LoadingSpinner from "../components/LoadingSpinner";

const bio = bioData as Bio;

/**
 * AboutMePage component displays personal information and interests
 * Implements loading state pattern for consistent user experience
 */
const AboutMePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner message="Loading about me..." />;
  }

  return (
    <Card sx={{ margin: 3 }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>

        {bio.summary && (
          <Box sx={{ marginBottom: 1 }}>
            <ReactMarkdown>{bio.summary}</ReactMarkdown>
          </Box>
        )}

        {(bio.interests || []).length > 0 && (
          <Typography variant="body2">
            <strong>Interests:</strong> {(bio.interests || []).join(", ")}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default AboutMePage;