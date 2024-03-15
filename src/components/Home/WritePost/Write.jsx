import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import Preview from './Preview';
// import 'react-quill/dist/quill.snow.css'; // for snow theme

const Write = () => {
      const [content, setContent] = useState('');
  return (
    <section className='w-[90%] md:w-[80%] lg:w-[60%] mx-auto py-[3rem]'>
        
        <input className='text-5xl outline-none w-full' 
            type="text" 
            placeholder="Title" 
        />
        {/* <ReactQuill theme="snow" value={value} onChange={setValue} placeholder='Content here!' /> */}
        <ReactQuill 
        className='write my-5'
        theme="bubble" value={content} onChange={setContent} placeholder='Content here!' />
        <div>
            <Preview />
        </div>
    </section>
  )
}

export default Write