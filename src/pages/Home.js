import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Services from '../components/Services'

const Home = () => {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <Hero />
      <Services />
    </div>
  )
}

export default Home
