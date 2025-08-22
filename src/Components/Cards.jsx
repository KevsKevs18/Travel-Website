import React from 'react'
import samplepic2  from '../assets/Pic2.jpg'
import beach from '../assets/Beach.jpg'
import city from '../assets/City.jpg'
import longride from '../assets/Longride.jpg'
import mountain from '../assets/Mountain.jpg'

const Cards = () => {

    const cardFeatures = [
        {src: beach , title: "Ride to the Shore"},
        {src: city , title: "Metro Miles"},
        {src: longride , title: "Endless Roads"},
        {src: mountain , title: "Ride to the Peaks"},
    ];

  return (
    <>
    {cardFeatures.map((card, index) => ( 
    <div className='flex overflow-hidden flex-col w-full min-h-[11rem] rounded-xl' key={index}>
        <div className='flex overflow-hidden w-full aspect-square md:aspect-[4/3] rounded-xl'>
        <img src={card.src} alt="Sample Pic" className='w-full h-full rounded-t-xl shadow-darkShadow brightness-75 transform-translate-transform duration-300 hover:scale-110'/>
            </div>
            <h3 className='my-2 ml-2 text-light font-sans font-bold'>{card.title}</h3>
           
        
    </div>
    ))}
    </>
  )
}

export default Cards