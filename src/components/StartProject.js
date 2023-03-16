import React from 'react'
import {HiOutlineArrowRight} from 'react-icons/hi'

const StartProject = () => {
  return (
    <div className='w-full h-full bg-white pt-[100px] pb-10'>
        <section className='container bg-[#0E6960] text-[#FAFAFA]'>
            <div className='pt-[100px] text-center'>
                <h2 className='text-3xl md:text-7xl font-bold py-10'>Have an Idea</h2>
                <p className='md:text-xl py-10'>Bring your ideas to life what ever it may be</p>
            </div>
            <div className='flex py-4 pb-[120px] items-center justify-center'>
              <div>
                <button className='flex py-3 px-[100px] bg-[#FAFAFA] text-[#0E6960] rounded-full text-xl'>Start a project&nbsp; 
                  <div className='pt-1.5'><HiOutlineArrowRight size={20} /></div>
                </button>
              </div>
              
                
            </div>
            <div>
               
            </div>

        </section>
      
    </div>
  )
}

export default StartProject