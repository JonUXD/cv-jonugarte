import React from "react";
import { Box, Typography, Card, CardContent, Stack } from "@mui/material";
import ReactMarkdown from "react-markdown";

import bioData from "../data/bio.json";
import experienceData from "../data/experience.json";
import educationData from "../data/education.json";
import skillsData from "../data/skills.json";

import SkillChip from "../components/SkillChip";

const CVPage: React.FC = () => {
  return (
    <Box sx={{ padding: 3 }}>
      {/* Bio Section */}
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="h4" gutterBottom>
          {bioData.name}
        </Typography>
        <Typography variant="body1">{bioData.summary}</Typography>
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          {bioData.email} ❖ {bioData.phone} ❖ {bioData.location}
        </Typography>
      </Box>

      {/* Work Experience */}
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="h4" gutterBottom>
          Work Experience
        </Typography>
        {experienceData.map((exp: any, idx: number) => (
          <Box key={idx} sx={{ marginBottom: 2 }}>
            <Typography variant="h5" gutterBottom>
              {exp.company} {exp.department ? `- ${exp.department}` : ""}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {exp.start_date} – {exp.end_date} | {exp.location}
            </Typography>

            {/* Roles */}
            {exp.roles.map((role: any, i: number) => (
              <Card key={i} sx={{ marginY: 1 }}>
                <CardContent>
                  <Typography variant="h6">{role.title}</Typography>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    {role.start_date ? `${role.start_date} – ${role.end_date}` : ""}
                  </Typography>

                  {/* Description */}
                  <Box sx={{ marginTop: 1 }}>
                    {role.description.map((desc: string, j: number) => (
                      <ReactMarkdown key={j}>{`- ${desc}`}</ReactMarkdown>
                    ))}
                  </Box>

                  {/* Stack */}
                  {role.stack?.length > 0 && (
                    <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", marginTop: 1 }}>
                      {role.stack.map((tech: string, k: number) => (
                        <SkillChip key={k} label={tech} />
                      ))}
                    </Stack>
                  )}
                </CardContent>
              </Card>
            ))}
          </Box>
        ))}
      </Box>

      {/* Education */}
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="h4" gutterBottom>
          Education
        </Typography>
        {educationData.map((edu: any, idx: number) => (
          <Card key={idx} sx={{ marginBottom: 2 }}>
            <CardContent>
              <Typography variant="h6">
                {edu.degree} — {edu.institution} ({edu.location}, {edu.graduation_date})
              </Typography>
              <Box sx={{ marginTop: 1 }}>
                {edu.thesis && (
                  <Box sx={{ marginBottom: 0.5 }}>
                    <ReactMarkdown>{`**Thesis:** ${edu.thesis}`}</ReactMarkdown>
                  </Box>
                )}
                {edu.grades && (
                  <Box>
                    <ReactMarkdown>{`**Grades:** ${JSON.stringify(edu.grades)}`}</ReactMarkdown>
                  </Box>
                )}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Skills & Technical Skills */}
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="h5" gutterBottom>
          Skills & Technical Skills
        </Typography>
        {skillsData.skills.map((category: any, idx: number) => (
          <Box key={idx} sx={{ marginBottom: 1 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 0.5 }}>
              {category.category}:
            </Typography>
            <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
              {category.items.map((item: string, i: number) => (
                <SkillChip key={i} label={item} />
              ))}
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CVPage;
