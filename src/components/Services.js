import React from 'react'


const Services = () => {
  return (
    <div>
      <section className='space-y-8 w-full'>
        <div className='flex px-10 pt-[100px] md:px-[160px]'>
          <h2 className='text-3xl md:text-6xl font-bold'>
            Our Services
          </h2>
        </div>
        <div className='grid px-10 md:grid-cols-2 pt-[80px] gap-12 pb-10 md:px-[160px]'>
          <div className=''>
            <h3 className='text-3xl md:text-4xl font-semibold pb-7'>Design</h3>
            <p>We offer design services from web designs, landing pages, marketing pages, mobile applications and web applications.</p>
            
          </div>

          <div className='justify-center items-center'>
            <h3 className='text-3xl md:text-4xl font-semibold pb-7'>Development</h3>
            <p>High end development of designs both on mobile and web platforms till your products and solutions are live on the web.</p>
          </div>

          <div className='justify-center items-center'>
            <h3 className='text-3xl md:text-4xl font-semibold pb-7'>SEO</h3>
            <p>We help you say on top with our SEO expertise. Your web platforms would be optimized for better rankings.</p>
            
          </div>

          <div className='justify-center items-center'>
            <h3 className='text-3xl md:text-4xl font-semibold pb-7'>UI/UX Expertise</h3>
            <p>We create beautiful and functional exceptional interfaces that improve your customer experience on mobile and web.</p>
            
          </div>

          <div className='justify-center items-center'>
            <h3 className='text-3xl md:text-4xl font-semibold pb-7'>Eccomerce</h3>
            <p>We create a tailored ecommerce experience for your business based on your needs on both mobile and web platforms.</p>
            
          </div>

          <div className='justify-center items-center'>
            <h3 className='text-3xl md:text-4xl font-semibold pb-7'>SaaS Platform</h3>
            <p>We create the perfect software and all you need to stand out from the competition. Offering a high end designs and output to take your platform 0 to 1.</p>
            
          </div>

        </div>
      </section>
      
    </div>
  )
}

export default Services
