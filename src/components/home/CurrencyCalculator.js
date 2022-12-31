import React from 'react'
import "./CurrencyCalculator.css"



const CurrencyCalculator = () => {
    return (
        <div className='h-auto w-full pl-[20px] md:pl-[80px] md:pr-[80px] pr-[20px] bg-[#010307] max-w-[1420px] m-auto   pt-10 pb-14'>
            <div className='border w-full h-[auto] grid sm:flex sm:item-start text-white justify-between'>
                <div className='border current_bx max-w-[480px] h-[auto]'>
                    <h1>Bitcoin To Currency Calculator</h1>
                    <p>
                        Contact information: Include your name, email address, and phone number.
                        Professional summary: A brief summary of your professional experience and skills.
                    </p>
                    <button type='submit'>Learn More</button>
                </div>
                <div className='border current_bx max-w-[600px] h-[400px]'>
                    Contact information: Include your name, email address, and phone number.
                    Professional summary: A brief summary of your professional experience and skills, highlighting your strengths as a frontend developer.
                </div>
            </div>
        </div>
    )
}

export default CurrencyCalculator