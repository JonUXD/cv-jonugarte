import React, { memo } from "react";
import { Card, CardContent, Typography, Stack, Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import type { ExperienceItem, ExperienceRole } from "../types";
import SkillChip from "./SkillChip";

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
        <Typography variant="h5" gutterBottom color="primary.main">
          {experience.company} {experience.department ? `— ${experience.department}` : ""}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {experience.location} • {experience.start_date} – {experience.end_date}
        </Typography>

        {experience.roles.map((role: ExperienceRole, i) => (
          <Box key={i} sx={{ mt: 2, mb: 1 }}>
            <Typography variant="h6" color="text.primary">
              {role.title}
            </Typography>
            {role.start_date && (
              <Typography variant="subtitle2" color="text.secondary">
                {role.start_date} – {role.end_date}
              </Typography>
            )}

            {(role.description || []).length > 0 && (
              <Box component="ul" sx={{ pl: 2, mt: 1 }}>
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