import { createTheme } from '@mui/material'

declare module '@mui/material' {
  interface PaletteOptions {
    amino: {
      cysteine: string
      hydrophobic: string
      glycine: string
      negativelyCharged: string
      positivelyCharged: string
      polarUncharged: string
    }
  }

  interface Palette {
    amino: {
      cysteine: string
      hydrophobic: string
      glycine: string
      negativelyCharged: string
      positivelyCharged: string
      polarUncharged: string
    }
  }

  interface Theme {
    variables: {
      headerHeight: string
    }
  }

  interface ThemeOptions {
    variables: {
      headerHeight: string
    }
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4bbf76',
      light: '#c9f2d8',
      dark: '#289450',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
    },
    error: {
      main: '#ff0000',
      light: '#ffeded',
    },
    amino: {
      cysteine: '#ffea00',
      hydrophobic: '#67e4a6',
      glycine: '#c4c4c4',
      negativelyCharged: '#fcdcac',
      positivelyCharged: '#bb99ff',
      polarUncharged: '#80bfff',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.2,
    },
    h5: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.2,
    },
    h6: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.2,
    },
  },
  variables: {
    headerHeight: '64px',
  },
})
