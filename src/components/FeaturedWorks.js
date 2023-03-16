import React from 'react'

const FeaturedWorks = () => {
  return (
    <div className='w-full h-full bg-white pt-[200px] pb-10'>
        <section className='px-10 md:px-[160px] space-y-10'>
            <div className='py-11 relative'>
                <div className='absolute top-0 -right-4 md:-left-[-900px]  w-80 h-80 bg-[#9a7800] rounded-full filter blur-xl opacity-[6%]'></div>
                <h3 className='font-bold text-5xl md:text-6xl'>Featured Works</h3>
            </div>
            <div className='container rounded-lg  bg-[#E1E6F4]'>
                <div className='grid md:grid-cols-2'>
                    <div className='px-5 md:px-11'>
                        <div className='flex  pt-11 space-x-2'>
                            <p className='py-3 px-8 rounded-full border-gray-400 border-2'>Web design</p>
                            <p className='py-3 px-8 rounded-full border-gray-400 border-2'>Development</p>
                        </div>
                        <div className=' pt-[60px] justify-center items-center'>
                            <h3 className='font-bold text-5xl py-3'>TY-Lease</h3>
                        </div>
                        <div className=' md:text-xl'>
                            <p className='py-3'>We partnered with Ty-Lease Property Enterprise to create a visually stunning website that
                            effectively showcases their property listings.
                            </p>
                        </div>
                        <div className=' pt-10 pb-[130px]'>
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
                            <p className='py-3 rounded-full border-gray-400 border-2'>Web design</p>
                            <p className='py-3 rounded-full border-gray-400 border-2'>Development</p>
                        </div>
                        <div className='px-11 pt-[60px] justify-center items-center'>
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

            <div className='container rounded-lg  bg-[#E9F4E1]'>
                <div className='grid md:grid-cols-2'>
                    <div className='px-5 md:px-11'>
                        <div className='flex pt-11 space-x-2'>
                            <p className='py-3 rounded-full border-gray-400 border-2'>Web design</p>
                            <p className='py-3 rounded-full border-gray-400 border-2'>Development</p>
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
                <div className='absolute top-0 -right-4 md:-left-[-900px]  w-80 h-80 bg-[#9a7800] rounded-full filter blur-xl opacity-[6%]'></div>
                <div className='container rounded-lg border-gray-400 border-2 border-dashed py-10 items-center justify-center text-center '>
                    <button className='text-3xl font-semibold'>+ Create your project</button>
                </div>
            </div>
            

        </section>
      
    </div>
  )
}

export default FeaturedWorks
