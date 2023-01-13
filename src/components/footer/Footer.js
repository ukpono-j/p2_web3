import React from 'react'
import "./Footer.css"
import { FiSend } from "react-icons/fi"
import Logo from "../images/lo1.PNG"
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <div className='=w-full grid md:flex justify-between footer h-[auto] text-white max-w-[1420px] m-auto pl-[20px] lg:pl-[170px] lg:pr-[170px] pr-[20px]  pt-9  sm:pt-9 pb-10 bg-[#021214]'>
            <div className='md:w-[280px] w-100% h-[170px] flex flex-col justify-between'>
                <div className="footer-logo flex items-center">
                    <div className=''>
                        <img src={Logo} alt='' className='w-16' />
                    </div>
                    <div className="nav-title">
                        <div>
                            <Link to="/">Crypto</Link>
                        </div>
                    </div>
                </div>
                <p>Lorem ipsum is simply dummy text of the printing and typesetting</p>
                <p>info@crptoon.com</p>
            </div>
            <div>
                <h4>Project</h4>
                <li>Blockchain</li>
                <li>Security</li>
                <li>API</li>
                <li>Interest</li>
            </div>
            <div>
                <h4>Cryptocurrency</h4>
                <li>Blockchain</li>
                <li>Security</li>
                <li>API</li>
                <li>Interest</li>
            </div>
            <div>
                <h4>Resources</h4>
                <li>Blockchain</li>
                <li>Security</li>
                <li>API</li>
                <li>Interest</li>
            </div>
            <div className='md:w-[220px] w-100% h-[auto] '>
                <h5>Subscribe to our newsletter</h5>
                <div className='flex items-center mt-6 mb-4'>
                    <div className='w-full'>
                        <input type="text" className='w-full h-[34px] rounded' placeholder='Your Email...' />
                    </div>
                    <div className='w-[46px] h-[34px] ml-2 new-send flex items-center justify-center'><FiSend /></div>
                </div>
            </div>
        </div>
    )
}

export default Footer