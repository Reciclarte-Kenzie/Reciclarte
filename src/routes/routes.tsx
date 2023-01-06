import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Slider } from "../components/Slider";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";
import { IdeasProvider } from "../providers/IdeasProvider";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<IdeasProvider />}>
        {/* <Route path="/" element={<Home/>}> */}
        {/* <Route path="/profile" element={<Profile />} />  */}
      </Route>
      {/* <Route path="*" element={<Navigate to="/" />}/> */}
    </Routes>
  );
};
