import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
  }
}

// Extend color props for components
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    accent: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    accent: true;
  }
}

/**
 * Professional theme using Palette 1 with auto-calculated variants
 */
const theme = createTheme({
  palette: {
    // Core brand colors
    primary: {
      main: "#05DBDB", // Cyan - Main brand, company names, primary actions
      contrastText: "#1D1D1B",
    },
    secondary: {
      main: "#FFCE61", // Yellow - Secondary actions, highlights, featured items
      contrastText: "#1D1D1B",
    },
    
    // Semantic colors repurposed for portfolio usage
    success: {
      main: "#177D89", // Teal - Professional elements, skills, education
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#05DBDB", // Cyan - Brand accents, notifications (reuse primary)
      contrastText: "#1D1D1B",
    },
    warning: {
      main: "#FFCE61", // Yellow - Important notices, dates, highlights (reuse secondary)
      contrastText: "#1D1D1B",
    },
    error: {
      main: "#8C979B", // Gray - Secondary/muted elements, less important items
      contrastText: "#FFFFFF",
    },
    
    // Neutral colors
    background: {
      default: "#F8F9FA", // Light background
      paper: "#FFFFFF", // Cards/surfaces
    },
    text: {
      primary: "#1D1D1B", // Black - All readable text
      secondary: "#5A5A58", // Dark gray - Secondary text
    },
    divider: "#DFDFDF", // Light gray - Borders, dividers
  },
  
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.25rem",
    },
    h6: {
      fontWeight: 500,
      fontSize: "1.1rem",
    },
    body1: {
      fontSize: "0.9rem",
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.8rem",
      lineHeight: 1.4,
    },
  },
  
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 8px rgba(5, 219, 219, 0.1)",
          border: "1px solid #DFDFDF",
          borderRadius: 8,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "16px",
          '@media (max-width:600px)': {
            padding: "12px",
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          marginBottom: 1,
          lineHeight: 1.5,
          paddingLeft: 0.5,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#05DBDB",
          height: 3,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          '&.Mui-selected': {
            color: "#1D1D1B",
          },
        },
      },
    },
  },
});

export default theme;