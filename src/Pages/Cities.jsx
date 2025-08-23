import React from 'react'
import Wrapper from '../Components/Wrapper.jsx'
import TopWrapper from '../Components/TopWrapper.jsx'
import Gallery from '../Sections/Gallery.jsx'

const Cities = () => {
  return (
    <>
    <TopWrapper/>
    <div className='grid w-full h-auto lg:grid-cols-[1fr_auto] lg:p-4 lg:gap-2'>
    <Wrapper title="Metro Miles" >

        


    </Wrapper>
    <div className="hidden lg:block">
        <Gallery/>
        </div>
    </div>
    </>
  )
}

export default Cities