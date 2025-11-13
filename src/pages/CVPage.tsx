import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import ReactMarkdown from "react-markdown";

import bioData from "../data/bio.json";
import experienceData from "../data/experience.json";
import educationData from "../data/education.json";
import skillsRaw from "../data/skills.json";

import SkillChip from "../components/SkillChip";
import ExperienceCard from "../components/ExperienceCard";
import LoadingSpinner from "../components/LoadingSpinner";
import Skills from "../sections/Skills";

// Types
import type { Bio, ExperienceData, EducationData, SkillsData, EducationItem, Grade } from "../types";

const CVPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate async data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Type assertions
  const bio: Bio = bioData;
  const experience: ExperienceData = experienceData as ExperienceData;
  const education: EducationData = educationData;
  const skillsData: SkillsData = skillsRaw;

  if (isLoading) {
    return <LoadingSpinner message="Loading CV..." />;
  }

  return (
    <Box sx={{ padding: 3 }}>
      {/* Bio Section - Manual implementation with cyan color */}
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="h4" gutterBottom color="primary.main">
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
            <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
              <Typography variant="h6" sx={{ lineHeight: 1.3 }}>
                {edu.degree} — {edu.institution}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {edu.location}, {edu.graduation_date}
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
      <Box sx={{ mb: 3 }}>
        <Skills />
      </Box>
    </Box>
  );
};

export default CVPage;