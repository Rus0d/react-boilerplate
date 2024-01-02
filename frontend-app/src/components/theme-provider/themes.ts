import { alpha, Components, createTheme, Theme } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const semiTowPallete = {
  blue: {
    DEFAULT: "#007acc",
    "50": "#f0f8ff",
    "100": "#e0f0fe",
    "200": "#b9e2fe",
    "300": "#7ccbfd",
    "400": "#36b2fa",
    "500": "#0c98eb",
    "600": "#007acc",
    "700": "#015fa3",
    "800": "#065186",
    "900": "#0b446f",
    "950": "#072b4a"
  }
};
type TBluePalette = {
  blue: {
    [key: string]: string;
  };
};
declare module "@mui/material/styles" {
  interface Palette {
    st: TBluePalette;
  }
}

const defaultMUITheme: Theme = createTheme();
const borderRadiusTokens = [0, 4, 24];
const commonStyles = {
  borderRadiusTokens: (index: number) => {
    if (borderRadiusTokens[index]) {
      return `${borderRadiusTokens[index]}px`;
    }
    return 0;
  }
};
const lightThemePalette = {
  palette: {
    primary: {
      main: semiTowPallete.blue.DEFAULT,
      light: semiTowPallete.blue["500"],
      dark: semiTowPallete.blue["700"]
    },
    st: {
      blue: {
        ...semiTowPallete.blue,
        background: alpha(semiTowPallete.blue.DEFAULT, 0.08)
      }
    }
  }
};
const darkThemePalette = {
  palette: {
    st: {
      blue: {}
    }
  }
};
const commonComponents: Components = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        borderRadius: commonStyles.borderRadiusTokens(2),
        paddingLeft: defaultMUITheme.spacing(1.875),
        paddingRight: defaultMUITheme.spacing(1.875)
      }
    }
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        width: "fit-content"
      }
    }
  },
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: "none"
      }
    }
  },
  MuiToggleButton: {
    styleOverrides: {
      root: ({ ownerState, theme }) => {
        const color = !ownerState.color || ownerState.color === "standard" ? "primary" : ownerState.color;
        return {
          borderColor: alpha((theme as Theme).palette[color].main, 0.5),
          borderRadius: commonStyles.borderRadiusTokens(2),
          paddingTop: defaultMUITheme.spacing(0.625),
          paddingBottom: defaultMUITheme.spacing(0.625),
          paddingLeft: defaultMUITheme.spacing(1),
          paddingRight: defaultMUITheme.spacing(1),

          "&:hover": {
            borderColor: `${(theme as Theme).palette[color].main} !important`
          },

          "&.MuiToggleButtonGroup-grouped:first-of-type": {
            paddingRight: defaultMUITheme.spacing(1),
            paddingLeft: defaultMUITheme.spacing(1.875)
          },

          "&.MuiToggleButtonGroup-grouped:last-of-type": {
            paddingLeft: defaultMUITheme.spacing(1),
            paddingRight: defaultMUITheme.spacing(1.875)
          }
        };
      }
    }
  },
  MuiTabs: {
    styleOverrides: {
      root: ({ theme }) => {
        return {
          "&.MuiTabs-vertical": {
            backgroundColor: (theme as Theme).palette.st.blue.background,
            fontSize: "14px",
            ".MuiTab-root": {
              "&:hover": {
                backgroundColor: (theme as Theme).palette.action.hover
              }
            }
          }
        };
      },
      indicator: {
        left: 0
      }
    }
  },
  MuiAlert: {
    styleOverrides: {
      root: {
        borderRadius: 0
      }
    }
  }
};
const lightThemeComponents: Components = {
  ...commonComponents
};
const darkThemeComponents: Components = {
  ...commonComponents
};
const LightTheme = createTheme({
  palette: {
    mode: "light",
    ...lightThemePalette.palette
  },
  components: {
    ...lightThemeComponents
  },
  ...commonStyles
});
const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    ...darkThemePalette.palette
  },
  components: {
    ...darkThemeComponents
  },
  ...commonStyles
});
const themes = {
  light: LightTheme,
  dark: DarkTheme
};
declare module "@mui/material/styles" {
  interface Theme {
    borderRadiusTokens: (index: number) => string | number;
  }
}

export { themes };
