import React from "react";
import Wrapper from "../Components/Wrapper";
import Cards from "../Components/Cards";

const Featured = () => {
  return (
    <Wrapper
      title="Featured Trips"
      iconClass="ri-gallery-view-2"
      iconClass2="ri-edit-2-line"
      className="mt-2 lg:rounded-xl"
    >
      <div className="grid  grid-rows-[auto_auto] mb-4 place-items-center gap-2 w-full min-h-[20rem]">
        <div className="grid grid-rows-[auto_auto] md:grid-rows-1 md:grid-cols-[1fr_400px] lg:grid-rows-1 lg:grid-cols-[1fr_300px] ">
          <div className="w-full mb-auto aspect-[16/9] rounded-lg px-2">
            <video
              src="/tryvideo.mp4"
              type="video/mp4"
              autoPlay
              loop
              playsInline
              muted
              className="w-full h-full object-cover rounded-lg shadow-darkShadow"
            />
          </div>
          <div className="w-full flex jusstify-center h-full p-3 md:pt-0 ">
          <p className="text-[.9rem] text-light font-[Gothic]">
            Our little space for adventures on two wheels 🚴‍♂️❤️. Here we share
            our road trips, favorite routes, hidden spots, and memories from our
            journeys together. It’s mainly for us to keep, but anyone is welcome
            to drop by, get inspired, and maybe even plan their own ride.
          </p>
          </div>
        </div>
        <div className=" overflow-hidden grid place-items-center gap-2 grid-cols-2 grid-rows-2 p-2 md:grid-cols-4 md:grid-rows-1 w-full">
          <Cards />
        </div>
      </div>
    </Wrapper>
  );
};

export default Featured;
