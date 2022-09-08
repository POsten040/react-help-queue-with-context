import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import ToggleTheme from "./ToggleTheme";
import { ThemeProvider } from "../context/theme-context";

function App(){
  return (
    <ThemeProvider >
      <Header />
      <ToggleTheme />
      <TicketControl />
    </ThemeProvider>
  );
}

export default App;