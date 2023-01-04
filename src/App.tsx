import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./context/userContext";
import { RoutesApp } from "./routes/routes";
import { GlobalStyles } from "./styles/GlobalStyles";

export function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <ToastContainer autoClose={3000} />
          <GlobalStyles />
          <RoutesApp />
        </UserProvider>
      </BrowserRouter>
    </>
  );
}
