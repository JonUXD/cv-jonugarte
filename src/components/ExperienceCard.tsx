import React, { memo } from "react";
import { Card, CardContent, Typography, Stack, Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import type { ExperienceItem, ExperienceRole } from "../types";
import SkillChip from "./SkillChip";
import { formatDateRange, formatDateForDisplay } from '../utils/dateUtils';
import CompanyIcon from "./CompanyIcon"; // ← Add this import

interface ExperienceCardProps {
  experience: ExperienceItem;
}

const ExperienceCard: React.FC<ExperienceCardProps> = memo(({ experience }) => {
  return (
    <Card sx={{ mb: 3 }} elevation={2}>
      <CardContent>
        {/* Updated Company Header with Icon */}
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
          <CompanyIcon companyName={experience.company} size={24} />
          <Typography variant="h5" sx={{ 
            fontWeight: 700,
            color: "text.primary",
          }}>
            {experience.company}
          </Typography>
        </Box>
        
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {experience.location.display} • {formatDateRange(experience.start_date, experience.end_date)}
        </Typography>

        {/* Rest of your existing code remains the same */}
        {experience.roles.map((role: ExperienceRole, i) => (
          <Box key={i} sx={{ marginTop: 2, marginBottom: 1 }}>
            <Typography variant="h6" sx={{ 
              fontWeight: 600,
              color: "text.primary",
              marginBottom: 0.5
            }}>
              {role.title} {" | "} {role.department}
            </Typography>
            {role.start_date && (
              <Typography variant="subtitle2" color="text.secondary">
                {formatDateRange(role.start_date, role.end_date)}
              </Typography>
            )}

            {(role.description || []).length > 0 && (
              <Box component="ul" sx={{ 
                paddingLeft: 2, 
                marginTop: 1,
                marginLeft: 1,
              }}>
                {(role.description || []).map((desc, j) => (
                  <li key={j}>
                    <ReactMarkdown components={{ p: ({ children }) => <span>{children}</span> }}>
                      {desc}
                    </ReactMarkdown>
                  </li>
                ))}
              </Box>
            )}

            {(role.stack || []).length > 0 && (
              <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", mt: 1, gap: 0.5 }}>
                {(role.stack || []).map((tech, k) => (
                  <SkillChip key={k} label={tech} />
                ))}
              </Stack>
            )}
          </Box>
        ))}
      </CardContent>
    </Card>
  );
});

export default ExperienceCard;