import React from "react";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/userContext";
import { IdeasProvider } from "./providers/IdeasProvider";
import { RoutesApp } from "./routes/routes";
import { GlobalStyles } from "./styles/GlobalStyles";

export function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <IdeasProvider>
            <GlobalStyles />
            <RoutesApp />
          </IdeasProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}
