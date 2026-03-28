import { useState } from 'react'
import './App.css'
import { useRef } from 'react'

import Launch from './sections/Launch'
import Cruise from './sections/Cruise'
import Mars from './sections/Mars'
import Orbit from './sections/Orbit'

function App() {

  const launchref= useRef(null)
  const marsref= useRef(null)
  const cruiseref= useRef(null)
  const orbitref= useRef(null)

  return (
    <div className='overflow-hidden'>
      <Launch launchref = {launchref}
              marsref = {marsref}
              orbitref = {orbitref}
              cruiseref = {cruiseref}/>

      
      
      <Orbit orbitref = {orbitref}/>
      <Cruise cruiseref = {cruiseref}/>
      <Mars marsref = {marsref}/>
    </div>
  )
}

export default App
