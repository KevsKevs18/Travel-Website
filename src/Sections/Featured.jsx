import React from 'react'
import Wrapper from '../Components/Wrapper'
import samplevid from '../assets/samplevid.mp4'
import Map from '../Components/Map'

const Featured = () => {
  return (
     <Wrapper title="Featured Trips" iconClass="ri-gallery-view-2">
        <div className='grid grid-cols-1 grid-rows-2 mb-4 place-items-center gap-2 w-full min-h-[20rem]'>
            <div className='w-full aspect-[16/9] rounded-lg'>
            <video src={samplevid} type='video/mp4' autoPlay loop playsInline muted className='w-full h-full object-cover rounded-lg'/>
            </div>
            <div className='w-full h-full'>

            <Map/>
            </div>
        </div>
     </Wrapper>
 )
}

export default Featured