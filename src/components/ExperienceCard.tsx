import React, { memo } from "react";
import { Card, CardContent, Typography, Stack, Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import type { ExperienceItem, ExperienceRole } from "../types";
import SkillChip from "./SkillChip";
import { formatDateRange, formatDateForDisplay } from '../utils/dateUtils';

interface ExperienceCardProps {
  experience: ExperienceItem;
}

/**
 * ExperienceCard component displays work experience with consistent styling
 * Uses primary color for company names and skill chips
 */
const ExperienceCard: React.FC<ExperienceCardProps> = memo(({ experience }) => {
  return (
    <Card sx={{ mb: 3 }} elevation={2}>
      <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
        <Typography variant="h5" sx={{ 
        fontWeight: 700,
        color: "primary.main",
        marginBottom: 1
        }}>
              {experience.company}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {experience.location.display} • {formatDateRange(experience.start_date, experience.end_date)}
        </Typography>

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