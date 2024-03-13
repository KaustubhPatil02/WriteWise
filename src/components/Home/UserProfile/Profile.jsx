// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { RiSettingsFill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";

import UserProfileHome from './UserNavs/UserProfileHome';
import UserProfileList from './UserNavs/UserProfileList';
import UserProfileAbout from './UserNavs/UserProfileAbout';
import Modal from '../../../utility/Modal';
import EditProfileModal from './EditProfileModal';

const Profile = () => {
  const userNavs = [
    {
      title: "Home",
      comp: UserProfileHome
    },
    {
      title: "List",
      comp: UserProfileList,
    },
    {
      title: "About",
      comp: UserProfileAbout,
    },

  ];

  const [navActives, setNavActives] = useState(userNavs[0]);

  const [modal , setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  return (
    <section className='size flex gap-[4rem] relative'>
      <div className='mt-[9rem] flex-[2]'>
        <div className='flex items-end gap-4'>
          <h2 className='text-2xl sm:text-5xl font-bold capitalize'>UserName</h2>
          {/* <p className='text-gray-400 text-xs sm:text-sm'>im</p> */}
        </div>

        <div className='flex items-center gap-5 mt-[1rem] border-b border-gray-300 mb-[3rem]'>
          {userNavs.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <div className={`py-[1rem] 
            ${item.title === navActives.title ? "border-b-2 border-black" : ""
              }`}>
              <button onClick={() => setNavActives(item)}>
                {item.title}
              </button>
            </div>
          ))}
        </div>
        {/* user profile navigations */}
        <navActives.comp />
      </div>
      <div>
        <button
          onClick={() => setModal(true)} 
          className='fixed top-[8rem] right-0 w-[2rem] h-[2rem] bg-black 
        text-white grid place-items-center md:hidden'>
        <IoSettings />
        </button>
      </div>
      {/* user details  */}
      <Modal modal={modal} setModal={setModal}>
      <div className={`flex-[1] border-l border-gray-300 p-[2rem] 
        z-10 fixed right-0 bottom-0 top-0 w-[18rem] bg-white md:relative
        ${modal ? "translate-x-0" : "translate-x-[100%] md:translate-x-0"}       
        `}>
        <div className='pb-4 text-right'>
          <button 
            onClick={() => setModal(false)} 
            className='inline-block md:hidden'>
            <IoMdCloseCircle />
          </button>
        </div>
        {/* profile details */}
        <div className='sticky top-7 flex flex-col justify-between'>
          <img className='w-[3.5rem] h-[3.5rem] object-cover rounded-full' src="/src/assets/react.svg" alt="" />
          <h2 className='py-2 font-bold capitalize'>UserName</h2>
          <p className='text-gray-600 first-letter:uppercase text-sm'>this is an bio para</p>
          <button onClick={()=> setEditModal(true)} className='text-green-700 font-semibold pt-10 text-sm w-fit'>Edit your Profile</button>
        </div>
      </div>

      </Modal>
      {/* edit user profile */}
      {editModal && <EditProfileModal editModal={editModal} setEditModal={setEditModal} />}
      </section>
  )
}

export default Profile