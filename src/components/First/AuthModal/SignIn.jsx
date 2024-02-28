import React from 'react'
import Inputs from '../../../utility/Inputs'
import { IoIosArrowDropleftCircle } from "react-icons/io";

const SignIn = ({ setSigReq }) => {
  return (
    <div className='size mt-[10rem] text-center'>
        <h2 className='text-3xl'>Sign in with your Email & Password</h2>
        <p className='w-full sm:w-[25rem] mx:auto py-[3rem] '></p>
        <form className='flex flex-col gap-3' action="">
            <Inputs type="email" placeholder="Enter your Email"/>
            <Inputs type="password" placeholder="Enter your passcord"/>
            <button className='px-4 py-1 text-sm rounded-full bg-green-800
            hover:bg-green-700 text-white w-fit mx-auto'>Sign In</button>
        </form>
        <button 
         onClick={() => setSigReq("")}
        className='mt-5 text-sm text-green-600 hover:text-green-800 flex items-center mx-auto gap-1 text-l'>
        <IoIosArrowDropleftCircle />
        All sign in options
        </button>
    </div>
  )
}

export default SignIn