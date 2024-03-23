import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import Modal from '../../../utility/Modal';

const SearchBlogs = ({modal, setModal}) => {

  return (
    <>
    <Modal modal={modal} setModal={setModal}>
      <div className={`absolute sm:relative right-6 left-6 top-[4rem] sm:left-0 sm:top-0 
        ${modal ? "visible opacity-100" : "invisible sm:visible opacity-100"}
        transition-all duration-100     
      `}>
        <div className='flex items-center gap-2 bg-gray-100 px-2 rounded-full relative'>
          <span className='text-2xl text-gray-500'>
            <IoIosSearch />
          </span>
          <input className='bg-transparent outline-none py-[0.4rem] text-sm w-[20rem]'
          type="text" placeholder='Search WriteWise Blog for Posts' 
           />
        </div>
      </div>
    </Modal>
    </>
  )
}

export default SearchBlogs