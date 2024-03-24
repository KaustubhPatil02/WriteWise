import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { toast } from "react-toastify";
import Loading from '../../loading/Loading'
// import readTime from '../../../utility/supporter'
import { readTime } from '../../../utility/readTime';
import { useNavigate } from 'react-router-dom';

import { db } from '../../../firebaseConfig/firebase'
import moment from 'moment';

const SinglePostView = () => {
    const {postId} = useParams()
    const [post, setPost] = useState({})  // to store the post data
    const [loading, setLoading] = useState(false)  // to check if the data is loading

    useEffect(() =>{
        const fetchPost = async () =>{
            setLoading(true)
            try {
                const postRef = doc(db, "writewise-posts", postId);
                const getPost = await getDoc(postRef);

                // to check if the post exists
                if(getPost.exists()){
                    const postData = getPost.data()
                    // setPost({...postData, id: getPost.id})
                    // console.log(getPost.data())
                    if(postData?.userId){
                        const userRef = doc(db, "users", postData?.userId);
                        const getUser = await getDoc(userRef);
                        
                        if(getUser.exists()){
                            const userData = getUser.data();
                            setPost({...postData, ...userData, id:postId})
                        }
                    }
                }
                setLoading(false)
            } catch (error) {
                toast.error(error.message)
                setLoading(false)
                
            }
        };
        fetchPost()
    },[postId, post?.userId])
    // console.log(post)

    const {title,desc, postImg, username, createdAt, userImg, userId} = post

    const navigateToUser = useNavigate()

  return (
    <>
    {loading? <Loading /> 
    : 
        <section className='w-[90%] md:w-[80%] lg:w-[60%] mx-auto py-[3rem]'>
            <h2 className='text-4xl font-bold capitalize'>{title}</h2>
            <div className='flex items-center gap-3 py-[3rem]'>
                <img 
                // onClick={() => navigateToUser(`/profile/${userId}`) }
                className='w-3[rem] h-[4rem] object-cover rounded-full cursor-pointer' src={userImg} alt="" />
                <div>
                    <div className='capitalize'>
                        <span>{username}</span>
                    </div>
                    <p className='text-sm text-gray-600 '>
                        {readTime({__html: desc})} min read .
                        <span className='ml-1'>{moment(createdAt).fromNow()}</span>
                    </p>
                </div>
            </div>
        </section>
    }
    </>
  )
}

export default SinglePostView