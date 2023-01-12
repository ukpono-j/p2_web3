import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./HomeLogo.css"
import Logo1 from "../../images/logo1.PNG"


const options = {
    // margin: 30,
    responsiveClass: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 2,
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
            items: 7,

        }
    },
};


const HomeLogo = () => {
    return (
        <div className='home_logo  h-[auto] pt-4 pb-4 bg-[#010307] max-w-[1420px] m-auto'>
            <OwlCarousel items="7" autoPlay dots className='owl-theme -z-10'  {...options} margin={10} >
                <div className='item'>
                    <img src={Logo1} alt='' />
                </div>
                <div className='item'>
                    <img src={Logo1} alt='' />
                </div>
                <div className='item'>
                    <img src={Logo1} alt='' />
                </div>
                <div className='item'>
                    <img src={Logo1} alt='' />
                </div>
                <div className='item'>
                    <img src={Logo1} alt='' />
                </div>
                <div className='item'>
                    <img src={Logo1} alt='' />
                </div>
                <div className='item'>
                    <img src={Logo1} alt='' />
                </div>


            </OwlCarousel>;
        </div>
    )
}

export default HomeLogo