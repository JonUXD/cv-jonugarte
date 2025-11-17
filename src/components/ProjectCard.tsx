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
      case "personal":
        return "Personal Project";
      default:
        return "Project";
    }
  };

  // Get icon based on project type
  const getProjectIcon = (): string => {
    switch (project.projectType) {
      case "personal":
        return "⭐";
      case "academic":
        return "🎓";
      case "company":
      default:
        return "🏢";
    }
  };

  const techStack = project.stack || [];

  const context = getProjectContext();
  const icon = getProjectIcon();
  const displayDate = formatDateForDisplay(project.date);

  return (
    <Card 
      sx={{ 
        height: 280, // Fixed height as requested
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
      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header with Icon, Title, and Context */}
        <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}>
          <Typography variant="h4" sx={{ mr: 1, lineHeight: 1 }}>
            {icon}
          </Typography>
          <Box sx={{ flex: 1 }}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600,
                lineHeight: 1.2,
                mb: 0.5
              }}
            >
              {project.title}
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{ fontSize: "0.8rem" }}
            >
              {context} • {displayDate}
            </Typography>
          </Box>
        </Box>

        {/* Tech Stack Chips */}
        {techStack.length > 0 && (
          <Stack 
            direction="row" 
            spacing={0.5} 
            sx={{ 
              flexWrap: "wrap",
              gap: 0.5,
              mb: 1.5
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
                  height: 24
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
                  height: 24
                }}
              />
            )}
          </Stack>
        )}

        {/* Summary - Fixed height with overflow */}
        <Box sx={{ flex: 1, overflow: "hidden" }}>
          <Typography 
            variant="body2" 
            sx={{ 
              lineHeight: 1.4,
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
            mt: 1.5,
            pt: 1,
            borderTop: 1,
            borderColor: "divider"
          }}
        >
          <Typography 
            variant="button" 
            color="primary"
            sx={{ 
              fontSize: "0.8rem",
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