import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ReactMarkdown from "react-markdown";

import bioData from "../data/bio.json";
import experienceData from "../data/experience.json";
import educationData from "../data/education.json";

import ExperienceCard from "../components/ExperienceCard";
import Skills from "../sections/Skills";
import EducationCard from "../components/EducationCard";
import CareerTimeline from '../components/CareerTimeline';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Types
import type { Bio, ExperienceData, EducationData, EducationItem } from "../types";

const CVPage: React.FC = () => {

  // Type assertions
  const bio: Bio = bioData;
  const experience: ExperienceData = experienceData as ExperienceData;
  const education: EducationData = educationData;

  return (
    <Box sx={{ padding: 3 }}>
      {/* Bio Section */}
        {/* Bio Section - Updated Layout */}
      <Box sx={{ marginBottom: 6 }}>
        {/* Flex container for name + contact info */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          flexDirection: { xs: 'column', sm: 'row' },
          marginBottom: 2 
        }}>
          {/* Name on the left */}
          <Typography variant="h4" gutterBottom sx={{ mb: 0, mr: 2 }}>
            {bio.name}
          </Typography>
          
          {/* Contact icons */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            {/* Email icon/link */}
            {bio.email && (
              <a href={`mailto:${bio.email}`}>
                <EmailIcon sx={{ color: 'text.secondary', fontSize: 24 }} />
              </a>
            )}
            
            {/* GitHub icon/link */}
            {bio.github && (
              <a href={bio.github} target="_blank" rel="noopener noreferrer">
                <GitHubIcon sx={{ color: 'text.secondary', fontSize: 24 }} />
              </a>
            )}
            
            {/* LinkedIn icon/link */}
            {bio.linkedin && (
              <a href={bio.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon sx={{ color: 'text.secondary', fontSize: 24 }} />
              </a>
            )}
          </Box>  
        </Box>

        {/* Summary stays below, full width */}
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
      </Box>

      {/* Main Content Grid */}
      <Grid container spacing={4}>
        {/* Left Column - Experience & Education */}
        <Grid size={{ xs: 12, md: 8 }} >
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
            {experience.map((exp) => (
              exp.roles.map((role) => (
                <ExperienceCard 
                  key={`${exp.company}-${role.title}`}
                  experience={{ ...exp, roles: [role] }} // Pass single role
                  id={`${exp.company}-${role.title}-${role.start_date}`}
                />
              ))
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
              <EducationCard 
                key={idx} 
                education={edu} 
                id={`${edu.institution}-${edu.degree}`}
              />
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
          <Box sx={{ marginTop: 4 }}>
            <Typography variant="h5" sx={{ 
              marginBottom: 3,
              fontWeight: 600,
              color: "text.primary",
              borderBottom: "1px solid",
              borderColor: "primary.main",
              paddingBottom: 1
            }}>
              Career Timeline
            </Typography>
            <CareerTimeline />
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
};

export default CVPage;