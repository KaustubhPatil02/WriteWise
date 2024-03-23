import React from 'react'
import useFetch from '../../hooks/useFetch';

const PostCard = ({post}) => {
    const {title, desc, createdAt, postImg,id:postId ,userId} = post;
    const {data, loading} = useFetch("users")
    const getUserData = data && data.find((user) => user?.id === userId)
  return (
    <section className='flex
    flex-col sm:flex-row gap-4 cursor-pointer'>
        <div className='flex-[3rem]'>
            <p className='pb-2 font-semibold capitalize'>{getUserData?.username}</p>
            <h2 className='text-xl font-bold line-clamp-3 leading-6 capitalize'>{title}</h2>
            <div className='py-1 text-gray-600 line-clamp-3 leading-5' dangerouslySetInnerHTML={{__html:desc}} />
        </div>
    </section>
  )
}

export default PostCard