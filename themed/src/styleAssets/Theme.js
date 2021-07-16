import React, { useContext } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ThemeContext } from "../contexts/ThemeStore";

const palette = {
  primary: "#afbdc4",
  secondary: "#546e7a",
  error: "#ff5722",
  warning: "#ffb74d",
  info: "#81d4fa",
  success: "#81c784",

  light: {
    primary: "#e1eff7",
    secondary: "#819ca9",
    boxShadow:
      "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;",
  },
  dark: {
    primary: "#808d94",
    secondary: "#29434e",
  },
};

const themes = {
  light: {
    primary: palette.primary,
    secondary: palette.secondary,
    error: palette.error,
    warning: palette.warning,
    info: palette.info,
    success: palette.success,
    background: palette.light.primary,
    highlight: palette.info,
    text: palette.dark.secondary,
    boxShadow: palette.light.boxShadow,
  },
  dark: {
    background: palette.dark.secondary,
    highlight: palette.info,
    text: palette.light.primary,
  },
};

const GlobalStyle = createGlobalStyle`
  max-width:99vw;
  transition: all 1s;
`;

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
