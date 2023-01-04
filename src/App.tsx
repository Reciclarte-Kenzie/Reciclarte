import React from "react";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/userContext";
import { RoutesApp } from "./routes/routes";
import { GlobalStyles } from "./styles/GlobalStyles";
<<<<<<< HEAD
=======
>>>>>>> c3495dc73c8f6bb452b385cd6baa2dd8d2674c8f

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
