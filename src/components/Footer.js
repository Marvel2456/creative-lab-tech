import React from 'react'
import {BiCopyright} from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='container w-full h-full pt-16'>
        <section className='px-10 md:px-[160px] bg-white'>
            <div className='flex'>
              <div className='flex pr-20 md:pr-16'>
                <h3>Creative labs</h3>
              </div>
              <ul className='flex space-x-3 md:space-x-12 md:pl-[56%]'>
                <li>Home</li>
                <li>Works</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className='justify-center items-center flex pt-24'>
              <h3 className='flex'><BiCopyright className='pt-1.5' size={20} /> 2023 creativelabs. All right reserved.</h3>
            </div>
        </section>
      
    </div>
  )
}

export default Footer
