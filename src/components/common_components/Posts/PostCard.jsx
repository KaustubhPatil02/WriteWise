import React from 'react';
import useFetch from '../../hooks/useFetch';
import { readTime } from '../../../utility/supporter';
import moment from 'moment';
import SavedPosts from './PostActions/SavedPosts';
import { useNavigate } from 'react-router-dom';

const PostCard = ({ post }) => {
  const { title, desc, createdAt, postImg, id: postId, userId } = post;
  const { data, loading } = useFetch("users");
  const getUserData = data && data.find((user) => user?.id === userId);
  const navigateToPost = useNavigate();

  return (
    <>
    {/* <div>postcard</div> */}
      <div
        onClick={() => navigateToPost(`/post/${postId}`)}
<<<<<<< HEAD
        className='flex flex-col sm:flex-row gap-4 cursor-pointer'
      >
        <div className='flex-[2.5rem]'>
=======
        className='flex flex-col sm:flex-row gap-10 cursor-pointer'>
        <div className='flex-[3rem]'>
>>>>>>> f41157cea75a2ac075724db8cfab6deea8fc3586
          <p className='pb-2 font-semibold capitalize'>{getUserData?.username}</p>
          <h2 className="text-xl font-bold line-clamp-4 leading-10 capitalize">
            {title}
          </h2>
          <div className='py-1 text-gray-600 line-clamp-5 leading-5'
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        </div>
        <div className='flex-[1]'>
          <img
<<<<<<< HEAD
            src={postImg} alt="" className='w-[35rem]'
          />
=======
            src={postImg} alt="" className='w-[40rem]' />
>>>>>>> f41157cea75a2ac075724db8cfab6deea8fc3586
        </div>
      </div>
      <div className='flex items-center justify-between w-full md:w-[80%] mt-[3rem] md:mt-0'>
        <p className='text-sm text-gray-600'>
          {readTime({ __html: desc })} min reading time. Created At {moment(createdAt).format("DD-MM-YYYY")}
        </p>
        <div className=' flex items-center gap-4'>
<<<<<<< HEAD
=======
          {/* <p>Created At {moment(createdAt).format("DD-MM-YYYY")}</p> */}
          {/* there is some index of issue here to be solved later */}
          {/* the error is solved caused {post} was not been passed properly */}
>>>>>>> f41157cea75a2ac075724db8cfab6deea8fc3586
          <SavedPosts post={post} />
        </div>
      </div>
    </>
  );
}

export default PostCard;
