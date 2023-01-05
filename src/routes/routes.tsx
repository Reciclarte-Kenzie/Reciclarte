import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { IdeasProvider } from "../providers/IdeasProvider";

export const RoutesApp = () => {
  return (
    <Routes>
      {/* <Route path="/register" element={<Register />} /> */}
      <Route element={<IdeasProvider />}>
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/" element={<Home/>}> */}
        {/* <Route path="/profile" element={<Profile />} />  */}
      </Route>
      {/* <Route path="*" element={<Navigate to="/" />}/> */}
    </Routes>
  );
};
