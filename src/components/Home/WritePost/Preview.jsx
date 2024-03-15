import React, { useRef, useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import ReactQuill from 'react-quill';


const Preview = () => {
  const [content, setContent] = useState('');

  const imgRef = useRef(null);
  const [imgPrev, setImgPrev] = useState("");
  const clickHandler = () => {
    imgRef.current.click();
  }
  return (
    <section className='absolute inset-0 bg-white z-30'>
      <div className='size my-[2rem]'>
        <span className='absolute right-[1rem] md:right-[5rem] top-[3rem] text-2xl cursor-pointer'>
          <IoIosCloseCircle />
        </span>
        <div className='mt-[8rem] flex flex-col md:flex-row gap-10'>
          <div className='flex-1'>
            <h3>Post Preview</h3>
            <div
              style={{backgroundImage: `url(${imgPrev})`}}
              onClick={clickHandler}
              className='w-full h-[200px] object-cover bg-gray-100 my-3 grid place-items-center
                            cursor-pointer bg-cover bg-no-repeat'>
                              {!imgPrev && <p className='text-2xl text-gray-500'>Add an banner for blog</p>}
                            </div>
            <input 
              onChange={(e) => setImgPrev(URL.createObjectURL(e.target.files[0]))}
              ref={imgRef} 
              type="file" 
              hidden
            />
            <input className=' outline-none w-full border-b border-gray-400 py-4' 
            type="text" 
            placeholder="Title" 
        />
        {/* <ReactQuill theme="snow" value={value} onChange={setValue} placeholder='Content here!' /> */}
        <ReactQuill 
        className='border-b border-gray-400 py-5'
        theme="bubble" 
        // value={content} onChange={setContent} 
        placeholder='Content here!' />
          </div>
          <div className='flex-1 flex-col gap-[4] mb-5 md:mb-0'>
            <h3 className='text-2xl '>Publishing to: <span className='font-bold capitalize'>UserName</span></h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Preview