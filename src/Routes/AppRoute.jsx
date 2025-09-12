import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage.jsx";
import AllBlogs from "../Pages/AllBlogs.jsx";
import Admin from "../Pages/Admin.jsx";
import ProtectedRoutes from "../Routes/ProtectedRoutes.jsx";


const AppRoute = () => {
  return (

    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/features/:category" element={<AllBlogs />} />
      <Route path="/features/admin" element={<ProtectedRoutes><Admin /></ProtectedRoutes>} />
  </Routes>
  );
};

export default AppRoute;
