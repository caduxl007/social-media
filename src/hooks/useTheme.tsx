import React, { createContext, useContext } from "react";
import { DefaultTheme, ThemeProvider as ThemeStyled } from "styled-components";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";
import { usePersistedState } from "../utils/usePersistedState";

interface ThemeContextData {
  toggleTheme(): void;
  theme: DefaultTheme;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeStyled theme={theme}>{children}</ThemeStyled>
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within an ThemeProvider");
  }

  return context;
}

export { ThemeContext, ThemeProvider };
