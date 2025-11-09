import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import bioData from "../data/bio.json";
import ReactMarkdown from "react-markdown";

const AboutMePage: React.FC = () => (
  <Card sx={{ margin: 3 }}>
    <CardContent>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>

      {bioData.summary && (
        <Box sx={{ marginBottom: 1 }}>
          <ReactMarkdown>{bioData.summary}</ReactMarkdown>
        </Box>
      )}

      {bioData.interests?.length > 0 && (
        <Typography variant="body2">
          <strong>Interests:</strong> {bioData.interests.join(", ")}
        </Typography>
      )}
    </CardContent>
  </Card>
);

export default AboutMePage;
