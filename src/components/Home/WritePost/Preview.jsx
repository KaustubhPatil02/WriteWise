import React, { useRef, useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import ReactQuill from 'react-quill';
import TagsInput from 'react-tagsinput';


const Preview = ({setPublish}) => {
  const [content, setContent] = useState('');

  const imgRef = useRef(null);
  const [imgPrev, setImgPrev] = useState("");
  const clickHandler = () => {
    imgRef.current.click();
  }

  const [tagsInput, setTagsInput] = useState([])

  return (
    <section className='absolute inset-0 bg-white z-30'>
      <div className='size my-[2rem]'>
        <span
        onClick={()=> setPublish(false)} 
        className='absolute right-[1rem] md:right-[5rem] top-[3rem] text-2xl cursor-pointer'>
          <IoIosCloseCircle />
        </span>
        <div className='mt-[8rem] flex flex-col md:flex-row gap-10'>
          <div className='flex-1'>
            <h3>Post Preview</h3>
            <div
              style={{ backgroundImage: `url(${imgPrev})` }}
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

            <div className='mt-5 gap-6'>
              <p className='text-gray-500'>Add tags according to your post, so it reaches to the targeted readers</p>
              <TagsInput
                value={tagsInput}
                onChange={setTagsInput} />
                <button className=' !bg-green-800 text-white rounded-full px-3 py-2 mt-20'>Publish Now :)</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Preview