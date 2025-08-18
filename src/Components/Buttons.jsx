import React from 'react'

const Buttons = ({buttonClass=""}) => {
  return (
    <div className='w-[8rem] h-auto'>
    <button className={`px-4 py-2 font-normal cursor-pointer bg-button rounded-lg ${buttonClass}`}>About Us!</button>
    </div>
  )
}

export default Buttons