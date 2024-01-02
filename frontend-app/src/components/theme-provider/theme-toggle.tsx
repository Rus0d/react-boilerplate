import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { useSelector } from "react-redux";
import { RootState } from "store";

const rootComponentName = "theme-toggle";

export const ThemeToggle = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  return darkMode ? <LightModeIcon data-testid={rootComponentName} /> : <DarkModeIcon data-testid={rootComponentName} />;
};
