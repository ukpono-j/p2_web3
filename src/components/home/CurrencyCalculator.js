import React from 'react'
import "./CurrencyCalculator.css"
import Paypal from "../images/paypal.png"
import Visa from "../images/visa1.png"
import Visa1 from "../images/visa.jpg"


const CurrencyCalculator = () => {
    return (
        <div className='cc h-auto w-full pl-[20px] lg:pl-[170px] lg:pr-[170px] pr-[20px] bg-[#010307] max-w-[1420px] m-auto  pt-0  sm:pt-8 pb-14'>
            <div className='w-full h-[auto] grid md:flex md:item-start text-white justify-between'>
                <div className='current_bx pb-10 mt-2 mb-2 sm:pr-4 sm:mt-0 mb-4 sm:mb-0 w-full md:max-w-[480px] h-[auto]'>
                    <h1 className='current-ff'>Bitcoin To Currency Calculator</h1>
                    <p>
                        Contact information: Include your name, email address, and phone number.
                        Professional summary: A brief summary of your professional experience and skills.
                    </p>
                    <button type='submit'>Learn More</button>
                </div>
                <div className='current_bx f flex items-center sm:pl-6 sm:pr-0 mt-2 mb-2 sm:mt-0 mb-4 sm:mb-0 w-full h-[auto]'>
                    <div className='current-new-container w-full'>
                        <div className='cal-container'>
                            <h6>You have</h6>
                            <div className='flex items-center pt-2'>
                                <div className='cal_input_area'>
                                    <input type="" value="$21,0000" />
                                </div>
                                <div className='cal_select_Area m-2'>
                                    <select>
                                        <option>USD</option>
                                        <option>USD</option>
                                        <option>USD</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='cal-container mt-4'>
                            <h6>You have</h6>
                            <div className='flex pt-2 items-center'>
                                <div className='cal_input_area'>
                                    <input type="" value="$21,0000" />
                                </div>
                                <div className='cal_select_Area m-2'>
                                    <select>
                                        <option>BTC</option>
                                        <option>BTC</option>
                                        <option>BTC</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='pt-10 pb-7'>
                            <h1 className='text-center'>We accept</h1>
                            <div className='flex justify-center pt-3  items-center'>
                                <div className='w-full h-12 rounded-xl m-1 flex justify-center items-center bg-[#152734]'><img src={Paypal} alt='' className='w-full h-full object-contain'/></div>
                                <div className='w-full h-12 rounded-xl m-1 flex justify-center items-center bg-[#152734]'><img src={Visa} alt='' className='w-full h-full object-contain'/></div>
                                <div className='w-full h-12 rounded-xl m-1 flex justify-center items-center bg-[#152734]'><img src={Visa1} alt='' className='w-full h-full object-contain'/></div>
                                <div className='w-full h-12 rounded-xl m-1 flex justify-center items-center bg-[#152734]'><img src={Paypal} alt='' className='w-full h-full object-contain'/></div>
                            </div>
                        </div>
                    </div>
                    <div className='h-[120px] max-w-[60px] p-7 ml-6 mr-4 lg:flex hidden current-side'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrencyCalculator