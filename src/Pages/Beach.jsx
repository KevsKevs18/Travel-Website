import React from 'react'
import Wrapper from '../Components/Wrapper.jsx'
import TopWrapper from '../Components/TopWrapper.jsx'
import Gallery from '../Sections/Gallery.jsx'
import BlogWrapper from '../Components/BlogWrapper.jsx'
import LoginModal from '../Modal/LoginModal.jsx'
import { useState } from 'react'

const Beach = () => {
 const [isOpen, setIsOpen] = useState(false);




  return (
   
    <>
    <TopWrapper/>
    <div className='grid w-full h-auto  lg:grid-cols-[1fr_auto] lg:p-4 lg:gap-2'>
    <Wrapper title="Ride to the Shore" className="g:mt-0 lg:rounded-xl pb-4 " iconClass2="ri-apps-2-add-line" openModal={()=> setIsOpen(true)}>

        <BlogWrapper/>


    </Wrapper>
    <div className="hidden lg:block">
    <Gallery/>
    </div>
    </div>
     <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
        
     
    </>
  )
}

export default Beach