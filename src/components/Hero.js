import React from 'react'


const Hero = () => {
  return (
    <div className='w-full h-full bg-white flex flex-col justify-between'>
   
        <div className='w-full justify-between m-auto relative'>
          
            <div className='flex px-10 flex-col justify-center md:items-start w-full md:px-[160px] py-8'>
              <div className=' pt-[60px] md:pt-[100px]'>
                <h1 className='py-2 text-4xl md:text-8xl font-bold'>Creative design studio</h1>
                <h1 className='py-2 text-4xl md:text-8xl font-bold'>helping businesses craft</h1>
                <h1 className='py-2 text-4xl md:text-8xl font-bold'>meaniful experiences</h1>
              </div>
              <div className='py-12 relative'>
                <div className='absolute top-0 -right-4 md:-left-[-300px]  w-80 h-80 bg-[#9a7800] rounded-full filter blur-xl opacity-[10%]'></div>
                <div className='space-y-2 md:text-xl relative'>
                  <p>At creative labs, we are a design and development studio, we work with clients and startups</p>
                  <p>and established brands to create solutions that thrives and moves business growth. We</p>
                  <p>work closely with brands on all kind of projects on a small and large scale basis</p>
                </div>
                <ul className='pt-12'><button className='rounded-full bg-[#036666] py-2 px-16 text-white'>Start a project</button></ul>
              </div>
              
              
            </div>
            
            
        </div>
      
    </div>
  )
}

export default Hero
