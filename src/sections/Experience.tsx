import React from "react";
import experienceData from "../data/experience.json";
import ReactMarkdown from "react-markdown";
import { Card, CardContent, Typography, Box, List, ListItem } from "@mui/material";

const Experience: React.FC = () => (
  <div>
    <Typography variant="h4" gutterBottom sx={{ marginBottom: 2 }}>
      Work Experience
    </Typography>

    {experienceData.map((company: any, i: number) => (
      <Card key={i} sx={{ marginBottom: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {company.company} {company.department ? `— ${company.department}` : ""} ({company.location})
          </Typography>

          {company.roles.map((role: any, j: number) => (
            <Box key={j} sx={{ marginLeft: 2, marginBottom: 2 }}>
              <Typography variant="h6">
                {role.title} ({role.start_date} – {role.end_date})
              </Typography>

              <List dense>
                {role.description.map((resp: string, k: number) => (
                  <ListItem key={k} sx={{ display: "list-item", paddingLeft: 2 }}>
                    <ReactMarkdown>{resp}</ReactMarkdown>
                  </ListItem>
                ))}
              </List>

              {role.projects && role.projects.length > 0 && (
                <Box sx={{ marginLeft: 3, marginTop: 1 }}>
                  <Typography variant="subtitle1">Projects:</Typography>
                  <List dense>
                    {role.projects.map((proj: any, pIdx: number) => (
                      <ListItem key={pIdx} sx={{ display: "list-item", paddingLeft: 2 }}>
                        <ReactMarkdown>{proj.title}</ReactMarkdown>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}
            </Box>
          ))}
        </CardContent>
      </Card>
    ))}
  </div>
);

export default Experience;
