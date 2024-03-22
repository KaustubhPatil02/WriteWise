import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import Preview from './Preview';
import { Blog } from '../../../Context/Context';

const Write = () => {
  const { publish, setPublish } = Blog();
  const [ideas, setIdeas] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Handle form submission logic here
  };

  return (
    <section className='w-[90%] md:w-[80%] lg:w-[60%] mx-auto py-[3rem]'>
      <form onSubmit={handleSubmit}>
        <input
          className='text-5xl outline-none w-full'
          value={title}
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <ReactQuill
          value={ideas}
          onChange={setIdeas}
          className='write my-5'
          theme="bubble"
          placeholder='Push your Content or Ideas here!'
        />
        <div className={`${publish ? "visible opacity-100" : "invisible opacity-0"} transition-all duration-200`}>
          <Preview
            setPublish={setPublish}
            title={title}
            ideas={ideas}
          />
        </div>
        <button type="submit" style={{ display: 'none' }}></button> {/* Hidden submit button */}
      </form>
    </section>
  );
}

export default Write;
