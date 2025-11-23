import React from "react";
import { Tabs, Tab, Box, useMediaQuery, useTheme } from "@mui/material";
import CVPage from "./pages/CVPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutMePage from "./pages/AboutMePage";
import { Routes, Route } from 'react-router-dom';
import { Link, useLocation, Navigate } from 'react-router-dom';

/**
 * Main application component with responsive navigation
 * Adapts tab layout for mobile and desktop screens
 */
const App: React.FC = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const getTabValue = (path: string) => {
    if (path === '/projects') return 1;
    if (path === '/about') return 2;
    return 0; // Default to Home/CV
  };

  const selectedTab = getTabValue(location.pathname);

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
          <Tab label="CV" component={Link} to="/" />
          <Tab label="Projects" component={Link} to="/projects" />
          <Tab label="About Me" component={Link} to="/about" />
        </Tabs>

        <Box sx={{ mt: { xs: 2, sm: 3, md: 4 } }}>
          <Routes>
            <Route path="/" element={<Navigate to="/cv" replace />} />
            <Route path="/cv" element={<CVPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutMePage />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default App;