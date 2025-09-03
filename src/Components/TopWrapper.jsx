import React from 'react'


const TopWrapper = ({topIcon="", topClick}) => {


  

  return (
    <div className='flex w-full h-[3rem] border-b border-light  py-2 pl-4'>
        <i className={`${topIcon} text-light text-[1.3rem] cursor-pointer`} onClick={topClick}></i>
    </div>
  )
}

export default TopWrapper