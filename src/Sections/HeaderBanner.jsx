import React from 'react'
import Buttons from '../Components/Buttons'

const Home = () => {
  return (
    <div className='flex items-center pl-4 pt-4 w-full h-[15rem] lg:shadow-wrapperShadow lg:rounded-xl bg-bgImage bg-cover bg-center relative md:h-[25rem] lg:h-[20rem] md:pl-8'>
        <div className='inset-0 absolute bg-gradient-to-b from-black/70 lg:rounded-xl via-transparent to-black pointer-events-none'></div>
        <div className='absolute mt-20 inset-0 flex flex-col w-full h-full items-center justify-end'>
            <h3 className='font-medium text-[4rem] leading-none m-0 text-white md:text-[6rem] font-cursiveFont'>Kevin</h3>
              <h3 className='font-medium text-[1.5rem] leading-none m-0 mb-[-3] text-light md:text-[2rem] font-cursiveFont'>& <span className='text-light text-[4rem] md:text-[6rem]'> Kristine</span></h3>
        </div>
        
    </div>
  )
}

export default Home