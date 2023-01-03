import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";

import { LoginPage } from "./pages/login";

export function App() {
  return (
    <>
      <GlobalStyles />
      <LoginPage />
    </>
  );
}
