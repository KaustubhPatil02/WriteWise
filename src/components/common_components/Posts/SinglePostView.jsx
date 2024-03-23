import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import {useSearchParams} from 'react-router-dom'
import { toast } from "react-toastify";

import { db } from '../../../firebaseConfig/firebase'

const SinglePostView = () => {
    const {postId} = useSearchParams()
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
                            // setPost({...postData, ...userData, id:postId})
                        }
                    }
                }
                setLoading(false)
            } catch (error) {
                // toast.error(error.message)
                setLoading(false)
                
            }
        };
        fetchPost()
    },[postId])
    console.log(post)


  return (
    <div>SinglePostView</div>
  )
}

export default SinglePostView