import React from "react";
import Featured from "../Sections/Featured";
import HeaderBanner from "../Sections/HeaderBanner";
import Gallery from "../Sections/Gallery";

const Homepage = () => {
  return (
    <div className="w-full min-h-screen grid grid-rows-[auto_auto] md:min-h-[300px] lg:grid-rows-1 lg:grid-cols-[1fr_1fr] lg:p-4 lg:gap-6">
      <div className="w-full h-auto flex flex-col lg:gap-4 ">
        <HeaderBanner />
        <Featured />
      </div>
      <div className="w-full h-auto flex flex-col justify-start">
        <Gallery />
      </div>
    </div>
  );
};

export default Homepage;
