import React from 'react'
import image1 from '../assets/page1.jpeg'

import 'remixicon/fonts/remixicon.css'
import gif from '../assets/Rocket.png'
import { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger) 




const Launch = ({launchref,marsref,cruiseref,orbitref}) => {

    const handleScroll = (Ref) => {
    Ref.current.scrollIntoView({
      behavior: "smooth"
    });
  };

  const imgref=useRef(null)

  useGSAP(()=>{
      gsap.to(imgref.current,{
        scale:0.5,
        y:-20,
        
        duration:2,
          scrollTrigger:{
            trigger:imgref.current,
            start:"top 28%",
            end:"top -100%",
            scrub:2
          }
      })
  
    })


  return (
    <div ref={launchref} className='w-screen h-screen '>
      <div className='absolute'>
        <img className='h-screen w-screen object-cover' src={image1} alt="Launch" />
      </div>

      <nav className='relative h-[5vw]  font-[font1] flex justify-between items-center pl-[5vw] pr-[5vw] bg-slate-900/40 backdrop-blur-md text-white'>
        <div className='text-[1.8vw] font-extrabold'>
            PSLV I <span className='text-[1.3vw] opacity-55 font-normal'>MISSION</span>
        </div>
        <div className='flex gap-[1.5vw] text-[1.2vw] opacity-55'>
            <button onClick={()=> handleScroll(launchref)} className="cursor-pointer">LAUNCH</button>
            <button onClick={()=> handleScroll(orbitref)} className="cursor-pointer">ORBIT</button>
            <button onClick={()=> handleScroll(cruiseref)} className="cursor-pointer">CRUISE</button>
            <button onClick={()=> handleScroll(marsref)} className="cursor-pointer">MARS</button>
        </div>
        <div className='text-[1.6vw] opacity-55'>
            <button className="cursor-pointer"><i className="ri-menu-3-line"></i></button>
        </div>
      </nav>

      <div className='relative top-[0.8vw] text-center text-[6vw] text-white/40 tracking-[0.2em] font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]'>
        JOURNEY TO MARS
      </div>

      <div ref={imgref}> 
        <img src={gif} alt="" className='relative left-[35vw] h-[30vw] top-[6vw]' />
      </div>
    </div>
  )
}

export default Launch
