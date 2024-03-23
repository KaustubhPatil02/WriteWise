import React from 'react'
import { BsFillSave2Fill } from "react-icons/bs";

const SavedPosts = (post) => {
  return (
    <button className='flex gap-2 hover:opacity-70'>
        <BsFillSave2Fill className='text-2xl pointer-events-none' />
        <span>Save this post</span>

    </button>
  )
}

export default SavedPosts