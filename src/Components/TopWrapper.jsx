import React from 'react'
import { useNavigate } from 'react-router-dom'

const TopWrapper = () => {

    const navigate = useNavigate();


  return (
    <div className='flex w-full h-[3rem] border-b border-light  py-2 pl-4'>
        <i className='ri-arrow-left-line text-light text-[1.3rem] cursor-pointer' onClick={()=> navigate("/")}></i>
    </div>
  )
}

export default TopWrapper