import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { IdeaPage } from "../pages/IdeaPage";
import { LoginPage } from "../pages/login";
import Profile from "../pages/profile";
import { RegisterPage } from "../pages/register";
import { IdeasProvider } from "../providers/IdeasProvider";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/idea" element={<IdeaPage />} />
      <Route element={<IdeasProvider />}>
        <Route path="/" element={<Navigate to="/profile" />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
