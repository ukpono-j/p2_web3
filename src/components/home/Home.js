import React from 'react'
// import Charts from '../charts/Charts'
import Navbar from '../navbar/Navbar'
import CryptoCarousel from './CryptoCarousel'
import Hero from './Hero'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <CryptoCarousel/>
        {/* <Charts/> */}
    </div>
  )
}

export default Home