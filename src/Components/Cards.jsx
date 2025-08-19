import React from 'react'
import samplepic2  from '../assets/Pic2.jpg'

const Cards = () => {

    const cardFeatures = [
        {src: samplepic2 , title: "Beach Travel", descrip: "Laiya One Batangas"},
        {src: samplepic2 , title: "Beach Travel", descrip: "Laiya One Batangas"},
        {src: samplepic2 , title: "Beach Travel", descrip: "Laiya One Batangas"},
        {src: samplepic2 , title: "Beach Travel", descrip: "Laiya One Batangas"},
    ];

  return (
    <>
    {cardFeatures.map((card, index) => ( 
    <div className='flex overflow-hidden bg-blue-300 flex-col w-full h-[11rem] rounded-xl' key={index}>
        <img src={card.src} alt="Sample Pic" className='w-full h-[70%] rounded-t-xl shadow-darkShadow brightness-75 transform-translate-transform duration-300 hover:scale-110'/>
            <h3 className='mt-2 ml-2 text-white font-sans font-bold'>{card.title}
            </h3>
            <p className='ml-2 text-[.8rem] text-gray-500 font-sans mt-[-5px] font-medium'>{card.descrip}</p>
        
    </div>
    ))}
    </>
  )
}

export default Cards