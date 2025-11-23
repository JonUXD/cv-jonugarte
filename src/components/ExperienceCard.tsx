import React, { memo } from "react";
import { Card, CardContent, Typography, Stack, Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import type { ExperienceItem, ExperienceRole } from "../types";
import SkillChip from "./SkillChip";
import { formatDateRange } from '../utils/dateUtils';
import CompanyIcon from "./CompanyIcon";

interface ExperienceCardProps {
  experience: ExperienceItem;
  id?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = memo(({ experience, id }) => {
  return (
    <Card sx={{ mb: 3 }} elevation={2} id={id}>
      <CardContent>
        {/* Company Header */}
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
          <CompanyIcon companyName={experience.company}/>
          <Typography variant="h5" sx={{ 
            fontWeight: 700,
            color: "text.primary",
          }}>
            {experience.company}
          </Typography>
        </Box>
        
        {/* Company-level date range */}
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {formatDateRange(experience.start_date, experience.end_date)}
        </Typography>

        {/* Roles */}
        {experience.roles.map((role: ExperienceRole, i) => (
          <Box key={i} sx={{ marginTop: 2, marginBottom: 1 }}>
            {/* Role title with location */}
            <Typography variant="h6" sx={{ 
              fontWeight: 600,
              color: "text.primary",
              marginBottom: 0.5
            }}>
              {role.title} {" | "} {role.department}
            </Typography>
            
            {/* Role-specific location and dates */}
            <Typography variant="subtitle2" color="text.secondary">
              {role.location.display} • {formatDateRange(role.start_date, role.end_date)}
            </Typography>

            {/* Description */}
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

            {/* Tech stack */}
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