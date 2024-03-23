import React, { useState } from 'react';
import { toast } from "react-toastify";
import { BsFillSave2Fill } from "react-icons/bs";
import { Blog } from "../../../Context/Context";
import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig/firebase';
import useSingleFetch from '../../hooks/useSingleFetch';

const SavedPosts = (post) => {
    const [saved, setSaved] = useState(false);
    // const {data, loading} = useSingleFetch("users");    
    const { currUser } = Blog();

    const handleSaved = async () => {
        try {
            if (currUser) {
                const saveRef = doc(
                    db, 
                    "users", 
                    currUser?.uid, 
                    "savedPosts", 
                    post?.id
                    );
                    // if post is already saved, delete it
                if (saved) {
                    await deleteDoc(saveRef);
                    toast.success("Post removed from saved posts");
                } else {
                    await setDoc(saveRef, {
                        ...post,
                    });
                    toast.success("Post saved successfully");
                }
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <button
            className='flex gap-2 hover:opacity-70'
            onClick={handleSaved}>
            <BsFillSave2Fill className={`
           text-2xl pointer-events-none 
           ${saved ? "text-yellow-500" : ""}
           `} />

            <span>Save this post</span>
        </button>
    )
}

export default SavedPosts;
