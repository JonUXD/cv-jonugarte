import React, { useState, useEffect, useMemo } from "react";
import { 
  Box, 
  Typography, 
  Grid, 
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Chip,
  Stack,
  Button
} from "@mui/material";
import projectsData from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";
import LoadingSpinner from "../components/LoadingSpinner";
import type { Project } from "../types";

// Define our filter state type
interface FilterState {
  projectTypes: string[];
  technologies: string[];
  companies: string[];
}

const ProjectsPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<FilterState>({
    projectTypes: [],
    technologies: [], 
    companies: []
  });

  // Extract unique values for filters
  const filterOptions = useMemo(() => {
    const projects = projectsData as Project[];
    
    const allCompanies = projects
      .map(p => p.company)
      .filter(Boolean)
      .filter((company, index, array) => array.indexOf(company) === index);

    const allTechnologies = Array.from(
      new Set(projects.flatMap(p => p.stack || []))
    ).sort();

    const allProjectTypes = Array.from(
      new Set(projects.map(p => p.projectType))
    );

    return {
      companies: allCompanies,
      technologies: allTechnologies,
      projectTypes: allProjectTypes
    };
  }, []);

  // === ADD THIS SECTION ===
  // Calculate how many projects match each filter option
  const filterCounts = useMemo(() => {
    const projects = projectsData as Project[];
    
    const companyCounts: Record<string, number> = {};
    const technologyCounts: Record<string, number> = {};
    const projectTypeCounts: Record<string, number> = {};

    // Count projects for each company
    filterOptions.companies.forEach(company => {
      companyCounts[company as string] = projects.filter(p => p.company === company).length;
    });

    // Count projects for each technology
    filterOptions.technologies.forEach(tech => {
      technologyCounts[tech] = projects.filter(p => p.stack?.includes(tech)).length;
    });

    // Count projects for each project type
    filterOptions.projectTypes.forEach(type => {
      projectTypeCounts[type] = projects.filter(p => p.projectType === type).length;
    });

    return {
      companies: companyCounts,
      technologies: technologyCounts,
      projectTypes: projectTypeCounts
    };
  }, [filterOptions]);

  // Helper function to format the label with count
  const getLabelWithCount = (type: keyof typeof filterCounts, value: string | undefined) => {
    if (!value) return '';
    const count = filterCounts[type][value];
    
    // Only capitalize for project types
    const displayName = type === 'projectTypes' 
      ? value.charAt(0).toUpperCase() + value.slice(1)
      : value;
    
    return `${displayName} (${count})`;
  };

  // Filter projects based on current filters
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = [...projectsData as Project[]];
    
    // Filter by project type
    if (filters.projectTypes.length > 0) {
      filtered = filtered.filter(project => 
        filters.projectTypes.includes(project.projectType)
      );
    }
    
    // Filter by technology
    if (filters.technologies.length > 0) {
      filtered = filtered.filter(project => 
        filters.technologies.some(tech => 
          project.stack?.includes(tech)
        )
      );
    }
    
    // Filter by company
    if (filters.companies.length > 0) {
      filtered = filtered.filter(project => 
        filters.companies.includes(project.company || '')
      );
    }
    
    // Sort by date (newest first)
    return filtered.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [filters]);

  // Handle dropdown changes
  const handleFilterChange = (filterType: keyof FilterState) => (event: any) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: event.target.value
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      projectTypes: [],
      technologies: [],
      companies: []
    });
  };

  const hasActiveFilters = filters.projectTypes.length > 0 || 
                          filters.technologies.length > 0 || 
                          filters.companies.length > 0;

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
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ 
        marginBottom: 2,
        fontWeight: 700,
        color: "text.primary",
        borderBottom: "2px solid",
        borderColor: "primary.main",
        paddingBottom: 1
      }}>
        Projects
      </Typography>

      {/* Filter Bar */}
      <Box sx={{ mb: 2, p: 2, borderColor: 'divider' }}>
        <Stack direction="row" spacing={2} alignItems="flex-start" flexWrap="wrap">
          {/* Project Type Dropdown */}
          <FormControl sx={{ minWidth: 180 }} size="small">
            <InputLabel>Project Type</InputLabel>
            <Select
              multiple
              value={filters.projectTypes}
              onChange={handleFilterChange('projectTypes')}
              input={<OutlinedInput label="Project Type" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip 
                      key={value} 
                      label={value.charAt(0).toUpperCase() + value.slice(1)} 
                      size="small" 
                    />
                  ))}
                </Box>
              )}
            >
              {/* UPDATE THIS MENU ITEM */}
              {filterOptions.projectTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {getLabelWithCount('projectTypes', type)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Technology Dropdown */}
          <FormControl sx={{ minWidth: 180 }} size="small">
            <InputLabel>Technologies</InputLabel>
            <Select
              multiple
              value={filters.technologies}
              onChange={handleFilterChange('technologies')}
              input={<OutlinedInput label="Technologies" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} size="small" />
                  ))}
                </Box>
              )}
            >
              {/* UPDATE THIS MENU ITEM */}
              {filterOptions.technologies.map((tech) => (
                <MenuItem key={tech} value={tech}>
                  {getLabelWithCount('technologies', tech)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Company Dropdown */}
          <FormControl sx={{ minWidth: 180 }} size="small">
            <InputLabel>Companies</InputLabel>
            <Select
              multiple
              value={filters.companies}
              onChange={handleFilterChange('companies')}
              input={<OutlinedInput label="Companies" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} size="small" />
                  ))}
                </Box>
              )}
            >

          {filterOptions.companies.map((company) => (
            <MenuItem key={company} value={company}>
              {getLabelWithCount('companies', company as string)}
            </MenuItem>
          ))}
            </Select>
          </FormControl>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <Button 
              onClick={clearAllFilters}
              variant="outlined"
              sx={{ alignSelf: 'center' }}
            >
              Clear All
            </Button>
          )}
        </Stack>
      </Box>

      {/* Projects Grid */}
      <Grid container spacing={3}>
        {filteredAndSortedProjects.map((project, index) => (
          <Grid 
            key={index} 
            size={{ xs: 12, sm: 6, md: 4 }}
          >
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>

      {/* No Results State */}
      {filteredAndSortedProjects.length === 0 && (
        <Box sx={{ textAlign: "center", py: 8 }}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            No projects match your filters
          </Typography>
          {hasActiveFilters && (
            <Button 
              onClick={clearAllFilters}
              variant="outlined"
              sx={{ mt: 1 }}
            >
              Clear all filters
            </Button>
          )}
        </Box>
      )}
    </Box>
  );
};

export default ProjectsPage;