import React from "react";
import Featured from "../Sections/Featured";
import HeaderBanner from "../Sections/HeaderBanner";
import AboutUs from "../Sections/AboutUs";

const Homepage = () => {
  return (
    <div className="w-full min-h-screen grid grid-rows-[auto_auto] md:min-h-[300px] lg:grid-rows-1 lg:py-4 lg:px-64 lg:gap-6">
      <div className="w-full h-auto flex flex-col lg:gap-4 ">
        <HeaderBanner />
        <Featured />
      </div>
      <div className="w-full h-auto flex flex-col justify-start">
        <AboutUs />
      </div>
    </div>
  );
};

export default Homepage;
