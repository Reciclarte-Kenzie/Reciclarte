import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Slider } from "../components/Slider";
import { LoginPage } from "../pages/login";
import { IdeasProvider } from "../providers/IdeasProvider";

export const RoutesApp = () => {
  return (
    <Routes>
      {/* <Route path="/login" element={<LoginPage />} />{" "} */}
      {/* <Route path="/register" element={<Register />} /> */}
      <Route path="/login" element={<LoginPage />} />
      <Route element={<IdeasProvider />}>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/" element={<Home/>}> */}
        {/* <Route path="/profile" element={<Profile />} />  */}
      </Route>
      {/* <Route path="*" element={<Navigate to="/" />}/> */}
    </Routes>
  );
};
