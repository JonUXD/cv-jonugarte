import React, { useState, useEffect } from "react";
import projectsData from "../data/projects.json";
import ReactMarkdown from "react-markdown";
import { Card, CardContent, Typography, Stack, Chip, Box } from "@mui/material";
import type { Project } from "../types";
import LoadingSpinner from "../components/LoadingSpinner";
import { formatDateForDisplay } from '../utils/dateUtils';

const projects = projectsData as Project[];

// Group projects by company
const projectsByCompany = projects.reduce((acc, project) => {
  if (!acc[project.company]) acc[project.company] = [];
  acc[project.company].push(project);
  return acc;
}, {} as Record<string, Project[]>);

/**
 * ProjectsPage component displays portfolio projects with consistent styling
 */
const ProjectsPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

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
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ color: "primary.main" }}>
        Projects
      </Typography>

      {Object.entries(projectsByCompany).map(([company, companyProjects]) => (
        <Box key={company} sx={{ marginBottom: 4 }}>
          <Typography 
            variant="h5" 
            sx={{ 
              marginBottom: 2,
              color: "text.primary",
              borderBottom: "1px solid",
              borderColor: "divider",
              paddingBottom: 1
            }}
          >
            {company}
          </Typography>

          {companyProjects
            .sort((a, b) => b.date.localeCompare(a.date))
            .map((project) => (
              <Card key={project.title} sx={{ marginBottom: 3 }}>
                <CardContent>
                  <Typography variant="h6" color="text.secondary">
                    {project.title}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    {formatDateForDisplay(project.date)}
                  </Typography>

                  <Box sx={{ marginTop: 1 }}>
                    <ReactMarkdown>{project.description}</ReactMarkdown>
                  </Box>

                  {(project.stack || []).length > 0 && (
                    <Stack 
                      direction="row" 
                      spacing={1} 
                      sx={{ 
                        flexWrap: "wrap", 
                        marginTop: 2,
                        gap: 1 
                      }}
                    >
                      {(project.stack || []).map((tech: string, j: number) => (
                        <Chip 
                          key={j} 
                          label={tech} 
                          size="small" 
                          color="primary"
                        />
                      ))}
                    </Stack>
                  )}
                </CardContent>
              </Card>
            ))}
        </Box>
      ))}
    </Box>
  );
};

export default ProjectsPage;