import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import projectsData from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";
import LoadingSpinner from "../components/LoadingSpinner";
import type { Project } from "../types";

const ProjectsPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const projects = projectsData as Project[];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner message="Loading projects..." />;
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ 
          color: "text.primary",
          mb: 4
        }}
      >
        Projects
      </Typography>

      {/* Projects Grid */}
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid 
            key={index} 
            size={{ xs: 12, sm: 6, md: 4 }} // 1 col mobile, 2 tablet, 3 desktop
          >
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>

      {/* Empty State */}
      {projects.length === 0 && (
        <Box sx={{ textAlign: "center", py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            No projects found
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ProjectsPage;