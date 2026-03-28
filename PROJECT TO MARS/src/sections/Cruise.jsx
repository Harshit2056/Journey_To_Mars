import React from 'react'
import image3 from '../assets/image3.png'

const Cruise = ({cruiseref}) => {
  return (
    <div ref={cruiseref} className='h-screen w-screen'>
      <div className='absolute'>
        <img className='h-screen w-screen object-cover' src={image3} alt="Launch" />
      </div>
    </div>
  )
}

export default Cruise
