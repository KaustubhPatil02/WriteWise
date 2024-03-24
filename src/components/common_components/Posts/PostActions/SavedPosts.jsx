import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { BsFillSave2Fill } from "react-icons/bs";
import { CiSaveDown1 } from "react-icons/ci";
import { Blog } from "../../../../Context/Context"
import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import useSingleFetch from '../../../hooks/useSingleFetch';
import { db } from '../../../../firebaseConfig/firebase';

const SavedPosts = ({ post }) => {
    const { currUser } = Blog();
    const [saved, setSaved] = useState(false);
    const { data, loading } = useSingleFetch("users", currUser?.uid, "savedPost");

    // to chech wheter the post is saved or not
    useEffect(() => {
        setSaved(data && data.find((item) => item.id === post.id))
    }, [data, post?.id])


    const handleSaved = async () => {
        try {
            if (currUser) {
                const saveRef = doc(
                    db,
                    "users",
                    currUser?.uid,
                    "savedPosts",  
                    post?.id,
                );
    
                // Use the setter function callback to ensure you're working with the latest state value
                setSaved(prevSaved => !prevSaved);
    
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
            <span>Save this post</span>
            <BsFillSave2Fill className={`
           text-2xl pointer-events-none 
           ${saved ? "text-yellow-500" : ""}
           `} />

        </button>
    )
}

export default SavedPosts;
