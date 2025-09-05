import React from "react";

const Wrapper = ({ children, title, iconClass = "", iconClass2="", className = "", openModal,titleClass=""}) => {
  return (
    
      <div className={`w-full min-h-[13rem] overflow-hidden lg:shadow-wrapperShadow mt-2 ${className}`}>
        <h3 className={`flex gap-2 justify-center items-center text-light text-[1rem] m-2 w-[95%] ${titleClass}`}>
          <span className="">{title}</span>
          <span className={`${iconClass2}`} onClick={openModal}></span>
        </h3>
        

        {children}
      </div>
    
  )
};

export default Wrapper;
