import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";
import Logo from "../images/lo.PNG"


const Navbar = () => {
    return (
        <div className='max-w-[1420px] m-auto'>

            <div className="nav">
                <input type="checkbox" id="nav-check" />
                <div className="nav-header">
                    <div className=''>
                      <img src={Logo} alt='' className='w-16' />
                    </div>
                    <div className="nav-title">
                        <div>
                            <Link to="/">Crypto</Link>
                        </div>
                    </div>
                </div>
                <div className="nav-btn">
                    <label htmlFor="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div className="nav-links">
                    <Link className='nav-link' to="">Buy Crypto</Link>
                    <Link className='nav-link' to="">Markets</Link>
                    <Link className='nav-link' to="">Trade</Link>
                    <Link className='nav-link' to="">Earn</Link>
                    <Link className='nav-link' to="">Finance</Link>
                    <Link className='nav-link' to="">NFT</Link>
                    <button className='nav-btn1 text-white'><Link to="/register">Register</Link></button>
                    <button className='nav-btn2 text-white'>Connect Wallet</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar