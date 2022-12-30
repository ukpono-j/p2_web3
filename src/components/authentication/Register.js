import React from 'react'
import { Link } from 'react-router-dom'
import "./Register.css"



const Register = () => {
  return (
    <div className='h-screen p-4 flex items-center justify-center w-full bg-[#000207] text-white'>
        <form className='Register-form h-[auto] w-[400px] '>
            <h1><Link to="/">Register</Link></h1>
            <div>
                <h4>First Name</h4>
                <input type="text" placeholder='First Name'  />
            </div>
            <div>
                <h4>Last Name</h4>
                <input type="text" placeholder='Last Name'  />
            </div>
            <div>
                <h4>Email Address</h4>
                <input type="text" placeholder='Email Address'  />
            </div>
            <div>
                <h4>Passsword</h4>
                <input type="text" placeholder='Password'  />
            </div>
            <div>
                <h4>Confirm Password</h4>
                <input type="text" placeholder='First Name'  />
            </div>
            <div>
                <button type='submit'>Sign Up</button>
            </div>
        </form>
    </div>
  )
}

export default Register