import React, {useState} from 'react'
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleClick = () => {
        setNav(!nav)
      }

  return (
    <div className='bg-white text-black fixed z-10 w-full'>
        <nav className='relative mx-auto container py-4'>
           <div className='flex px-10 items-center justify-between md:px-[160px]'> 
                <div className='flex items-center'>
                    <h3>Creative Labs</h3>   
                </div>
                <ul className='hidden md:flex pr-2 space-x-6'>
                    <li className=''>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li className=''>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li className=''>
                        <NavLink to='/works'>Works</NavLink>
                    </li>
                    <li className=''>
                        <NavLink to='/services'>Services</NavLink>
                    </li>
                </ul>
                <ul className='hidden md:flex'><button className='rounded-full bg-[#036666] py-2 px-4 text-white'>Start a project</button></ul>
                <div onClick={handleClick} className='md:hidden'>
                    <HiOutlineMenuAlt1 className='w-5' size={30} />
                </div>
            </div>
            
        </nav>

        <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-10 h-[360px]'}>
            <li className='border-b-2 py-3 border-gray-400 w-full'><NavLink to='/'>Home</NavLink></li>
            <li className='border-b-2 py-3 border-gray-400 w-full'><NavLink to='/about'>About</NavLink></li>
            <li className='border-b-2 py-3 border-gray-400 w-full'><NavLink to='/works'>Works</NavLink></li>
            <li className='border-b-2 py-3 border-gray-400 w-full'><NavLink to='/services'>Services</NavLink></li>   
            <ul className='pt-4'><button className='rounded-full bg-[#036666] py-2 px-4 text-white'>Start a project</button></ul>
        </ul>
            
        
        

      
    </div>
  )
}

export default Navbar
