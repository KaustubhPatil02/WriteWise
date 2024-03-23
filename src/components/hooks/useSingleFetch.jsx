import { collection, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'

const useSingleFetch = () => {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);
        useEffect(() =>{
            const getSingleData =()=>{
              const postRef= query(collection(db, collectionName));
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
            
          },[])
      return {data, loading}
}

export default useSingleFetch