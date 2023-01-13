import React from 'react'
import "./SecuritySection.css"
import {IoIosStats} from "react-icons/io"
import {MdSecurity} from "react-icons/md"
import {MdOutlinePayment} from "react-icons/md"
import {ImSearch} from "react-icons/im"


const SecuritySection = () => {
    return (
        <div className='w-full sss h-auto bg-[#010307] max-w-[1420px] m-auto pl-[20px] lg:pl-[170px] lg:pr-[170px] pr-[20px]  pt-3  sm:pt-3 pb-3'>
            <div className=' w-full h-[auto] md:flex grid items-center pb-10'>
                <div className='w-full h-[auto] flex flex-wrap'>
                    <div className=' grid sm:flex'>
                        <div className='md:w-[200px] w-full pb-2 lg:w-full m-1 h-[auto]'>
                            <div className='w-[50px] h-[50px]  ss-triangle rounded-xl'><IoIosStats/></div>
                            <h4>Valu Performance</h4>
                            <p>It was popularised in the 1960s with the release of letraset sheets containing</p>
                        </div>
                        <div className='md:w-[200px] w-full pb-2 lg:w-full m-1 h-[auto]'>
                            <div className='w-[50px] h-[50px]  ss-triangle rounded-xl'><MdSecurity/></div>
                            <h4>Strong Security</h4>
                            <p>It was popularised in the 1960s with the release of letraset sheets containing</p>
                        </div>
                    </div>
                    <div className=' grid sm:flex pt-10'>
                        <div className='md:w-[200px] w-full pb-2 lg:w-full m-1 h-[auto]'>
                            <div className='w-[50px] h-[50px]  ss-triangle rounded-xl'><MdOutlinePayment/></div>
                            <h4>Payment Options</h4>
                            <p>It was popularised in the 1960s with the release of letraset sheets containing</p>
                        </div>
                        <div className='md:w-[200px] w-full pb-2 lg:w-full m-1 h-[auto]'>
                            <div className='w-[50px] h-[50px]  ss-triangle rounded-xl'><ImSearch/></div>
                            <h4>Transparent</h4>
                            <p>It was popularised in the 1960s with the release of letraset sheets containing</p>
                        </div>
                    </div>

                </div>
                <div className='w-full h-[auto] pl-0 pt-7 md:pt-0 md:pl-10 md:pr-3'>
                    <h3>Deposite Crypto Earn Interest</h3>
                    <p>lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard</p>
                    <button className=''>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default SecuritySection