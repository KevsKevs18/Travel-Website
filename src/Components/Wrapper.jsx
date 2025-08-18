import React from "react";

const Wrapper = ({ children, title, iconClass = "", className = "" }) => {
  return (
    
      <div className={`w-full min-h-[13rem] bg-customGray mt-2 ${className}`}>
        <h3 className="text-white text-[1rem] m-2">
          <span className={`mr-3 ${iconClass}`}></span>
          {title}
        </h3>

        {children}
      </div>
    
  )
};

export default Wrapper;
