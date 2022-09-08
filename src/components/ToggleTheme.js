import React from "react";
import { useTheme, themes } from "../context/theme-context";

function ToggleTheme() {
  const [theme, setTheme] = useTheme();

  document.body.style.backgroundColor = theme.backgroundColor;
  document.body.style.color = theme.textColor;

  const styles = { 
    backgroundColor: theme.buttonBackground, 
    color: theme.textColor 
  }

  return (
    <React.Fragment>
      <button 
        style={styles} 
        onClick={() => setTheme(theme => 
          theme.textColor === "AntiqueWhite" ? themes.light : themes.dark
      )}>
        {theme.textColor === "AntiqueWhite" ? "toggle light theme" : "toggle dark theme"}
      </button>
      <hr/>
    </React.Fragment>
  );
}

export default ToggleTheme;