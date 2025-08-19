import React from 'react'
import Buttons from '../Components/Buttons'

const Home = () => {
  return (
    <div className='flex items-center pl-4 pt-4 w-full h-[15rem] rounded-lg bg-bgImage bg-cover bg-center relative md:h-[25rem] md:pl-8'>
        <div className='inset-0 absolute bg-gradient-to-b from-black/70 via-transparent to-black pointer-events-none'></div>
        <div className='flex flex-col w-full h-[10rem]'>
            <h3 className='font-medium text-[1.5rem] text-button md:text-[2rem]'>Two Wheels.</h3>
              <h3 className='font-medium text-[1.5rem] text-button md:text-[2rem]'>One Journey.</h3>
              <p className='text-white font-normal font-sans text-[.9rem]'>Explore the world together.</p>
              <Buttons buttonClass='mt-2 text-[.8rem]'/>
        </div>
        
    </div>
  )
}

export default Home