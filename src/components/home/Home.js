import React from 'react'
// import Charts from '../charts/Charts'
import Navbar from '../navbar/Navbar'
import CryptoCarousel from './CryptoCarousel'
import CurrencyCalculator from './CurrencyCalculator'
import Deposite from './Deposite'
import Hero from './Hero'
import HomeLogo from './homeLogo_Section/HomeLogo'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-[77px]'>
        <Hero />
        <CryptoCarousel />
        <CurrencyCalculator/>
        <Deposite/>
        <HomeLogo/>
        {/* <Charts/> */}
      </div>
    </div>
  )
}

export default Home