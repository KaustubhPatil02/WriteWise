import React from 'react'
import { CiSearch } from "react-icons/ci";
import { LiaEditSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../../../firebaseConfig/firebase";
import SearchBlogs from './SearchBlogs';


const HomeHeader = () => {
  return (
    <header className='border-b border-gray-400'>
      <div className='size h-[70px] flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          <span className='text-3xl'>
            BlogApp
          </span>
          <SearchBlogs />
        </div>
        <div className='flex items-center gap-4 sm:gap-6 '>
          <Link to="/write" className='hidden md:flex items-center gap-1 text-gray-600'>
            <span className='text-2xl'>
              <LiaEditSolid />
            </span>
            <span className='mt-0 text-sm'>Write & publish</span>
          </Link>
          <div className='flex items-center relative'>
            <img
              className='w-10 h-10 rounded-full cursor-pointer object-cover'
              src="../../../../src/assets/react.svg" alt="userprofile" />
            <span className='text-hray-600 cursor-pointer'>
              <IoIosArrowDown />
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HomeHeader