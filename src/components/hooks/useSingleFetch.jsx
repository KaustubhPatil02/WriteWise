import { collection, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig/firebase';

const useSingleFetch = (collectionName, id, subCol) => {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);
        useEffect(() =>{
            const getSingleData =()=>{
<<<<<<< HEAD
              const postRef= query(collection(db, collectionName, id, subCol));
=======
              const postRef= query(collection(db, collectionName,id, subCol));
>>>>>>> f41157cea75a2ac075724db8cfab6deea8fc3586
              onSnapshot(postRef, (snapshot) =>{
                setData(
                  snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                  }))
                );
                setLoading(false);
              });
            };
            getSingleData();
            
<<<<<<< HEAD
          },[]);
      return {data, loading}
=======
          },[])
      return {
        data, 
        loading,
      }
>>>>>>> f41157cea75a2ac075724db8cfab6deea8fc3586
}

export default useSingleFetch