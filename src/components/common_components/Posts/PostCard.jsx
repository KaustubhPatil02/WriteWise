import React from 'react'
import useFetch from '../../hooks/useFetch';
import { readTime } from '../../../utility/supporter';
import moment from 'moment';
import SavedPosts from './SavedPosts';

const PostCard = ({post}) => {
    const {title, desc, createdAt, postImg,id:postId ,userId} = post;
    const {data, loading} = useFetch("users")
    const getUserData = data && data.find((user) => user?.id === userId)
  return (
    <>
        <div className='flex flex-col sm:flex-row gap-4 cursor-pointer'>
    {/* <div> */}
        <div className='flex-[2.5rem]'>
            <p className='pb-2 font-semibold capitalize'>{getUserData?.username}</p>
            <h2 className="text-xl font-bold line-clamp-2 leading-6 capitalize">
            {title}
          </h2>
            <div className='py-1 text-gray-600 line-clamp-2 leading-5' 
            dangerouslySetInnerHTML={{__html: desc}} />
        </div>
        <div className='flex-[1]'>
            <img
            src={postImg} alt="" className='w-[53rem]'  />
        </div>
        </div>
        <div className='flex items-center justify-between w-full md:w-[80%] mt-[3rem] md:mt-0'>
            <p className='text-sm text-gray-600'>{readTime({__html:desc})} min reading time . {moment(createdAt).format("DD-MM-YYYY")}</p>
            <div className=' flex items-center gap-4'>
              <SavedPosts />
            </div>
        </div>

    </>
  )
}

export default PostCard