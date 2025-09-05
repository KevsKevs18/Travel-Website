import React from 'react'



const TopWrapper = ({leftIcon="",rightIcon="", leftClick, openModal}) => {



  

  return (

    <div className='flex w-full h-[3rem] border-b-[2px] border-customGray  py-2 pl-4 justify-between'>
        <i className={`${leftIcon} text-light text-[1.3rem] cursor-pointer`} onClick={leftClick}></i>
        <i className={`${rightIcon} text-light text-[1.3rem] cursor-pointer mr-2`} onClick={openModal}></i>
    </div>

  )
}

export default TopWrapper