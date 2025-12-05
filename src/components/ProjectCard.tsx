import React, { useState } from "react";
import { Card, CardContent, Typography, Box, Stack, Chip, Button } from "@mui/material";
import type { Project } from "../types";
import { formatDateForDisplay } from "../utils/dateUtils";

import amazonIcon from "../assets/icons/companies/amazon.svg";
import datasiteIcon from "../assets/icons/companies/datasite.svg";

import defaultCompanyIcon from "../assets/icons/other/company-default.svg";
import defaultAcademiaIcon from "../assets/icons/other/academia-default.svg";
import defaultPersonalIcon from "../assets/icons/other/personal-default.svg";

import SkillChip from "../components/SkillChip";


interface ProjectCardProps {
  project: Project;
}

const companyIcons: Record<string, string> = {
  Amazon: amazonIcon,
  Datasite: datasiteIcon,
  // add more companies as needed
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const getProjectContext = (): string => {
    switch (project.projectType) {
      case "company":
        return project.company || "Company Project";
      case "academic":
        return "Academic Project";
      case "personal":
        return "Personal Project";
      default:
        return "Project";
    }
  };

    const getProjectIcon = (): string => {
    // Check if this is a company project with a known company icon
    if (project.projectType === "company" && project.company && companyIcons[project.company]) {
        return companyIcons[project.company];
    }

    // Fallbacks based on project type
    switch (project.projectType) {
        case "personal":
        return defaultPersonalIcon;
        case "academic":
        return defaultAcademiaIcon;
        case "company":
        default:
        return defaultCompanyIcon;
    }
    };

  const techStack = project.stack || [];
  const highlights = project.highlights || [];
  const context = getProjectContext();
  const displayDate = formatDateForDisplay(project.date);
  const iconSrc = getProjectIcon();

  // Check if content needs expansion
  const needsExpand = highlights.length > 2;

  return (
    <Card 
      sx={{ 
        height: isExpanded ? 'auto' : 230,
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: 3,
        }
      }}
    >
      <CardContent sx={{ 
        flex: 1, 
        display: "flex", 
        flexDirection: "column", 
        p: 2,
        position: 'relative' // ← SIMPLE FIX: Add this
      }}>
        {/* Header with Icon, Title, and Context */}
        <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}>
          <Box
            component="img"
            src={iconSrc}
            alt={`${context} icon`}
            sx={{
              width: 32,
              height: 32,
              mr: 1.5,
              borderRadius: 1,
              flexShrink: 0,
            }}
          />
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600,
                lineHeight: 1.2,
                mb: 0.5,
                fontSize: "1rem"
              }}
              noWrap
            >
              {project.title}
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{ fontSize: "0.75rem" }}
            >
              {context} • {displayDate}
            </Typography>
          </Box>
        </Box>

        {/* Tech Stack Chips */}
        {techStack.length > 0 && (
          <Box sx={{ mb: 1 }}>
            <Stack 
              direction="row" 
              spacing={0.5} 
              sx={{ 
                flexWrap: "wrap",
                gap: 0.5,
              }}
            >
              {techStack.slice(0, 4).map((tech, index) => (
                <SkillChip 
                  key={index}
                  label={tech}
                  size="small"
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Stack>
          </Box>
        )}

        {/* Project Summary */}
        <Box sx={{ mb: 1 }}>
          <Typography 
            variant="body2" 
            sx={{ 
              lineHeight: 1.4,
              fontSize: "0.8rem",
              display: "-webkit-box",
              WebkitLineClamp: isExpanded ? 'none' : 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden"
            }}
          >
            {project.summary}
          </Typography>
        </Box>

        {/* Key Highlights - SIMPLIFIED */}
        {highlights.length > 0 && (
          <Box sx={{ mb: 1 }}>
            <Box sx={{ 
              maxHeight: isExpanded ? 'none' : 60,
              overflow: 'hidden'
            }}>
              {highlights.slice(0, isExpanded ? highlights.length : 2).map((highlight, index) => (
                <Typography 
                  key={index}
                  variant="caption" 
                  sx={{ 
                    lineHeight: 1.3,
                    mb: 0.25,
                    display: '-webkit-box',
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  • {highlight}
                </Typography>
              ))}
            </Box>
          </Box>
        )}

        {/* PROJECT LINKS */}
        {project.links && Object.keys(project.links).length > 0 && (
          <Box sx={{ mb: 1 }}>
            {Object.entries(project.links).map(([linkType, url]) => {
              if (!url) return null;
              
              const labelMap: Record<string, string> = {
                tool: 'View Tool',
                github: 'GitHub'
              };
              
              const label = labelMap[linkType];
              if (!label) return null;
              
              return (
                <Typography
                  key={linkType}
                  component="a"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e: React.MouseEvent) => e.stopPropagation()}
                  variant="caption"
                  fontWeight="bold"
                  sx={{
                    color: 'text.primary',
                    textDecoration: 'none',
                    display: 'inline-block',
                    mr: 2,
                    cursor: 'pointer',
                    '&:hover': {
                      textDecoration: 'underline',
                      textDecorationThickness: '2px',
                      textUnderlineOffset: '3px'
                    }
                  }}
                >
                  {label}
                </Typography>
              );
            })}
          </Box>
        )}
        
        {/* Show More Button - SIMPLE POSITIONING */}
        {needsExpand && !isExpanded && (
          <Typography 
            variant="caption" 
            color="primary"
            sx={{ 
              fontWeight: 600,
              cursor: 'pointer',
              display: 'block',
              textAlign: 'center',
              position: 'absolute',
              bottom: 8,
              left: 16,
              right: 16,
              backgroundColor: 'background.paper',
              py: 0.5
            }}
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(true);
            }}
          >
            + Show more
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;