import React from "react";
import { Card, CardContent, Typography, Box, Stack, Chip } from "@mui/material";
import type { Project } from "../types";
import { formatDateForDisplay } from "../utils/dateUtils";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Get display context based on project type
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

  // Get icon path based on project type and available icons
  const getProjectIcon = (): string => {
    // If project has specific icon, use it
    if (project.icon) {
      return project.icon;
    }
    
    // Fallback to default icons based on project type
    switch (project.projectType) {
      case "personal":
        return "/src/assets/icons/default-personal.svg";
      case "academic":
        return "/src/assets/icons/default-academic.svg";
      case "company":
      default:
        return "/src/assets/icons/default-company.svg";
    }
  };

  const techStack = project.stack || [];
  const context = getProjectContext();
  const displayDate = formatDateForDisplay(project.date);
  const iconSrc = getProjectIcon();

  return (
    <Card 
      sx={{ 
        height: 280,
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
      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", p: 2 }}>
        {/* Header with Icon, Title, and Context */}
        <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1.5 }}>
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
          <Box sx={{ mb: 2 }}>
            <Stack 
              direction="row" 
              spacing={0.5} 
              sx={{ 
                flexWrap: "wrap",
                gap: 0.5,
              }}
            >
              {techStack.slice(0, 4).map((tech, index) => (
                <Chip 
                  key={index}
                  label={tech}
                  size="small"
                  color="primary"
                  variant="outlined"
                  sx={{ 
                    fontSize: "0.7rem",
                    height: 22
                  }}
                />
              ))}
              {techStack.length > 4 && (
                <Chip 
                  label={`+${techStack.length - 4}`}
                  size="small"
                  color="secondary"
                  sx={{ 
                    fontSize: "0.7rem",
                    height: 22
                  }}
                />
              )}
            </Stack>
          </Box>
        )}

        {/* Summary - Fixed height with overflow */}
        <Box sx={{ flex: 1, overflow: "hidden", mb: 1 }}>
          <Typography 
            variant="body2" 
            sx={{ 
              lineHeight: 1.4,
              fontSize: "0.875rem",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden"
            }}
          >
            {project.summary}
          </Typography>
        </Box>

        {/* View Details Button */}
        <Box 
          sx={{ 
            pt: 1,
            borderTop: 1,
            borderColor: "divider"
          }}
        >
          <Typography 
            variant="button" 
            color="primary"
            sx={{ 
              fontSize: "0.75rem",
              fontWeight: 600
            }}
          >
            View Details →
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;