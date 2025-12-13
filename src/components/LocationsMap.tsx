import React from "react";
import { Box, Typography } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import experienceData from "../data/experience.json";
import educationData from "../data/education.json";
import type { ExperienceItem, EducationItem } from "../types";

import L from 'leaflet';
import { divIcon } from 'leaflet';


// Fixing leaflet icon not found error by using html market
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({ iconRetinaUrl: '', iconUrl: '', shadowUrl: '' });

// Create a simple dot marker with your theme color
const customIcon = divIcon({
  html: `<div style="background:#05DBDB; border:2px solid white; border-radius:50%; width:24px; height:24px; box-shadow:0 2px 4px rgba(0,0,0,0.2)"></div>`,
  className: ''
});

interface LocationMapProps {
    mapHeight?: number;
}

const getLocations = () => {
  const locations: Array<{
    position: [number, number];
    title: string;
    type: 'work' | 'education';
    company: string;
    role?: string;
  }> = [];

    // Add work locations from roles
    (experienceData as ExperienceItem[]).forEach(exp => {
        exp.roles.forEach(role => {
        if (role.location?.coordinates) {
            locations.push({
            position: [role.location.coordinates.lat, role.location.coordinates.lng],
            title: exp.company,
            type: 'work',
            company: exp.company,
            role: role.title
            });
        }
        });
    });

    // Add education locations  
    (educationData as EducationItem[]).forEach(edu => {
    if (edu.location?.coordinates) {
        locations.push({
        position: [edu.location.coordinates.lat, edu.location.coordinates.lng],
        title: edu.institution,
        type: 'education', 
        company: edu.institution
        });
    }
    });

  return locations;
};

const LocationsMap: React.FC<LocationMapProps> = ({
    mapHeight =  400
}) => {
  return (
    <Box sx={{ marginBottom: 6 }}>
      <Typography variant="h4" sx={{ 
        marginBottom: 4,
        fontWeight: 700,
        color: "text.primary",
        borderBottom: "2px solid",
        borderColor: "primary.main", 
        paddingBottom: 1
      }}>
        Where I've Worked & Studied
      </Typography>
      
      <Box sx={{ height: mapHeight, borderRadius: 2, overflow: 'hidden' }}>
        <MapContainer 
        center={[48.8566, 2.3522]} // Center on Europe (Paris)
        zoom={3} 
        style={{ height: '100%', width: '100%' }}
        >
        <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {getLocations().map((location, index) => (
            <Marker key={index} position={location.position} icon={customIcon}>
        <Popup>
        <strong>{location.title}</strong><br />
        {location.role && <div>{location.role}</div>}
        {location.type === 'work' ? 'Work' : 'Education'}
        </Popup>
            </Marker>
        ))}
        </MapContainer>
      </Box>
    </Box>
  );
};

export default LocationsMap;