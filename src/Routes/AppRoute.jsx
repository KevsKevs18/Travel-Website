import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage.jsx";
import Beach from "../Pages/Beach.jsx";
import Cities from "../Pages/Cities.jsx";


const AppRoute = () => {
  return (

    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/features/beach" element={<Beach />} />
      <Route path="/features/cities" element={<Cities />} />
  </Routes>
  );
};

export default AppRoute;
