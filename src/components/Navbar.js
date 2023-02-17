import React, {useState} from 'react'
import Logo from '../assets/mylogo.svg'
import {HiOutlineMenuAlt1} from 'react-icons/hi'

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleClick = () => {
        setNav(!nav)
      }

  return (
    <div className='bg-gray-300 text-black fixed z-10 w-screen h-[80px]'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <img src={Logo} className='h-[50px]' alt='/' />   
            </div>
            <ul className='hidden md:flex pr-2'>
                <li className='p-4'>Home</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Products</li>
                <li className='p-4'>Contact Us</li>
            </ul>
            <div onClick={handleClick} className='md:hidden'>
                <HiOutlineMenuAlt1 className='w-5' size={30} />
            </div>
            
        </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-gray-300 w-full px-8'}>
            <li className='border-b-2 py-3 border-gray-400 w-full'>Home</li>
            <li className='border-b-2 py-3 border-gray-400 w-full'>About</li>
            <li className='border-b-2 py-3 border-gray-400 w-full'>Products</li>
            <li className='border-b-2 py-3 w-full'>Contact Us</li> 
            
        </ul>
        
        

      
    </div>
  )
}

export default Navbar
