import React from 'react';
import {
  Typography,
  Box,
  Paper,
  useTheme
} from '@mui/material';
import experienceData from '../data/experience.json';
import educationData from '../data/education.json';
import CompanyIcon from './CompanyIcon';
import { formatDateRange, formatDateForDisplay } from '../utils/dateUtils';
import type { ExperienceItem, EducationItem } from '../types';

interface TimelineEvent {
  id: string;
  date: string;
  endDate: string | null;
  title: string;
  subtitle: string;
  type: 'work' | 'education';
  company?: string;
  institution?: string;
}

const CareerTimeline: React.FC = () => {
  const theme = useTheme();
  const events: TimelineEvent[] = [];

  // Add work experience events (flatten roles)
  (experienceData as ExperienceItem[]).forEach((exp: ExperienceItem) => {
    exp.roles.forEach(role => {
      events.push({
        id: `${exp.company}-${role.title}-${role.start_date}`,
        date: role.start_date,
        endDate: role.end_date,
        title: role.title,
        subtitle: exp.company,
        type: 'work',
        company: exp.company
      });
    });
  });

  // Add education events
  (educationData as EducationItem[]).forEach((edu: EducationItem) => {
    events.push({
      id: `${edu.institution}-${edu.degree}`,
      date: edu.graduation_date,
      endDate: edu.graduation_date,
      title: edu.degree,
      subtitle: edu.institution,
      type: 'education',
      institution: edu.institution
    });
  });

  // Sort by date (newest first)
  const sortedEvents = events.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const handleItemClick = (event: TimelineEvent) => {
    const element = document.getElementById(event.id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
      
      element.style.backgroundColor = theme.palette.primary.light + '20';
      setTimeout(() => {
        element.style.backgroundColor = '';
      }, 2000);
    }
  };

  return (
    <Box>
      {sortedEvents.map((event, index) => (
        <Box
          key={event.id}
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            mb: 1.5,
            position: 'relative',
            '&:last-child': {
              mb: 0
            }
          }}
        >
          {/* Timeline dot */}
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: event.type === 'work' 
                ? theme.palette.primary.main 
                : theme.palette.success.main,
              border: `2px solid ${theme.palette.background.paper}`,
              flexShrink: 0,
              mt: 0.5,
              mr: 1.5
            }}
          />

          {/* Timeline line connector */}
          {index < sortedEvents.length - 1 && (
            <Box
              sx={{
                position: 'absolute',
                left: 5,
                top: 20,
                bottom: -16,
                width: 2,
                backgroundColor: theme.palette.divider,
                zIndex: 1
              }}
            />
          )}

          {/* Content */}
          <Paper
            elevation={0}
            sx={{
              flex: 1,
              p: 1,
              cursor: 'pointer',
              transition: 'all 0.2s ease-in-out',
              border: `1px solid ${theme.palette.divider}`,
              backgroundColor: 'background.paper',
              '&:hover': {
                borderColor: event.type === 'work' 
                  ? theme.palette.primary.main + '40' 
                  : theme.palette.success.main + '40',
                boxShadow: 1,
              }
            }}
            onClick={() => handleItemClick(event)}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
              <CompanyIcon 
                companyName={event.company || event.institution || ''} 
                size={16}
              />
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  sx={{
                    color: "text.primary",
                    lineHeight: 1.2,
                    mb: 0.25,
                    display: 'block'
                  }}
                >
                  {event.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ 
                    lineHeight: 1.2, 
                    display: 'block',
                  }}
                  noWrap
                >
                  {event.subtitle}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {event.type === 'work' 
                    ? formatDateRange(event.date, event.endDate)
                    : formatDateForDisplay(event.date)
                  }
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      ))}
    </Box>
  );
};

export default CareerTimeline;