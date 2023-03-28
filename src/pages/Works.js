import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { HiOutlineArrowRight } from 'react-icons/hi';

const Works = () => {
  return (
    <div className='w-full h-full bg-white]'>
      <Navbar />
      <section className='px-10 md:px-[160px] pt-[200px]'>
        <div className='space-y-10'>
          <h3 className='text-8xl font-bold'>Our Works</h3>
          <div className='relative'>
            <div className='absolute top-0 -right-4 md:-left-[-400px]  w-80 h-80 bg-[#9a7800] rounded-full filter blur-xl opacity-[6%]'></div>
            <p>Here are some of our latest works</p>
          </div>
          
        </div>
      </section>

      <div className='w-full h-full bg-white pt-[200px] pb-10'>
        <section className='px-10 md:px-[160px] space-y-10'>
        
            <div className='container rounded-lg  bg-[#E1E6F4]'>
                <div className='grid md:grid-cols-2'>
                    <div className='px-5 md:px-11'>
                        <div className='flex  pt-11 space-x-2'>
                            <p className='py-3 px-8 rounded-full border-gray-400 border-2'>Web design</p>
                            <p className='py-3 px-8 rounded-full border-gray-400 border-2'>Development</p>
                        </div>
                        <div className='pt-[60px] justify-center items-center'>
                            <h3 className='font-bold text-5xl py-3'>TY-Lease</h3>
                        </div>
                        <div className=' md:text-xl'>
                            <p className='py-3'>We partnered with Ty-Lease Property Enterprise to create a visually stunning website that
                            effectively showcases their property listings.
                            </p>
                        </div>
                        <div className='pt-10 pb-[130px]'>
                            <button className='py-3 px-8 rounded-full border-gray-400 border-2'>View live website</button>
                        </div>
                    </div>
                
                    <div className='px-5 md:px-11'>
                        {/* add images */}
                    </div>
                </div>
                
            </div>

            <div className='container rounded-lg  bg-[#E9E1F4]'>
                <div className='grid md:grid-cols-2'>
                    <div className='px-5 md:px-11'>
                        <div className='flex pt-11 space-x-2'>
                            <p className='py-3 px-8 rounded-full border-gray-400 border-2'>Web design</p>
                            <p className='py-3 px-8 rounded-full border-gray-400 border-2'>Development</p>
                        </div>
                        <div className='pt-[60px] justify-center items-center'>
                            <h3 className='font-bold text-5xl py-3'>TY-Lease</h3>
                        </div>
                        <div className='md:text-xl'>
                            <p className='py-3'>We partnered with Ty-Lease Property Enterprise to create a visually stunning website that
                            effectively showcases their property listings.
                            </p>
                        </div>
                        <div className='pt-10 pb-[130px]'>
                            <button className='py-3 px-8 rounded-full border-gray-400 border-2'>View live website</button>
                        </div>
                    </div>
                
                    <div className=''>
                        {/* add images */}
                    </div>
                </div>
                
            </div>

            <div className='container rounded-lg  bg-[#E9F4E1] w-full'>
                <div className='grid md:grid-cols-2'>
                    <div className='px-5 md:px-11'>
                        <div className='flex pt-11 space-x-2'>
                            <p className='py-3 px-8 rounded-full border-gray-400 border-2'>Web design</p>
                            <p className='py-3 px-8 rounded-full border-gray-400 border-2'>Development</p>
                        </div>
                        <div className='pt-[60px] justify-center items-center'>
                            <h3 className='font-bold text-5xl py-3'>TY-Lease</h3>
                        </div>
                        <div className='md:text-xl'>
                            <p className='py-3'>We partnered with Ty-Lease Property Enterprise to create a visually stunning website that
                            effectively showcases their property listings.
                            </p>
                        </div>
                        <div className='pt-10 pb-[130px]'>
                            <button className='py-3 px-8 rounded-full border-gray-400 border-2'>View live website</button>
                        </div>
                    </div>
                
                    <div className=''>
                        {/* add images */}
                    </div>
                </div>
                
            </div>
            <div className='relative'>
                <div className='container rounded-lg border-gray-400 border-2 border-dashed py-10 items-center justify-center text-center '>
                    <button className='text-3xl font-semibold'>+ Create your project</button>
                </div>
            </div>
            

        </section>
      
        </div>

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

        </section>
      
        </div>
        <Footer />
      
      
    </div>
  )
}

export default Works
