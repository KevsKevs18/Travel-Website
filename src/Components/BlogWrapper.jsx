import React from "react";
import AddModal from "../Modal/AddModal";

const BlogWrapper = ({ deleteIcon = "", title, description, imageUrl, handleDelete, imgLoad, imgDate, autoSync, keyProps}) => {

     

  return (
    <>
   
        <div className="w-full h-auto flex flex-col p-2 border-b-[2px] border-customGray overflow-x-hidden">
          <div className="w-full h-full" key={keyProps}>
            <h2 className="font-[Gothic] font-bold text-[2rem] text-light">
              <span className={`${deleteIcon} text-red-500 cursor-pointer`} onClick={handleDelete}> </span>
              {title}
            </h2>
            <img
              src={imageUrl}
              alt="beach pic"
              onLoad={imgLoad}
              className="w-full my-2 rounded-xl aspect-[16/9]"
            />
            <small className="text-neutral-500 text-[.7rem]">
              <span className="ri-calendar-line mr-2 text-[1rem]"></span>
              {new Date(imgDate).toLocaleDateString("en-PH", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </small>
          </div>
          <div className="w-full h-full">
            <p className="font-[Gothic] break-words font-normal text-light mt-2">
              {description}
            </p>
          </div>
        </div>
      
    <AddModal autoSync={autoSync}/>
    </>
  );
};

export default BlogWrapper;
