import React from "react";

const Wrapper = ({ children, title, iconClass = "", iconClass2="", className = "" }) => {
  return (
    
      <div className={`w-full min-h-[13rem] overflow-hidden lg:shadow-wrapperShadow bg-customGray mt-2 ${className}`}>
        <h3 className="flex items-center text-light text-[1rem] m-2 w-[95%]">
          <span className={`mr-3 ${iconClass}`}></span>
          {title}<span className={`ml-auto ${iconClass2}`}></span>
        </h3>
        

        {children}
      </div>
    
  )
};

export default Wrapper;
