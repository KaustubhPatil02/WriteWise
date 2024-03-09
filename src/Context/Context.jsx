import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebaseConfig/firebase';

const BlogContext = createContext();

const Context = ({ children }) => {
  const [currUser, setCurrUser] = useState(false);

  useEffect(() =>{
    const unsubscribe =onAuthStateChanged(auth, (user) =>{
      if(user){
        setCurrUser(user)
      }else{
        setCurrUser(null)
      }
    });
    return () => unsubscribe();
  },[currUser]);

  return (
    <BlogContext.Provider value={{ currUser, setCurrUser }}>
      {children}
    </BlogContext.Provider>
  );
};



export default Context
export const Blog = () => useContext(BlogContext);