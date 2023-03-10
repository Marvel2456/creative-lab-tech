import React from 'react'
import Panel from '../assets/panel.jpg'

const AboutUs = () => {
  return (
    <div className='w-full h-full bg-white'>
      <section className='flex px-10 md:px-[160px]'>
        <div className='grid md:grid-cols-2'>
          <div className='pb-3'>
            <h3 className='font-bold text-4xl md:text-5xl'>Delivering exceptional</h3>
            <h3 className='font-bold text-4xl md:text-5xl'>solutions and results</h3>
          </div>
          <div className=''>
            <p>We take pride in creating custom solutions that perfectly fit your business needs. Whatever your requirements may be, we have the expertise and creativity 
              to make a positive impact on your business through our design and development services.</p>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default AboutUs
