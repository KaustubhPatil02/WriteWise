import React from 'react'
import { IoIosCloseCircle  } from "react-icons/io";

const Preview = () => {
  return (
    <section className='absolute inset-0 bg-white z-30'>
        <div className='size my-[2rem]'>
            <span className='absolute right-[1rem] md:right-[5rem] top-[3rem] text-2xl cursor-pointer'>
             <IoIosCloseCircle />   
            </span>
            <div className='mt-[8rem] flex flex-col md:flex-row gap-10'>
                <div className='flex-1'>
                    <h3>Post Preview</h3>
                    <div className='w-full h-[200px] object-cover bg-gray-100 my-3 grid place-items-center
                            cursor-pointer bg-cover bg-no-repeat'>Add an Image Cover</div>
                            <input type="file" hidden
                             />
                </div>
                <div className='flex-1'>rigtside</div>
            </div>
        </div>
    </section>
  )
}

export default Preview