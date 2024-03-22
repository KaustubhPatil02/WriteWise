import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import ReactQuill from 'react-quill';
import TagsInput from 'react-tagsinput';
import { toast } from "react-toastify";
import { db, storage } from '../../../firebaseConfig/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { Blog } from '../../../Context/Context';
import { useNavigate } from 'react-router-dom';

const Preview = ({ setPublish, ideas, title }) => {
  const {currUser} = Blog();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // const [content, setContent] = useState('');
  const imgRef = useRef(null);
  const [imgPrev, setImgPrev] = useState("");
  const clickHandler = () => {
    imgRef.current.click();
  }
  const [tagsInput, setTagsInput] = useState([])
  const [desc, setDesc] = useState('')
  const [preview, setPreview] = useState({
    title: '',
    bannerImg: '',
  })

  useEffect(() => {
    if (title || ideas) {
      setPreview({ ...preview, title: title })
      setDesc(ideas)
    }
    else {
      setPreview({ ...preview, title: '' })
      setDesc('')
    }
  }, [title, ideas ])

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (preview.title === '' || desc === '') {
        toast.error('Please fill all the fields');
        return;
       
        }
        if(tagsInput.length === 0){
          toast.error('You must have been forgotten to add tags related to your post');
          return;
      }
      const collections = collection(db, "writewise-posts");
      const storageRef = ref(storage, `images/${preview.bannerImg.name}`);

      await uploadBytes(storageRef, preview?.bannerImg);
  
      const imageUrl =  await getDownloadURL(storageRef);

      // pushing data into the database.
      await addDoc(collections,{
        userId: currUser.uid,
        title: preview.title,
        desc,
        tagsInput,
        postImg: imageUrl,
        created: Date.now(),
        PageViews:0
      })
      toast.success('Post published successfully');
      navigate('/');
      setPublish(false);
      setPreview({ title: '', bannerImg: '' })
    } catch (error) {
      toast.error('Something went wrong');
      
    }
    finally{
      setLoading(false);
    }
  }
  

  return (
    <section className='absolute inset-0 bg-white z-30'>
      <div className='size my-[2rem]'>
        <span
          onClick={() => setPublish(false)}
          className='absolute right-[1rem] md:right-[5rem] top-[3rem] text-2xl cursor-pointer'>
          <IoIosCloseCircle />
        </span>
        <div className='mt-[8rem] flex flex-col md:flex-row gap-10'>
          <div className='flex-1'>
            <h3>Post Preview</h3>
            <div
              style={{ backgroundImage: `url(${imgPrev})` }}
              onClick={clickHandler}
              className='w-full h-[200px] object-cover bg-gray-100 my-3 grid place-items-center cursor-pointer bg-cover bg-no-repeat'>
              {!imgPrev && <p className='text-2xl text-gray-500'>Add a banner for the blog</p>}
            </div>
            <input
              onChange={(e) => {
                setImgPrev(URL.createObjectURL(e.target.files[0]))
                setPreview({ ...preview, bannerImg: e.target.files[0] })
              }}
              ref={imgRef}
              type="file"
              hidden
            />
            <input
              className='outline-none w-full border-b border-gray-400 py-4'
              type="text"
              placeholder="Title"
              value={preview.title}
              onChange={(e) => setPreview({ ...preview, title: e.target.value })}
            />
            <ReactQuill
              className='border-b border-gray-400 py-5'
              theme="bubble"
              value={desc}
              onChange={setDesc}
              // onChange={(e) => setPreview({ ...preview, contents: e.target.value })}
              placeholder='Content here!'
            />
          </div>
          <div className='flex-1 flex-col gap-[4] mb-5 md:mb-0'>
            <h3 className='text-2xl '>Publishing to: <span className='font-bold capitalize'>UserName</span></h3>
            <div className='mt-5 gap-6'>
              <p className='text-gray-500'>Add tags according to your post, so it reaches the targeted readers</p>
              <TagsInput
                value={tagsInput}
                onChange={setTagsInput}
              />
              <button 
              onClick={handleSubmit}
              className='!bg-green-800 text-white rounded-full px-3 py-2 mt-20'>
                {loading ? 'Publishing...' : 'Publish Now :)'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Preview;