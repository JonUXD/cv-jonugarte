import React from "react";
import projectsData from "../data/projects.json";

const ProjectsPreview: React.FC = () => (
  <div>
    {projectsData.map((p: any, i: number) => (
      <div key={i} style={{ marginBottom: "15px" }}>
        <strong>{p.title}</strong> — {p.company} ({p.date})
        <p>{p.description}</p>
      </div>
    ))}
  </div>
);

export default ProjectsPreview;
