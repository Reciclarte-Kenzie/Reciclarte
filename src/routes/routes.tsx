import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";

export const RoutesApp = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home/>}> */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* <Route path="/profile" element={<Profile />} />  */}
      {/* <Route path="*" element={<Navigate to="/" />}/> */}
    </Routes>
  );
};
