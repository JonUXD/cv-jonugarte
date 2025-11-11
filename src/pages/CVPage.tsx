import React from "react";
import { Box, Typography, Card, CardContent, Stack } from "@mui/material";
import ReactMarkdown from "react-markdown";

import bioData from "../data/bio.json";
import experienceData from "../data/experience.json";
import educationData from "../data/education.json";
import skillsRaw from "../data/skills.json";

import SkillChip from "../components/SkillChip";

import ExperienceCard from "../components/ExperienceCard";

// Types
import type { SkillCategory, SkillsData } from "../types";
import type { ExperienceData, ExperienceRole } from "../types";
import type { EducationData, EducationItem, Grade } from "../types";
import type { Bio } from "../types";

// Cast JSON data to proper types
const bio: Bio = bioData;
const experience: ExperienceData = experienceData;
const education: EducationData = educationData;
const skillsData: SkillsData = skillsRaw;

const CVPage: React.FC = () => {
  return (
    <Box sx={{ padding: 3 }}>
      {/* Bio Section */}
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="h4" gutterBottom>
          {bio.name}
        </Typography>
        {bio.summary && (
          <Box sx={{ marginBottom: 1 }}>
            <ReactMarkdown
              components={{
                p: ({ children }) => (
                  <Typography variant="body1" sx={{ marginBottom: 1 }}>
                    {children}
                  </Typography>
                ),
              }}
            >
              {bio.summary}
            </ReactMarkdown>
          </Box>
        )}
        <Typography variant="body2">
          {bio.email} ❖ {bio.phone} ❖ {bio.location}
        </Typography>
      </Box>

      {/* Work Experience */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Work Experience
        </Typography>

        {experience.map((exp, idx) => (
          <ExperienceCard key={idx} experience={exp} />
        ))}
      </Box>

      {/* Education */}
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="h4" gutterBottom>
          Education
        </Typography>
        {education.map((edu: EducationItem, idx) => (
          <Card key={idx} sx={{ marginBottom: 2 }}>
            <CardContent>
              <Typography variant="h6">
                {edu.degree} — {edu.institution} ({edu.location}, {edu.graduation_date})
              </Typography>
              <Box sx={{ marginTop: 1 }}>
                {edu.thesis && (
                  <Box sx={{ marginBottom: 0.5 }}>
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => (
                          <Typography variant="body2" sx={{ marginBottom: 0.5 }}>
                            {children}
                          </Typography>
                        ),
                      }}
                    >
                      {`**Thesis:** ${edu.thesis}`}
                    </ReactMarkdown>
                  </Box>
                )}
                {(edu.grades || []).length > 0 && (
                  <Box>
                    {(edu.grades || []).map((grade: Grade, g) => (
                      <Typography key={g} variant="body2">
                        <strong>{grade.subject}:</strong> {grade.score}
                      </Typography>
                    ))}
                  </Box>
                )}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Skills & Technical Skills */}
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="h5" gutterBottom>
          Skills & Technical Skills
        </Typography>
        {skillsData.skills.map((category: SkillCategory, idx: number) => (
          <Stack key={idx} direction="row" spacing={1} sx={{ flexWrap: "wrap", marginBottom: 1 }}>
            {category.items.map((item, i) => (
              <SkillChip key={i} label={item} />
            ))}
          </Stack>
        ))}
      </Box>
    </Box>
  );
};

export default CVPage;
