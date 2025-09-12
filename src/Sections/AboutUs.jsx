import React from "react";
import Wrapper from "../Components/Wrapper";
import samplepic from "../assets/Pic2.jpg"
 
const AboutUs = () => {

    const gallery = [
        {src: samplepic, name: "Beach Trips" },
        {src: samplepic, name: "Beach Trips" },
        {src: samplepic, name: "Beach Trips" },
        
    ];

  return (

    <Wrapper title="About Us" className="text-center font-cursiveFont lg:mt-0 lg:rounded-xl" titleClass="text-[2rem]">
       
      <div  className="flex gap-4 overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory scroll-smooth my-3 px-5 w-full h-full">

        <p className="words-break font-[Gothic] text-light">
        We are more than just riders — we are partners in life and on the road. For over 10 years together, our journey has been fueled by love, adventure, and the open highway. What started as a shared passion quickly grew into a lifestyle, where every ride tells a story and every destination brings us closer.

Our motorcycle adventures aren’t just about the miles we travel — they’re about the bond we’ve built. Whether cruising through bustling cities, winding up mountain roads, or chasing sunsets by the shore, we ride side by side, embracing every challenge and celebrating every moment.

Through our journeys, we’ve learned that love, like the road, is full of twists and turns — and we wouldn’t have it any other way. This is who we are: two souls, one journey, endless roads ahead.
        </p>

      </div>
      
    </Wrapper>
  );
};

export default AboutUs;
