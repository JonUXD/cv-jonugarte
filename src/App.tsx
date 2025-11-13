import React, { useState } from "react";
import { Tabs, Tab, Box, useMediaQuery, useTheme } from "@mui/material";
import CVPage from "./pages/CVPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutMePage from "./pages/AboutMePage";

/**
 * Main application component with responsive navigation
 * Adapts tab layout for mobile and desktop screens
 */
const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>
      <Box sx={{ 
        maxWidth: 1200, 
        mx: "auto", 
        px: { xs: 1, sm: 2, md: 3 },
        py: { xs: 1, sm: 2 }
      }}>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          centered={!isMobile}
          variant={isMobile ? "fullWidth" : "standard"}
          textColor="primary"
          indicatorColor="primary"
          sx={{ 
            mb: 2,
            '& .MuiTab-root': {
              fontWeight: 500,
              fontSize: { xs: '0.9rem', sm: '1rem' }
            }
          }}
        >
          <Tab label="CV" />
          <Tab label="Projects" />
          <Tab label="About Me" />
        </Tabs>

        <Box sx={{ mt: { xs: 2, sm: 3, md: 4 } }}>
          {selectedTab === 0 && <CVPage />}
          {selectedTab === 1 && <ProjectsPage />}
          {selectedTab === 2 && <AboutMePage />}
        </Box>
      </Box>
    </Box>
  );
};

export default App;