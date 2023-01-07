import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ModalCreateIdea } from "../components/Modals/ModalCreateIdea";
import { LoginPage } from "../pages/login";
import Profile from "../pages/profile";
import { RegisterPage } from "../pages/register";
import { IdeasProvider } from "../providers/IdeasProvider";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<IdeasProvider />}>
        <Route path="/modal" element={<ModalCreateIdea />} />
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
