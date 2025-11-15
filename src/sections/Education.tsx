import React from "react";
import educationData from "../data/education.json";
import ReactMarkdown from "react-markdown";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { formatDateRange, formatDateForDisplay } from '../utils/dateUtils';

const Education: React.FC = () => (
  <div>
    <Typography variant="h4" gutterBottom sx={{ marginBottom: 2 }}>
      Education
    </Typography>

    {educationData.map((edu: any, i: number) => (
      <Card key={i} sx={{ marginBottom: 3 }}>
        <CardContent>
          <Typography variant="h5">
            {edu.degree} — {edu.institution} ({edu.location}, {formatDateForDisplay(edu.graduation_date)})
          </Typography>

          <Box sx={{ marginTop: 1 }}>
            {edu.thesis && (
              <Box sx={{ marginBottom: 0.5 }}>
                <ReactMarkdown>{`**Thesis:** ${edu.thesis}`}</ReactMarkdown>
              </Box>
            )}

            {edu.grades && (
              <Box>
                <ReactMarkdown>{`**Grades:** ${JSON.stringify(edu.grades)}`}</ReactMarkdown>
              </Box>
            )}
          </Box>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default Education;
