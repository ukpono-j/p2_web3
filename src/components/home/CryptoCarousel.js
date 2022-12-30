import React from 'react'
import "./Crypto.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Charts from '../charts/Charts';
import { AiOutlineFall, AiOutlineRise } from 'react-icons/ai';
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { SiDash } from "react-icons/si"
import { TbCurrencyLitecoin } from "react-icons/tb"
import CryptoCarouselFall from "../home/CryptoCarouselFall"
import { FaEthereum } from "react-icons/fa"
import { SiRipple } from "react-icons/si"


const options = {
    // margin: 30,
    responsiveClass: true,
    // nav: true,
    // dots: false,
    // autoplay: false,
    // navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 2,
        },
        600: {
            items: 3,
        },
        700: {
            items: 4,
        },
        1000: {
            items: 6,

        }
    },
};

const CryptoCarousel = () => {
    return (
        <div className='crypto-container bg-[#010307] h-[430px] p-4 md:p-0'>
            <h1>Top Crypto Now</h1>
            <OwlCarousel items="6" autoPlay dots className='owl-theme'  {...options} margin={10} >
                <div className='item pl-3 pr-3 pt-6 pb-3'>
                    <div className='item-title h-auto flex items-center w-full'>
                        <div className='item-icon w-11 h-11 rounded-xl'>
                            <SiDash />
                        </div>
                        <div className='token-title pl-2'>
                            <h4>Dash<span>(Dash)</span></h4>
                        </div>
                    </div>
                    <div className='item-subtitle h-auto w-full'>
                        $62,582, 435,215
                    </div>
                    <div className='stock-area flex items-center justify-between h-auto w-full'>
                        <div>
                            <h5 className='flex items-center text-[#0BB555]'>(+15.25%) <div className='ml-1 rise text-[#067B41]'><AiOutlineRise /></div></h5>
                            <p>24H Change</p>
                        </div>
                        <div>
                            <h5>$2.100</h5>
                            <p>24H Volume</p>
                        </div>
                    </div>
                    <div className='token-chart mt-2 h-16 w-full'>
                        <Charts />
                    </div>
                    <div className='items-btn-container mt-10  w-full h-auto'>
                        <button type='submit'>Buy Coin</button>
                    </div>
                </div>
                <div className='item pl-3 pr-3 pt-6 pb-3'>
                    <div className='item-title h-auto flex items-center w-full'>
                        <div className='item-icon w-11 h-11 rounded-xl'>
                            <BsCurrencyBitcoin />
                        </div>
                        <div className='token-title pl-2'>
                            <h4>Btc<span>(Bitcoin)</span></h4>
                        </div>
                    </div>
                    <div className='item-subtitle h-auto w-full'>
                        $62,582, 435,215
                    </div>
                    <div className='stock-area flex items-center justify-between h-auto w-full'>
                        <div>
                            <h5 className='flex items-center text-[#0BB555]'>(+15.25%) <div className='ml-1 fall text-[#CBAE4F]'><AiOutlineFall /></div></h5>
                            <p>24H Change</p>
                        </div>
                        <div>
                            <h5>$2.100</h5>
                            <p>24H Volume</p>
                        </div>
                    </div>
                    <div className='token-chart mt-2 h-16 w-full'>
                        <CryptoCarouselFall />
                    </div>
                    <div className='items-btn-container mt-10  w-full h-auto'>
                        <button type='submit'>Buy Coin</button>
                    </div>
                </div>
                <div className='item pl-3 pr-3 pt-6 pb-3'>
                    <div className='item-title h-auto flex items-center w-full'>
                        <div className='item-icon w-11 h-11 rounded-xl'>
                            <TbCurrencyLitecoin />
                        </div>
                        <div className='token-title pl-2'>
                            <h4>Lite<span>(Litecoin)</span></h4>
                        </div>
                    </div>
                    <div className='item-subtitle h-auto w-full'>
                        $62,582, 435,215
                    </div>
                    <div className='stock-area flex items-center justify-between h-auto w-full'>
                        <div>
                            <h5 className='flex items-center text-[#0BB555]'>(+15.25%) <div className='ml-1 rise text-[#067B41]'><AiOutlineRise /></div></h5>
                            <p>24H Change</p>
                        </div>
                        <div>
                            <h5>$2.100</h5>
                            <p>24H Volume</p>
                        </div>
                    </div>
                    <div className='token-chart mt-2 h-16 w-full'>
                        <Charts />
                    </div>
                    <div className='items-btn-container mt-10  w-full h-auto'>
                        <button type='submit'>Buy Coin</button>
                    </div>
                </div>
                <div className='item pl-3 pr-3 pt-6 pb-3'>
                    <div className='item-title h-auto flex items-center w-full'>
                        <div className='item-icon w-11 h-11 rounded-xl'>
                            <FaEthereum />
                        </div>
                        <div className='token-title pl-2'>
                            <h4>eth<span>(ethereum)</span></h4>
                        </div>
                    </div>
                    <div className='item-subtitle h-auto w-full'>
                        $62,582, 435,215
                    </div>
                    <div className='stock-area flex items-center justify-between h-auto w-full'>
                        <div>
                            <h5 className='flex items-center text-[#0BB555]'>(+15.25%) <div className='ml-1 rise text-[#067B41]'><AiOutlineRise /></div></h5>
                            <p>24H Change</p>
                        </div>
                        <div>
                            <h5>$2.100</h5>
                            <p>24H Volume</p>
                        </div>
                    </div>
                    <div className='token-chart mt-2 h-16 w-full'>
                        <Charts />
                    </div>
                    <div className='items-btn-container mt-10  w-full h-auto'>
                        <button type='submit'>Buy Coin</button>
                    </div>
                </div>
                <div className='item pl-3 pr-3 pt-6 pb-3'>
                    <div className='item-title h-auto flex items-center w-full'>
                        <div className='item-icon w-11 h-11 rounded-xl'>
                            <SiRipple />
                        </div>
                        <div className='token-title pl-2'>
                            <h4>xrp<span>(Ripple)</span></h4>
                        </div>
                    </div>
                    <div className='item-subtitle h-auto w-full'>
                        $62,582, 435,215
                    </div>
                    <div className='stock-area flex items-center justify-between h-auto w-full'>
                        <div>
                            <h5 className='flex items-center text-[#0BB555]'>(+15.25%) <div className='ml-1 fall text-[#CBAE4F]'><AiOutlineFall /></div></h5>
                            <p>24H Change</p>
                        </div>
                        <div>
                            <h5>$2.100</h5>
                            <p>24H Volume</p>
                        </div>
                    </div>
                    <div className='token-chart mt-2 h-16 w-full'>
                        <CryptoCarouselFall />
                    </div>
                    <div className='items-btn-container mt-10  w-full h-auto'>
                        <button type='submit'>Buy Coin</button>
                    </div>
                </div>
                <div class='item pl-3 pr-3 pt-6 pb-3'>
                    <div className='item-title h-auto flex items-center w-full'>
                        <div className='item-icon w-11 h-11 rounded-xl'>
                            <SiDash />
                        </div>
                        <div className='token-title pl-2'>
                            <h4>Dash<span>(Dash)</span></h4>
                        </div>
                    </div>
                    <div className='item-subtitle h-auto w-full'>
                        $62,582, 435,215
                    </div>
                    <div className='stock-area flex items-center justify-between h-auto w-full'>
                        <div>
                            <h5 className='flex items-center text-[#0BB555]'>(+15.25%) <div className='ml-1 rise text-[#067B41]'><AiOutlineRise /></div></h5>
                            <p>24H Change</p>
                        </div>
                        <div>
                            <h5>$2.100</h5>
                            <p>24H Volume</p>
                        </div>
                    </div>
                    <div className='token-chart mt-2 h-16 w-full'>
                        <Charts />
                    </div>
                    <div className='items-btn-container mt-10  w-full h-auto'>
                        <button type='submit'>Buy Coin</button>
                    </div>
                </div>


            </OwlCarousel>;
        </div>
    )
}

export default CryptoCarousel