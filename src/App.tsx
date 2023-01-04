import React from "react";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/userContext";
import { RoutesApp } from "./routes/routes";
import { GlobalStyles } from "./styles/GlobalStyles";

export function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <GlobalStyles />
          <RoutesApp />
        </UserProvider>
      </BrowserRouter>
    </>
  );
}
