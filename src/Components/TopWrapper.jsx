import React from 'react'



const TopWrapper = ({leftIcon="",rightIcon="", leftClick, openModal, className=""}) => {



  

  return (

    <div className={`sticky top-0 z-10 flex w-full h-[3rem] backdrop-blur-md border-b-[2px] border-customGray  py-2 pl-4 justify-between ${className}`}>
        <i className={`${leftIcon} text-light text-[1.3rem] cursor-pointer`} onClick={leftClick}></i>
        <i className={`${rightIcon} text-light text-[1.3rem] cursor-pointer mr-2`} onClick={openModal}></i>
    </div>

  )
}

export default TopWrapper