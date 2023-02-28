import React from 'react'
import AboutUs from '../components/AboutUs'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Services from '../components/Services'

const Home = () => {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
    </div>
  )
}

export default Home
