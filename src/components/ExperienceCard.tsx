import React from "react";
import { Card, CardContent, Typography, Stack, Box, Chip } from "@mui/material";
import ReactMarkdown from "react-markdown";
import type { ExperienceItem, ExperienceRole } from "../types";
import SkillChip from "./SkillChip";

interface ExperienceCardProps {
  experience: ExperienceItem;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <Card sx={{ mb: 3, p: 1 }} elevation={3}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {experience.company} {experience.department ? `— ${experience.department}` : ""} ({experience.location})
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {experience.start_date} – {experience.end_date}
        </Typography>

        {experience.roles.map((role: ExperienceRole, i) => (
          <Box key={i} sx={{ mt: 2, mb: 1 }}>
            <Typography variant="h6">{role.title}</Typography>
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
              <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", mt: 1 }}>
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
};

export default ExperienceCard;
