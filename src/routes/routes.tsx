import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login";

export const RoutesApp = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home/>}> */}
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/register" element={<Register />} /> */}
      {/* <Route path="/profile" element={<Profile />} />  */}
      {/* <Route path="*" element={<Navigate to="/" />}/> */}
    </Routes>
  );
};
