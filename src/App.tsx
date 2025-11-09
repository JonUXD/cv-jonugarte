import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import CVPage from "./pages/CVPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutMePage from "./pages/AboutMePage";

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* Tabs */}
      <Tabs value={selectedTab} onChange={handleChange} centered>
        <Tab label="CV" />
        <Tab label="Projects" />
        <Tab label="About Me" />
      </Tabs>

      {/* Tab content */}
      <Box sx={{ marginTop: 2 }}>
        {selectedTab === 0 && <CVPage />}
        {selectedTab === 1 && <ProjectsPage />}
        {selectedTab === 2 && <AboutMePage />}
      </Box>
    </Box>
  );
};

export default App;
