import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { LiaEditSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../../../firebaseConfig/firebase";
import SearchBlogs from './SearchBlogs';
import Modal from "../../../utility/Modal"
import UserModal from './UserModal';
import { Blog } from '../../../Context/Context';
import Loading from '../../loading/Loading';

const HomeHeader = () => {
  const {allUsers, userLoading, currUser, setPublish} = Blog();


  
  const [modal, setModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const {pathname} = useLocation();
  console.log(pathname);
  const getUsersData = allUsers.find((user) => user.id === currUser?.uid);


  return (
    <header className='border-b border-gray-400'>
      {userLoading && <Loading/>}
      <div className='size h-[70px] flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          <span className='text-3xl'> WriteWise
           {/* <img src="../../../assets/logo2.png" alt="" /> */}
          </span>
          <SearchBlogs modal={searchModal} setModal={setSearchModal} />
        </div>
        <div className='flex items-center gap-4 sm:gap-6 '>
          <span
            onClick={() => setSearchModal(true)}
            className='text-3xl text-gray-400 flex sm:hidden cursor-pointer'>
            <CiSearch />
          </span>
         {pathname === "/write" ? (
          <button
          onClick={()=> setPublish(true)} 
          className='btn bg-green-700 text-white rounded-full px-2 py-1 item-center'>Publish</button>
         ): (
          <Link to="/write" className='hidden md:flex items-center gap-1 text-gray-600'>
          <span className='text-xl'>
            <LiaEditSolid />
          </span>
          <span className='mt-0 text-sm'>Write & publish</span>
        </Link>
         )}
          <div className='flex items-center relative'>
            <img
              onClick={() => setModal(true)}
              className='w-10 h-10 rounded-full cursor-pointer object-cover'
              src={getUsersData?.userImg ? getUsersData?.userImg : "/loading.gif"} alt="userprofile" 
              />
            <span
              onClick={() => setModal(true)}
              className='text-hray-600 cursor-pointer'>
              <IoIosArrowDown />
            </span>           
            <Modal modal={modal} setModal={setModal}>
              <div className={`${modal ? "visible opacity-100%" : "invisible opacity-0"}`}>
                <UserModal setModal={setModal}/>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HomeHeader