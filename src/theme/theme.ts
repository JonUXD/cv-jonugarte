import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
    highlight: Palette['primary'];
    attention: Palette['primary'];
    alert: Palette['primary'];
    vibrantPurple: Palette['primary'];
    darkTeal: Palette['primary'];
    deepPurple: Palette['primary'];
    mutedGray: Palette['primary'];
    lightGray: Palette['primary'];
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
    highlight?: PaletteOptions['primary'];
    attention?: PaletteOptions['primary'];
    alert?: PaletteOptions['primary'];
    vibrantPurple?: PaletteOptions['primary'];
    darkTeal?: PaletteOptions['primary'];
    deepPurple?: PaletteOptions['primary'];
    mutedGray?: PaletteOptions['primary'];
    lightGray?: PaletteOptions['primary'];
  }
}

// Extend Button color props
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    accent: true;
    highlight: true;
    attention: true;
    alert: true;
    vibrantPurple: true;
    darkTeal: true;
    deepPurple: true;
    mutedGray: true;
    lightGray: true;
  }
}

// Extend Chip color props
declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    accent: true;
    highlight: true;
    attention: true;
    alert: true;
    vibrantPurple: true;
    darkTeal: true;
    deepPurple: true;
    mutedGray: true;
    lightGray: true;
  }
}

/**
 * Custom theme for CV portfolio with complete color palette
 * All 12 colors stored with meaningful naming for portfolio context
 */
const theme = createTheme({
  palette: {
    // Core brand colors
    primary: {
      main: "#05DBDB", // Bright cyan - main brand
      light: "#40E1E1",
      dark: "#04B6B6",
      contrastText: "#1D1D1B",
    },
    accent: {
      main: "#FFCE61", // Warm yellow - secondary accents
      light: "#FFD880",
      dark: "#E6BA57",
      contrastText: "#1D1D1B",
    },
    
    // Semantic colors for portfolio context
    highlight: {
      main: "#14D392", // Mint green - achievements/skills
      light: "#43DCA7",
      dark: "#11BA7D",
      contrastText: "#1D1D1B",
    },
    attention: {
      main: "#FC9B00", // Orange - important notices/dates
      light: "#FDB033",
      dark: "#E08A00",
      contrastText: "#1D1D1B",
    },
    alert: {
      main: "#FF5E54", // Coral red - alerts/errors
      light: "#FF7E76",
      dark: "#E0544B",
      contrastText: "#FFFFFF",
    },
    
    // Additional colors stored for future use
    vibrantPurple: {
      main: "#C56AB6", // Creative projects/design
      light: "#D188C5",
      dark: "#B15CA3",
      contrastText: "#FFFFFF",
    },
    darkTeal: {
      main: "#177D89", // Professional/tech skills
      light: "#4597A1",
      dark: "#136A74",
      contrastText: "#FFFFFF",
    },
    deepPurple: {
      main: "#590959", // Deep accents/headings
      light: "#7A3C7A",
      dark: "#470747",
      contrastText: "#FFFFFF",
    },
    mutedGray: {
      main: "#8C979B", // Disabled/secondary text
      light: "#A3ACAF",
      dark: "#7A8589",
      contrastText: "#FFFFFF",
    },
    lightGray: {
      main: "#D1D1D8", // Borders/backgrounds
      light: "#DEDEE3",
      dark: "#B9B9C2",
      contrastText: "#1D1D1B",
    },
    
    // Background and text
    background: {
      default: "#FFFFFF",
      paper: "#F8F9FA",
    },
    text: {
      primary: "#1D1D1B",
      secondary: "#5A5A58",
    },
    divider: "#DFDFDF",
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
    MuiListItem: {
      styleOverrides: {
        root: {
          marginBottom: 1,      // normal spacing between items
          lineHeight: 1.5,      // standard readable line height
          paddingLeft: 0.5,     // tight bullet alignment
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
  },
});

export default theme;