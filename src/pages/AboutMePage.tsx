import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import bioData from "../data/bio.json";
import ReactMarkdown from "react-markdown";
import type { Bio } from "../types";

const bio = bioData as Bio;

const AboutMePage: React.FC = () => (
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

export default AboutMePage;
