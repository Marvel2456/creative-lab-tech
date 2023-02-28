import React, {useState} from 'react'
import Logo from '../assets/mylogo.svg'
import {HiOutlineMenuAlt1} from 'react-icons/hi'

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleClick = () => {
        setNav(!nav)
      }

  return (
    <div className='bg-white text-black fixed z-10 container'>
        <nav className='relative mx-auto container py-4'>
           <div className='flex px-10 items-center justify-between md:px-[160px]'> 
                <div className='flex items-center'>
                    <img src={Logo} className='h-[50px]' alt='/' />   
                </div>
                <ul className='hidden md:flex pr-2 space-x-6 font-bold'>
                    <li className=''>Home</li>
                    <li className=''>About</li>
                    <li className=''>Products</li>
                    <li className=''>Contact Us</li>
                </ul>
                <div onClick={handleClick} className='md:hidden'>
                    <HiOutlineMenuAlt1 className='w-5' size={30} />
                </div>
            </div>
            
        </nav>

        <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-8 h-[360px]'}>
            <li className='border-b-2 py-3 border-gray-400 w-full'>Home</li>
            <li className='border-b-2 py-3 border-gray-400 w-full'>About</li>
            <li className='border-b-2 py-3 border-gray-400 w-full'>Products</li>
            <li className='border-b-2 py-3 w-full'>Contact Us</li>    
        </ul>
            
        
        

      
    </div>
  )
}

export default Navbar
