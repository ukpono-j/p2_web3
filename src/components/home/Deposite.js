import React from 'react';
import Coin from  "../images/coin.PNG";
import "./Deposite.css";


const Deposite = () => {
    return (
        <div className='h-auto dddd max-w-[1420px] m-auto pl-[20px] lg:pl-[170px] lg:pr-[170px] pr-[20px] bg-[#010307] '>
            <div className='text-white md:flex grid items-center w-full h-[auto]'>
                <div className='deposite-text w-full lg:pr-10 '>
                    <h1>Deposite crypto Earn Interest</h1>
                    <p>
                        Loreum ipsum is simply dummy text of the printing and typesetting industry, lorem ipsum 
                        has been the industry's standard. it was popularised in the 1960s with  the release on letraset sheets containing
                    </p>
                    <p>
                        Contact information: Include your name, email address, and phone number.
                        Professional summary: A brief summary of your professional experience and skills.
                    </p>
                    <button type='submit'>Learn more</button>
                </div>
                <div className='w-full h-[auto] flex justify-center'>
                   <img src={Coin} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Deposite