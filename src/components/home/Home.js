import React from 'react'
// import Charts from '../charts/Charts'
import Navbar from '../navbar/Navbar'
import CryptoCarousel from './CryptoCarousel'
import Hero from './Hero'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-[77px]'>
        <Hero />
        <CryptoCarousel />
        {/* <Charts/> */}
      </div>
    </div>
  )
}

export default Home