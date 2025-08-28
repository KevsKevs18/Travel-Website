import React from 'react'
import { useNavigate } from 'react-router-dom'

const TopWrapper = () => {

    const navigate = useNavigate();

    const removeToken = ()=>{
        localStorage.removeItem("token");
        navigate("/")
    };


  return (
    <div className='flex w-full h-[3rem] border-b border-light  py-2 pl-4'>
        <i className='ri-arrow-left-line text-light text-[1.3rem] cursor-pointer' onClick={removeToken}></i>
    </div>
  )
}

export default TopWrapper