import React, { memo } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import type { EducationItem } from "../types";
import { formatDateForDisplay } from "../utils/dateUtils";
import CompanyIcon from "./CompanyIcon"; // ← Add this import

interface EducationCardProps {
  education: EducationItem;
  id?: string
}

const EducationCard: React.FC<EducationCardProps> = memo(({ education }) => {
  return (
    <Card sx={{ mb: 3 }} elevation={2}>
      <CardContent>
        {/* Updated Institution Header with Icon */}
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
          <CompanyIcon companyName={education.institution}/>
          <Typography variant="h5" sx={{ 
            fontWeight: 700,
            color: "text.primary",
          }}>
            {education.institution}
          </Typography>
        </Box>
        
        {/* Rest of your existing code remains the same */}
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {education.location.display} • {formatDateForDisplay(education.graduation_date)}
        </Typography>

        <Typography variant="h6" sx={{ 
          fontWeight: 600,
          color: "text.primary",
          marginBottom: 1
        }}>
          {education.degree}
        </Typography>

        <Box component="ul" sx={{ 
          paddingLeft: 2, 
          marginTop: 1,
          marginLeft: 1,
        }}>
          {education.thesis && (
            <li>
              <ReactMarkdown>
                {`**Thesis:** ${education.thesis}`}
              </ReactMarkdown>
            </li>
          )}
          
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