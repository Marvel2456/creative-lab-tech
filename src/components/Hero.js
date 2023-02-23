import React from 'react'
import HeroImg from '../assets/cube.jpg'


const Hero = () => {
  return (
    <div className='w-full h-full bg-white flex flex-col justify-between'>
   
        <div className='w-full h-[420px] bg-gradient-to-tr from-purple-500 to-red-300 justify-between m-auto relative'>
          <img src={HeroImg} className='w-full h-full object-cover absolute mix-blend-overlay' alt='/' />
            <div className='flex flex-col justify-center md:items-start w-full px-16 py-8'>
                <p className='text-2xl pt-24'>Design & Implementation</p>
                <h1 className='py-3 text-5xl md:7xl font-bold'>Software Excellence</h1>
                <p className='pb-3 text-2xl'>24/7 Professional Support</p>
                <button className='w-[242px] py-2 text-white border bg-[#5e2130] hover:bg-transparent hover:text-[#5e2130] rounded-md px-3'>Talk to us</button>
            </div>
            
            
        </div>
      
    </div>
  )
}

export default Hero
