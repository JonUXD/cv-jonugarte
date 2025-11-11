import React from "react";
import projectsData from "../data/projects.json";
import ReactMarkdown from "react-markdown";
import { Card, CardContent, Typography, Stack, Chip, Box } from "@mui/material";
import type { Project } from "../types";

const projects = projectsData as Project[];

// Helper: convert date string to a number for sorting
const parseDate = (dateStr: string) => {
  const parsed = parseInt(dateStr);
  return isNaN(parsed) ? 0 : parsed;
};

// Group projects by company
const projectsByCompany = projects.reduce((acc, project) => {
  if (!acc[project.company]) acc[project.company] = [];
  acc[project.company].push(project);
  return acc;
}, {} as Record<string, Project[]>);

const ProjectsPage: React.FC = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>

      {Object.entries(projectsByCompany).map(([company, companyProjects]) => (
        <Box key={company} sx={{ marginBottom: 3 }}>
          <Typography variant="h5" sx={{ marginBottom: 1 }}>
            {company}
          </Typography>

          {companyProjects
            .sort((a, b) => parseDate(b.date) - parseDate(a.date)) // newest first
            .map((project) => (
              <Card key={project.title} sx={{ marginBottom: 2 }}>
                <CardContent>
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    {project.date}
                  </Typography>

                  <Box sx={{ marginTop: 1 }}>
                    <ReactMarkdown>{project.description}</ReactMarkdown>
                  </Box>

                  {(project.stack || []).length > 0 && (
                    <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", marginTop: 1 }}>
                      {(project.stack || []).map((tech: string, j: number) => (
                        <Chip key={j} label={tech} size="small" />
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
