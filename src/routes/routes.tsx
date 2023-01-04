import React from "react";
import { Navigate, Route, Routes} from "react-router-dom";
import { IdeasProvider } from "../providers/IdeasProvider";

export const RoutesApp = () => {
    return (
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        <Route element={<IdeasProvider />}>
          {/* <Route path="/" element={<Home/>}> */}
          {/* <Route path="/profile" element={<Profile />} />  */}
        </Route>
        {/* <Route path="*" element={<Navigate to="/" />}/> */}
      </Routes>
    );
  };
  