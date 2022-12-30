import React from 'react'
import "./Hero.css"
import Hero2 from "../images/hand.PNG"
// import eth from "../images/eth1.PNG"


const Hero = () => {
    return (
        <div className='h-full  max-w-[1420px] m-auto w-full bg-[#000207] text-white'>
            <div className='hero_links absolute left-[-100px] bottom-[180px]  origin-bottom -rotate-90'>
                <div className='flex side-links items-center '>
                    <li className='list-none lg:ml-4 ml-1 mr-1 lg:mr-4'>LinkedIn</li>
                    <li className='list-none lg:ml-4 ml-1 mr-1 lg:mr-4'>Twitter</li>
                    <li className='list-none lg:ml-4 ml-1 mr-1 lg:mr-4'>Facebook</li>
                    <li className='list-none lg:ml-4 ml-1 mr-1 lg:mr-4'>Instagram</li>
                </div>
            </div>
            <div className='hero-container pl-[40px] pr-[40px] pt-[40px] pb-[10px] w-full justify-between flex'>
                <div className='hero-1 w-[90%] ml-10 mr-10 h-[auto] pt-10 md:pt-20'>
                    <h1 className='' id='hero-text'>Fastest Way</h1>
                    <h1 className='' id='hero-text'>Follow Markets</h1>
                    <p id='hero-sub'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem iusto, consectetur provident rerum velit debitis ab
                    </p>
                    <button id='hero-btn'>Explore Now</button>
                </div>
                <div className='hero-2 w-full  ml-2 mr-10  lg:h-[600px] flex justify-center '>
                    <img src={Hero2} alt="" className='max-w-[] object-contain' />
                </div>
            </div>
        </div>
    )
}

export default Hero