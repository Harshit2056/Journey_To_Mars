import React from 'react'
import { useRef } from 'react'
import image2 from '../assets/page2.png'

const Orbit = ({orbitref}) => {


  return (
    <div ref={orbitref} className='h-screen w-screen'>
      <div className='absolute'>
        <img className='h-screen w-screen object-cover' src={image2} alt="Launch" />
      </div>
    </div>
  )
}

export default Orbit
