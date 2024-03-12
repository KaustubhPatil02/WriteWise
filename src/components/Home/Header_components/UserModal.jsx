import React from 'react'
import { LuUserCog } from "react-icons/lu";
import { FaSignOutAlt } from "react-icons/fa";
import { Blog } from '../../../Context/Context'
import { Link } from 'react-router-dom';
import { LiaEditSolid } from "react-icons/lia";
import { secretMail } from '../../../utility/supporter';


const UserModal = (setModal) => {
  const { currUser } = Blog();
  const UserModal = [
    {
      title: "Profile",
      icon: <LuUserCog />,
      // path for redirecting to the user profile, which is a single page
      path: `/profile/${currUser?.uid}`,
    },
  ];
  return (
    <section className='absolute w-[18rem] p-6 bg-white right-0 top-[100%]
      shadows rounded-md z-50 text-gray-700'>
      <Link to="/write" className=' flex md:hidden items-center gap-1 text-gray-600'>
        <span className='text-2xl'>
          <LiaEditSolid />
        </span>
        <span className='mt-0 text-sm'>Write & publish</span>
      </Link>
      <div className='flex flex-col gap-6 border-b bordergray-400 pb-0'> 
        {UserModal.map((link, i) => (
          <Link
          onClick={() => setModal(false)} 
          to={link.path} key={i} className='flex items-center gap-4 hover:text-black/50'>
            <span className='text-2xl'>{link.icon}</span>
            <span className='text-md'>{link.title}</span>

          </Link>
        ))}
        </div>
        <button className='flex flex-col pt-5 cursor-pointer hover:text-black/70'>
          Sign Out
          <span className='text-sm'>{secretMail(currUser?.email)}</span>
        </button>
    </section>
  )
}

export default UserModal