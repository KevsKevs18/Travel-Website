import React from "react";
import beach from "../assets/Beach.jpg";

const BlogWrapper = () => {
  return (
    <div className="w-full min-h-[25rem] px-4 py-2 grid grid-rows-auto md:grid-cols-2">
      <div className="w-full h-auto flex flex-col p-2 border-b-[2px] border-muted">
        <div className="w-full h-full">
          <h2 className="font-sans font-bold text-[1.3rem] text-light">
            Sample Title To Our First Ever Blog
          </h2>
          <img
            src={beach}
            alt="beach pic"
            className="w-full h-[10rem] my-2 rounded-xl"
          />
          <small className="text-muted text-[.7rem]"><span className="ri-calendar-line mr-2 text-[1rem]"></span>August 26, 2025</small>
        </div>
        <div className="w-full h-full">
          <p className="font-sans font-medium text-light mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere cum
            harum provident pariatur aliquam laudantium, quos quas. Dolorem illo
            harum qui ab, placeat assumenda tenetur reprehenderit aspernatur
            error, laudantium nobis!
            
          </p>
        </div>
      </div>

      <div className="w-full h-auto flex flex-col p-2 border-b-[2px] border-muted">
        <div className="w-full h-full">
          <h2 className="font-sans font-bold text-[1.3rem] text-light">
            Sample Title To Our First Ever Blog
          </h2>
          <img
            src={beach}
            alt="beach pic"
            className="w-full h-[10rem] my-2 rounded-xl"
          />
          <small className="text-muted text-[.7rem]"><span className="ri-calendar-line mr-2 text-[1rem]"></span>August 26, 2025</small>
        </div>
        <div className="w-full h-full">
          <p className="font-sans font-medium text-light mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere cum
            harum provident pariatur aliquam laudantium, quos quas. Dolorem illo
            harum qui ab, placeat assumenda tenetur reprehenderit aspernatur
            error, laudantium nobis!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogWrapper;
