import React, { memo, useState } from "react";
import { Card, Typography, Box, Collapse, IconButton } from "@mui/material";
import ReactMarkdown from "react-markdown";
import type { ExperienceItem } from "../types";
import { formatDateRange } from '../utils/dateUtils';
import CompanyIcon from "./CompanyIcon";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface ExperienceCardProps {
  experience: ExperienceItem;
  id?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = memo(({ experience, id }) => {
  // Sort roles by date (newest first)
  const sortedRoles = [...experience.roles].sort((a, b) => 
    new Date(b.start_date).getTime() - new Date(a.start_date).getTime()
  );

  const [expandedRoles, setExpandedRoles] = useState<Set<string>>(
    new Set(sortedRoles.map(role => `${role.title}-${role.start_date}`))
  );

  const toggleRoleExpansion = (roleId: string) => {
    setExpandedRoles(prev => {
      const newSet = new Set(prev);
      if (newSet.has(roleId)) {
        newSet.delete(roleId);
      } else {
        newSet.add(roleId);
      }
      return newSet;
    });
  };

  return (
    <Card sx={{ mb: 3 }} elevation={2} id={id}>
      <Box sx={{ p: 2 }}>
        {/* Company Header - UNCHANGED */}
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
          <CompanyIcon companyName={experience.company}/>
          <Typography variant="h5" sx={{ 
            fontWeight: 700,
            color: "text.primary",
          }}>
            {experience.company}
          </Typography>
        </Box>
        
        {/* Company-level date range */}
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {formatDateRange(experience.start_date, experience.end_date)}
        </Typography>

        <Box sx={{ mt: 2 }}>
          {sortedRoles.map((role, index) => (
            <Box 
              key={`${role.title}-${role.start_date}`}
              sx={{ 
                display: 'flex',
                alignItems: 'flex-start',
                mb: 1.5,
                position: 'relative',
                '&:last-child': { mb: 0 }
              }}
            >
              {/* Timeline dot */}
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: sortedRoles.length > 1 ? "primary.main" : "transparent",
                  border: sortedRoles.length > 1 ? `2px solid white` : "none",
                  flexShrink: 0,
                  mt: 0.5,
                  mr: 1.5,
                  position: 'relative',
                  zIndex: 2
                }}
              />

              {/* Timeline line connector */}
              {index < sortedRoles.length - 1 && (
                <Box
                  sx={{
                    position: "absolute",
                    left: 5,
                    top: 20,
                    bottom: -16,
                    width: 2,
                    backgroundColor: "divider",
                    zIndex: 1
                  }}
                />
              )}

              {/* Role Content */}
              <Box>
                {/* Role Header */}
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ 
                      fontWeight: 600,
                      color: "text.primary",
                      marginBottom: 0.5
                    }}>
                      {role.title} {role.department && `| ${role.department}`}
                    </Typography>
                    
                    <Typography variant="subtitle2" color="text.secondary">
                      {role.location.display} • {formatDateRange(role.start_date, role.end_date)}
                    </Typography>
                  </Box>

                  {/* Expand/Collapse Button */}
                  {(role.description || []).length > 0 && (
                    <IconButton 
                      size="small" 
                      onClick={() => toggleRoleExpansion(`${role.title}-${role.start_date}`)}
                      sx={{ ml: 1 }}
                    >
                      {expandedRoles.has(`${role.title}-${role.start_date}`) ? 
                        <ExpandLessIcon /> : 
                        <ExpandMoreIcon />
                      }
                    </IconButton>
                  )}
                </Box>

                {/* Role Description - Collapsible */}
                {(role.description || []).length > 0 && (
                  <Collapse in={expandedRoles.has(`${role.title}-${role.start_date}`)}>
                    <Box component="ul" sx={{ 
                      paddingLeft: 2, 
                      marginTop: 1,
                      marginLeft: 1,
                    }}>
                      {(role.description || []).map((desc, j) => (
                        <li key={j}>
                          <ReactMarkdown components={{ p: ({ children }) => <span>{children}</span> }}>
                            {desc}
                          </ReactMarkdown>
                        </li>
                      ))}
                    </Box>
                  </Collapse>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Card>
  );
});

export default ExperienceCard;