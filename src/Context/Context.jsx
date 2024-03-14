import { onAuthStateChanged } from 'firebase/auth';
// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, db } from '../firebaseConfig/firebase';
import Loading from '../components/loading/Loading';
import { collection, onSnapshot, query } from 'firebase/firestore';
const BlogContext = createContext();

// eslint-disable-next-line react/prop-types
const Context = ({ children }) => {
  const [currUser, setCurrUser] = useState(false);
  const [loading, setLoading] = useState(false);

  const [userLoading, setUserLoading] = useState(true);

  const [allUsers, setAllUsers] = useState([]);

  useEffect(() =>{
    const getUsers =()=>{
      const postRef= query(collection(db, 'users'));
      onSnapshot(postRef, (snapshot) =>{
        setAllUsers(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
        setUserLoading(false);
      });
    };
    getUsers();
    
  },[])
  // console.log(allUsers)

  useEffect(() =>{
    setLoading(true);
    const unsubscribe =onAuthStateChanged(auth, (user) =>{
      if(user){
        setCurrUser(user)
      }else{
        setCurrUser(null)
      }
      setLoading(false);
    });
    return () => unsubscribe();
  },[currUser]);

  return (
    <BlogContext.Provider value={{ currUser, setCurrUser, allUsers, userLoading }}>
      {loading ? <Loading /> : children  }
      {/* {children } */}
    </BlogContext.Provider>
  );
};



export default Context
export const Blog = () => useContext(BlogContext);