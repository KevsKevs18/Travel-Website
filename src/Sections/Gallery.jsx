import React from "react";
import Wrapper from "../Components/Wrapper";
import samplepic from "../assets/Pic2.jpg"
 
const Gallery = () => {

    const gallery = [
        {src: samplepic, name: "Beach Trips" },
        {src: samplepic, name: "Beach Trips" },
        {src: samplepic, name: "Beach Trips" },
        
    ];

  return (

    <Wrapper title="About Us" className="text-center font-cursiveFont lg:mt-0 lg:rounded-xl" titleClass="text-[2rem]">
       
      <div  className="flex gap-4 overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory scroll-smooth my-3 px-5 w-full h-full">
       
        
      </div>
      
    </Wrapper>
  );
};

export default Gallery;
