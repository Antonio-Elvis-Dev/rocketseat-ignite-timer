import { ThemeProvider } from "styled-components";

import { BrowserRouter } from "react-router-dom";

import { defaultTheme } from "./styles/themes/default";

import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { CyclesConextProvider } from "./context/CyclesConext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesConextProvider>
          <Router />
        </CyclesConextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
