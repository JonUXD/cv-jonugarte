import React from "react";
import projectsData from "../data/projects.json";
import ReactMarkdown from "react-markdown";
import { Card, CardContent, Typography, Stack, Chip, Box } from "@mui/material";

const ProjectsPage: React.FC = () => (
  <Box sx={{ padding: 2 }}>
    <Typography variant="h4" gutterBottom>
      Projects
    </Typography>

    {projectsData.map((project, i) => (
      <Card key={i} sx={{ marginBottom: 2 }}>
        <CardContent>
          <Typography variant="h5">{project.title}</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {project.company}
          </Typography>

          <Box sx={{ marginTop: 1 }}>
            <ReactMarkdown>{project.description}</ReactMarkdown>
          </Box>

          {project.stack?.length > 0 && (
            <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", marginTop: 1 }}>
              {project.stack.map((tech: string, j: number) => (
                <Chip key={j} label={tech} size="small" />
              ))}
            </Stack>
          )}
        </CardContent>
      </Card>
    ))}
  </Box>
);

export default ProjectsPage;
