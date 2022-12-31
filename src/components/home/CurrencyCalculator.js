import React from 'react'
import "./CurrencyCalculator.css"



const CurrencyCalculator = () => {
    return (
        <div className='h-auto w-full pl-[20px] md:pl-[80px] md:pr-[80px] pr-[20px] bg-[#010307] max-w-[1420px] m-auto  pt-0  sm:pt-8 pb-14'>
            <div className='border w-full h-[auto] grid sm:flex sm:item-start text-white justify-between'>
                <div className='border current_bx mt-2 mb-2 sm:pr-4 sm:mt-0 mb-4 sm:mb-0 w-full sm:max-w-[480px] h-[auto]'>
                    <h1>Bitcoin To Currency Calculator</h1>
                    <p>
                        Contact information: Include your name, email address, and phone number.
                        Professional summary: A brief summary of your professional experience and skills.
                    </p>
                    <button type='submit'>Learn More</button>
                </div>
                <div className='border current_bx sm:pl-6 sm:pr-0 mt-2 mb-2 sm:mt-0 mb-4 sm:mb-0 max-w-[600px] h-[400px]'>
                    <div className='cal-container'>
                        <h6>You have</h6>
                        <div className='cal_input_area'>
                            <input type="" />
                        </div>
                        <div className='cal_select_Area'>
                              <select>
                                    <option>USD</option>
                                    <option>USD</option>
                                    <option>USD</option>
                              </select>
                        </div>
                    </div>
                    <div className='cal-container'>
                        <h6>You have</h6>
                        <div className='cal_input_area'>
                            <input type="" />
                        </div>
                        <div className='cal_select_Area'>
                              <select>
                                    <option>BTC</option>
                                    <option>BTC</option>
                                    <option>BTC</option>
                              </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrencyCalculator