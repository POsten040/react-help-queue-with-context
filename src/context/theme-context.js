import React from 'react';

export const themes = {
  light: {
    backgroundColor: "AntiqueWhite",
    textColor: "DarkSlateGrey",
    buttonBackground: "Lavender", 
    inputBackground: "Gainsboro"
  },
  dark: {
    backgroundColor: "DarkSlateGrey",
    textColor: "AntiqueWhite",
    buttonBackground: "#232b3c",
    inputBackground: "#45516d"
  }
};

export const ThemeContext = React.createContext();

export function useTheme() {
  const theme = React.useContext(ThemeContext);
  
  if (!theme) {
    throw new Error("ThemeContext must be used within a ThemeContext.Provider!");
  }

  return theme;
}

export function ThemeProvider(props) {
  const [theme, setTheme] = React.useState(themes.light);
  return <ThemeContext.Provider value={[theme, setTheme]} {...props}/>
}