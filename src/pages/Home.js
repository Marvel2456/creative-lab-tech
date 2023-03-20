import React from 'react'
import AboutUs from '../components/AboutUs'
import FeaturedWorks from '../components/FeaturedWorks'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import StartProject from '../components/StartProject'

const Home = () => {
  return (
    <div className='container mx-auto' name="">
      <Navbar />
      <Hero />
      <AboutUs />
      <FeaturedWorks />
      <Services />
      <StartProject />
      <Footer />
    </div>
  )
}

export default Home
