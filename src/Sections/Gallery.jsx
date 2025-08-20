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

    <Wrapper title="Gallery" iconClass="ri-multi-image-line" className="lg:mt-0 lg:rounded-xl">
       
      <div  className="flex gap-4 overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory scroll-smooth my-3 px-5 w-full h-full">
       
        {gallery.map((pic,index) => (
        <div key={index} className="flex flex-col w-full h-full gap-4 md:w-[50%] snap-center shrink-0 rounded-xl">
          <div className="w-full h-[10rem] ">
            <img src={pic.src} alt="gallery pic"  className="w-full h-full object-fill rounded-xl"/>
            
          </div>
          <div className="Card-Info flex flex-col px-3">
              <h5 className="font-sans font-bold text-light">{pic.name}</h5>
            </div>
        </div>
        ))};
      </div>
      
    </Wrapper>
  );
};

export default Gallery;
