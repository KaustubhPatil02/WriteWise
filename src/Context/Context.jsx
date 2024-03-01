// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig/firebase';

const BlogContext = createContext()
// eslint-disable-next-line react/prop-types
const Context = ({ children }) => {
  const [curr_user, setCurr_user] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if(user){
        setCurr_user(user);
      }else{
        setCurr_user(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [curr_user]); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <BlogContext.Provider value={{curr_user, setCurr_user}}>
      {children}
    </BlogContext.Provider> 
  )
};

export default Context

export const Blog = () => useContext(BlogContext);