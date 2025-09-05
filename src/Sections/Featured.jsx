import React from "react";
import Wrapper from "../Components/Wrapper";
import Cards from "../Components/Cards";

const Featured = () => {
  return (
    <Wrapper
      className="mt-2 lg:rounded-xl bg-black"
    >
      <div className="grid  grid-rows-[auto_auto] mb-4 place-items-center gap-2 w-full min-h-[20rem]">
        <div className="grid grid-rows-[200px_auto] md:grid-rows-[150px_auto] lg:grid-rows-1 lg:grid-cols-[1fr_300px] ">
          <div className="w-full flex text-center justify-center items-end pb-6 px-4 md:pb-2 md:px-12 h-full md:pt-0 ">
          <p className="text-[.9rem] text-light font-[Gothic]">
            Our little space for adventures on two wheels. Here we share
            our road trips, favorite routes, hidden spots, and memories from our
            journeys together. It’s mainly for us to keep, but anyone is welcome
            to drop by, get inspired, and maybe even plan their own ride.
          </p>
          </div>
          <div className="w-full mb-auto aspect-[16/9] rounded-lg px-2 md:p-10">
            <video
              src="/tryvideo.mp4"
              type="video/mp4"
              autoPlay
              loop
              playsInline
              muted
              className="w-full h-full object-cover bg-customGray rounded-lg shadow-darkShadow"
            />
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
