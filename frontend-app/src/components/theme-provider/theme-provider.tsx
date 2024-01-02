import { Fragment, type ReactNode, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

import { themes } from "./themes";
import type { RootState } from "store";

interface IUIProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: IUIProviderProps) => {
  const [mode, setMode] = useState("light");
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  useMemo(() => {
    if (darkMode) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [darkMode]);

  const theme = useMemo(() => (mode === "light" ? themes.light : themes.dark), [mode]);

  return (
    <Fragment>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </Fragment>
  );
};
