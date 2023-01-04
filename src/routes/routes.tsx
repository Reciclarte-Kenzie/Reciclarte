import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/register" element={<Register />} /> */}
      {/* <Route path="/profile" element={<Profile />} />  */}
      {/* <Route path="*" element={<Navigate to="/" />}/> */}
    </Routes>
  );
};
