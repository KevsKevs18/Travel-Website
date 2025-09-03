import React from 'react'
import Wrapper from '../Components/Wrapper.jsx'
import TopWrapper from '../Components/TopWrapper.jsx'
import Gallery from '../Sections/Gallery.jsx'
import BlogWrapper from '../Components/BlogWrapper.jsx'
import LoginModal from '../Modal/LoginModal.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Beach = () => {
 const [isOpen, setIsOpen] = useState(false);

 const navigate = useNavigate();

const handleAdmin = ()=> {
  if (localStorage.getItem("token")){
      navigate("/features/admin");
  }
  else {
    setIsOpen(true);
  }

};


  return (
   
    <>
    <TopWrapper topIcon="ri-arrow-left-line" topClick={()=> navigate("/")}/>
    <div className='grid w-full h-auto  lg:grid-cols-[1fr_auto] lg:p-4 lg:gap-2'>
    <Wrapper title="Ride to the Shore" className="min-h-screen mt-0 lg:rounded-xl pb-4 " iconClass2="ri-admin-line cursor-pointer" openModal={()=>handleAdmin()}>

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