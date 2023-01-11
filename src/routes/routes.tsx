import { Navigate, Route, Routes } from "react-router-dom";
import { DevelopersPage } from "../pages/developers";
import { Home } from "../pages/home";
import { LoginPage } from "../pages/login";
import Profile from "../pages/profile";
import { RegisterPage } from "../pages/register";
import { IdeasProvider } from "../providers/IdeasProvider";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/devs" element={<DevelopersPage />} />
      <Route element={<IdeasProvider />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
