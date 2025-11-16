import React, { memo } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import type { EducationItem } from "../types";
import { formatDateForDisplay } from "../utils/dateUtils";

interface EducationCardProps {
  education: EducationItem;
}

/**
 * EducationCard component displays education information with consistent styling
 * Matches ExperienceCard design for visual consistency across the CV
 * Handles optional thesis and grades content flexibly
 */
const EducationCard: React.FC<EducationCardProps> = memo(({ education }) => {
  return (
    <Card sx={{ mb: 3 }} elevation={2}>
      <CardContent>
        {/* Institution name - styled to match company names in ExperienceCard */}
        <Typography variant="h5" sx={{ 
          fontWeight: 700,
          color: "text.main",
          marginBottom: 1
        }}>
          {education.institution}
        </Typography>
        
        {/* Location and graduation date - matches experience card subtitle styling */}
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {education.location.display} • {formatDateForDisplay(education.graduation_date)}
        </Typography>

        {/* Degree title - styled to match role titles in ExperienceCard */}
        <Typography variant="h6" sx={{ 
          fontWeight: 600,
          color: "text.primary",
          marginBottom: 1
        }}>
          {education.degree}
        </Typography>

        {/* Optional content section for thesis and grades */}
        {/* Uses same list styling as ExperienceCard for consistency */}
            <Box component="ul" sx={{ 
            paddingLeft: 2, 
            marginTop: 1,
            marginLeft: 1,
        }}>
          {/* Display thesis as first bullet point if provided */}
          {education.thesis && (
            <li>
              <ReactMarkdown>
                {`**Thesis:** ${education.thesis}`}
              </ReactMarkdown>
            </li>
          )}
          
          {/* Display grades as additional bullet points if provided */}
          {/* Maps through grades array to show subject-score pairs */}
          {education.description && education.description.map((item, index) => (
            <li key={index}>
                <ReactMarkdown>{item}</ReactMarkdown>
            </li>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
});

export default EducationCard;