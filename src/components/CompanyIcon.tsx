import React from 'react';
import { Box } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';

interface CompanyIconProps {
  companyName: string;
  size?: number;
}

const CompanyIcon: React.FC<CompanyIconProps> = ({ companyName, size = 24 }) => {
  const iconMap: Record<string, string> = {
    'Amazon': '/src/assets/icons/companies/amazon.svg',
    'Datasite': '/src/assets/icons/companies/datasite.svg',
    'UBS Investment Bank': '/src/assets/icons/companies/ubs.svg',
    'Bildutruck': '/src/assets/icons/companies/bildutruck.svg',
    'London South Bank University': '/src/assets/icons/companies/london-south-bank-university.svg',
    'University of the Basque Country': '/src/assets/icons/companies/university-of-the-basque-country.svg',
  };

  const iconSrc = iconMap[companyName];
  
  if (!iconSrc) {
    const isEducation = companyName.includes('University') || companyName.includes('School');
    return isEducation ? (
      <SchoolIcon sx={{ fontSize: size, color: 'success.main', mr: 1.5 }} />
    ) : (
      <BusinessCenterIcon sx={{ fontSize: size, color: 'primary.main', mr: 1.5 }} />
    );
  }

  return (
    <Box
      component="img"
      src={iconSrc}
      alt={`${companyName} logo`}
      sx={{
        height: size,
        width: 'auto',
        mr: 1.5,
      }}
    />
  );
};

export default CompanyIcon;