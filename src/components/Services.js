import React from 'react'
import {FiFigma} from 'react-icons/fi'
import {CgWebsite} from 'react-icons/cg'
import {FaMobile} from 'react-icons/fa'
import {MdOutlineEngineering} from 'react-icons/md'
import {ImDatabase} from 'react-icons/im'
import {MdPayments} from 'react-icons/md'

const Services = () => {
  return (
    <div>
      <section className='space-y-8'>
        <div className='flex px-10 justify-center items-center mt-24 md:px-[160px]'>
          <h2 className='max-w-md text-3xl md:text-4xl font-bold text-center'>
            Creative Lab Technologies
          </h2>
        </div>
        <div className='flex px-10 justify-center items-center md:px-[160px]'>
          <h4 className='text-center text-2xl'>
            What do we do?
          </h4>
        </div>
        <div className='grid px-10 md:grid-cols-3 mt-10 gap-12 pb-10 md:px-[160px]'>
          <div className='justify-center items-center'>
            <div className='flex'>
              <FiFigma size={20} />
              <h4 className='font-bold px-2'>Product Designs</h4>
            </div>
            
            <p>
              We offer unique brand designs, customization, UI/UX designs, Product designs,
               and lots more.
            </p>
          </div>

          <div className='justify-center items-center'>
            <div className='flex'>
              <CgWebsite size={20} />
              <h4 className='font-bold px-2'>Website Development</h4>
            </div>
            
            <p>
              We offer unique brand designs, customization, UI/UX designs, Product designs,
               and lots more.
            </p>
          </div>

          <div className='justify-center items-center'>
            <div className='flex'>
              <FaMobile size={20} />
              <h4 className='font-bold px-2'>Mobile Apps Development</h4>
            </div>
            
            <p>
              We offer unique brand designs, customization, UI/UX designs, Product designs,
               and lots more.
            </p>
          </div>

          <div className='justify-center items-center'>
            <div className='flex'>
              <MdOutlineEngineering size={20} />
              <h4 className='font-bold px-2'>Software Engineering</h4>
            </div>
            
            <p>
              We offer unique brand designs, customization, UI/UX designs, Product designs,
               and lots more.
            </p>
          </div>

          <div className='justify-center items-center'>
            <div className='flex'>
              <ImDatabase size={20} />
              <h4 className='font-bold px-2'>Database Management</h4>
            </div>
            
            <p>
              We offer unique brand designs, customization, UI/UX designs, Product designs,
               and lots more.
            </p>
          </div>

          <div className='justify-center items-center'>
            <div className='flex'>
              <MdPayments size={20} />
              <h4 className='font-bold px-2'>Payment Integration</h4>
            </div>
            
            <p>
              We offer unique brand designs, customization, UI/UX designs, Product designs,
               and lots more.
            </p>
          </div>

        </div>
      </section>
      
    </div>
  )
}

export default Services
