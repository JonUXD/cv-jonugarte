import React from "react";
import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";
import bioData from "../data/bio.json";
import bio from "../types"

const Bio: React.FC = () => (
  <Card sx={{ marginBottom: 3 }}>
    <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      {/* Optional profile picture */}
      {bioData.photo && <Avatar alt={bioData.name} src={bioData.photo} sx={{ width: 80, height: 80 }} />}

      <Box>
        <Typography variant="h5" component="h2" gutterBottom>
          {bioData.name}
        </Typography>
        <Typography variant="body1">
          {bioData.email} ❖ {bioData.phone} ❖ {bioData.location}
        </Typography>
        {bioData.summary && (
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            {bioData.summary}
          </Typography>
        )}
      </Box>
    </CardContent>
  </Card>
);

export default Bio;
