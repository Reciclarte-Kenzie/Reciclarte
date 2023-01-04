import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RoutesApp } from "./routes/routes";
import { GlobalStyles } from "./styles/GlobalStyles";

export function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <RoutesApp />
      </BrowserRouter>
    </>
  );
}
