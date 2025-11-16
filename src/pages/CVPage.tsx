import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import ReactMarkdown from "react-markdown";

import bioData from "../data/bio.json";
import experienceData from "../data/experience.json";
import educationData from "../data/education.json";
import skillsRaw from "../data/skills.json";

import SkillChip from "../components/SkillChip";
import ExperienceCard from "../components/ExperienceCard";
import LoadingSpinner from "../components/LoadingSpinner";
import Skills from "../sections/Skills";
import EducationCard from "../components/EducationCard";

import { formatDateForDisplay } from "../utils/dateUtils"

// Types
import type { Bio, ExperienceData, EducationData, SkillsData, EducationItem } from "../types";

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
      {/* Bio Section */}
      <Box sx={{ marginBottom: 6 }}>
        <Typography variant="h4" gutterBottom color="text.primary">
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
        <Typography variant="body2" color="text.secondary">
          {bio.email} ❖ {bio.phone} ❖ {bio.location.display}
        </Typography>
      </Box>

      {/* Main Content Grid */}
      <Grid container spacing={4}>
        {/* Left Column - Experience & Education */}
        <Grid size={{ xs: 12, md: 8 }}>
          {/* Work Experience */}
          <Box sx={{ marginBottom: 6 }}>
            <Typography variant="h4" sx={{ 
              marginBottom: 4,
              fontWeight: 700,
              color: "text.primary",
              borderBottom: "2px solid",
              borderColor: "primary.main",
              paddingBottom: 1
            }}>
              Work Experience
            </Typography>
            {experience.map((exp, idx) => (
              <ExperienceCard key={idx} experience={exp} />
            ))}
          </Box>

          {/* Education */}
          <Box sx={{ marginBottom: 6 }}>
            <Typography variant="h4" sx={{ 
              marginBottom: 4,
              fontWeight: 700,
              color: "text.primary",
              borderBottom: "2px solid",
              borderColor: "primary.main",
              paddingBottom: 1
            }}>
              Education
            </Typography>
            {education.map((edu: EducationItem, idx) => (
              <EducationCard key={idx} education={edu} />
            ))}
          </Box>
        </Grid>

        {/* Right Column - Skills Sidebar */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ 
            top: { md: 20 },
            marginBottom: 4
          }}>
            <Typography variant="h4" sx={{ 
              marginBottom: 3,
              fontWeight: 700,
              color: "text.primary",
              borderBottom: "2px solid",
              borderColor: "primary.main",
              paddingBottom: 1
            }}>
              Skills
            </Typography>
            <Skills />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CVPage;