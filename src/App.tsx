import React, { useState } from "react";
import { Tabs, Tab, Box, useMediaQuery, useTheme, Fade } from "@mui/material";
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
          <Fade in={selectedTab === 0} timeout={400} unmountOnExit>
            <div>{selectedTab === 0 && <CVPage />}</div>
          </Fade>
          <Fade in={selectedTab === 1} timeout={400} unmountOnExit>
            <div>{selectedTab === 1 && <ProjectsPage />}</div>
          </Fade>
          <Fade in={selectedTab === 2} timeout={400} unmountOnExit>
            <div>{selectedTab === 2 && <AboutMePage />}</div>
          </Fade>
        </Box>
      </Box>
    </Box>
  );
};

export default App;