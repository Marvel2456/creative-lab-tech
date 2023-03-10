import React from 'react'

const FeaturedWorks = () => {
  return (
    <div className='w-full h-full bg-white pt-[100px] pb-10'>
        <section className='grid px-10 md:px-[160px] space-y-5'>
            <div>
                <h3 className='font-bold text-5xl'>Featured Works</h3>
            </div>
            <div className='container rounded-lg grid md:grid-2 bg-[#E1E6F4]'>
                <div>
                    <div className='flex px-11 py-11 space-x-2'>
                        <p className='py-3 px-8 rounded-full border-black border-2'>Web design</p>
                        <p className='py-3 px-8 rounded-full border-black border-2'>Development</p>
                    </div>
                </div>
                
                <div className=''>

                </div>
            </div>

        </section>
      
    </div>
  )
}

export default FeaturedWorks
