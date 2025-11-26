import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import AddchartIcon from '@mui/icons-material/Addchart';
import BuildIcon from '@mui/icons-material/Build';

const techItems = [
  { name: "AWS", icon: <CloudIcon fontSize="small" /> },
  { name: "Python", icon: <CodeIcon fontSize="small" /> },
  { name: "Quicksight", icon: <AddchartIcon fontSize="small" /> },
  { name: "PowerBI", icon: <AddchartIcon fontSize="small" /> },
  { name: "SQL", icon: <CodeIcon fontSize="small" /> },
  { name: "SQL Server", icon: <StorageIcon fontSize="small" /> },
  { name: "R", icon: <CodeIcon fontSize="small" /> },
  { name: "Redshift", icon: <StorageIcon fontSize="small" /> },
  { name: "RDS", icon: <StorageIcon fontSize="small" /> },
  { name: "AWS CDK", icon: <CodeIcon fontSize="small" /> },
  { name: "Typescript", icon: <CodeIcon fontSize="small" /> },
];

const TechStack: React.FC = () => {
return (
        <Card sx={{ marginBottom: 3 }}>
            <CardContent>
                <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: 1
                }}>
                {techItems.map((item, index) => (
                    <Box key={index} sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1 
                    }}>
                    {item.icon || <BuildIcon fontSize="small" />}
                    <Typography variant="body2">{item.name}</Typography>
                    </Box>
                ))}
                </Box>  
            </CardContent>
        </Card>
    );
};

export default TechStack;