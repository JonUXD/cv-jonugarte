import React from 'react';
import { Box } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';

// Import all company SVGs
import amazonIcon from '../assets/icons/companies/amazon.svg';
import datasiteIcon from '../assets/icons/companies/datasite.svg';
import ubsIcon from '../assets/icons/companies/ubs.svg';
import bildutruckIcon from '../assets/icons/companies/bildutruck.svg';
import lsbuIcon from '../assets/icons/companies/london-south-bank-university.svg';
import upvIcon from '../assets/icons/companies/university-of-the-basque-country.svg';

interface CompanyIconProps {
  companyName: string;
  size?: number;
}

const CompanyIcon: React.FC<CompanyIconProps> = ({ companyName, size = 36 }) => {
  // Map company names to imported SVGs
  const iconMap: Record<string, string> = {
    Amazon: amazonIcon,
    Datasite: datasiteIcon,
    'UBS Investment Bank': ubsIcon,
    Bildutruck: bildutruckIcon,
    'London South Bank University': lsbuIcon,
    'University of the Basque Country': upvIcon,
  };

  const iconSrc = iconMap[companyName];

  // Default fallback icons if no SVG is found
  if (!iconSrc) {
    const isEducation =
      companyName.includes('University') || companyName.includes('School');
    return isEducation ? (
      <SchoolIcon sx={{ fontSize: size, color: 'success.main', mr: 1.5 }} />
    ) : (
      <BusinessCenterIcon
        sx={{ fontSize: size, color: 'primary.main', mr: 1.5 }}
      />
    );
  }

  // Render SVG icon
  return (
    <Box
      component="img"
      src={iconSrc}
      alt={`${companyName} logo`}
      sx={{
        height: size,
        width: size, // Ensures square layout
        objectFit: 'contain', // Fits icon nicely
        mr: 1.5,
        borderRadius: 1,
        flexShrink: 0,
      }}
    />
  );
};

export default CompanyIcon;
