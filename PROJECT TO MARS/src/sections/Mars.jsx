import React from 'react'
import image4 from '../assets/image4.png'

const Mars = ({marsref}) => {
  return (
    <div ref={marsref} className='h-screen w-screen'>
      <div className='absolute'>
        <img className='h-screen w-screen object-cover' src={image4} alt="Launch" />
      </div>
    </div>
  )
}

export default Mars
