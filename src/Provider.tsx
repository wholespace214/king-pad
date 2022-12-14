/**
 * Material UI theme
 * See for details: https://material-ui.com/customization/default-theme/?expand-path=$.palette
 * Martial Color tool: https://material.io/resources/color
 */

import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { Theme, ThemeOptions } from '@mui/material/styles';
import React from 'react';
import { useStore } from './Context/StoreContext';
/**
 * Material UI theme "front" colors, "back" colors are different for Light and Dark modes
 */
declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    status: {
      danger: string;
    };
  }
  interface BreakpointOverrides {
    ls: true;
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    status?: {
      danger?: string;
    };
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
const FRONT_COLORS_LIGHT = {
  primary: {
    main: '#FAFAFA',
    contrastText: '#1A023E'
  },
  secondary: {
    main: '#FFFFFF',
    contrastText: '#8462F6'
  },
  info: {
    main: '#D7CBFF',
    contrastText: '#FFFFFF'
  },
  success: {
    main: '#F5F0FC',
    contrastText: '#37086E'
  },
  warning: {
    main: '#FFA16F',
    contrastText: '#FFFFFF'
  },
  error: {
    main: '#FF6F6F',
    contrastText: '#FFFFFF'
  },
  danger: {
    main: '#FFFFFF',
    contrastText: '#12002E'
  },
  dark: {
    main: '#FAFAFA',
    contrastText: '#1A003E'
  }
};

const FRONT_COLORS_DARK = {
  primary: {
    main: '#1A023E',
    contrastText: '#FFFFFF'
  },
  secondary: {
    main: '#8462F6',
    contrastText: '#FFFFFF'
  },
  info: {
    main: '#12002E',
    contrastText: '#FFFFFF'
  },
  success: {
    main: '#37086E',
    contrastText: '#FFFFFF'
  },
  warning: {
    main: '#FFA16F',
    contrastText: '#FFFFFF'
  },
  error: {
    main: '#FF6F6F',
    contrastText: '#FFFFFF'
  },
  danger: {
    main: '#12002E',
    contrastText: '#FFFFFF'
  },
  dark: {
    main: '#1A003E',
    contrastText: '#FAFAFA'
  }
};

/**
 * Material UI theme config for "Light Mode"
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LIGHT_THEME: any = {
  breakpoints: {
    values: {
      ls: 360,
      xs: 390,
      sm: 540,
      md: 768,
      lg: 1024,
      xl: 1366,
      mobile: 450,
      tablet: 640,
      laptop: 890,
      desktop: 1200
    }
  },
  palette: {
    mode: 'light',
    background: {
      paper: '#F5F0FC',
      default: '#F5F0FC'
    },
    ...FRONT_COLORS_LIGHT
  }
};

/**
 * Material UI theme config for "Dark Mode"
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DARK_THEME: any = {
  breakpoints: {
    values: {
      ls: 360,
      xs: 390,
      sm: 540,
      md: 768,
      lg: 1024,
      xl: 1366,
      mobile: 450,
      tablet: 640,
      laptop: 890,
      desktop: 1200
    }
  },
  palette: {
    mode: 'dark',
    background: {
      paper: '#37086E', // Gray 800 - Background of "Paper" based component
      default: '#37086E'
    },
    ...FRONT_COLORS_DARK
  }
};

/**
 * Material UI Provider with Light and Dark themes depending on global "state.darkMode"
 */
interface propsType {
  children: React.ReactNode;
}

const AppThemeProvider = (props: propsType) => {
  const { isMode } = useStore();
  // const theme = useMemo(() => (state.darkMode ? createTheme(DARK_THEME) : createTheme(LIGHT_THEME)));
  const theme = isMode === 'dark' ? createTheme(DARK_THEME) : createTheme(LIGHT_THEME);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /* Material UI Styles */ />
      {props.children}
    </ThemeProvider>
  );
};

export { AppThemeProvider, LIGHT_THEME, DARK_THEME };
