import { onAuthStateChanged } from 'firebase/auth';
// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebaseConfig/firebase';
import Loading from '../components/loading/Loading';
const BlogContext = createContext();

// eslint-disable-next-line react/prop-types
const Context = ({ children }) => {
  const [currUser, setCurrUser] = useState(false);
  const [loading, setLoading] = useState(false);

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
    <BlogContext.Provider value={{ currUser, setCurrUser }}>
      {loading ? <Loading /> : children }
      {/* {children } */}
    </BlogContext.Provider>
  );
};



export default Context
export const Blog = () => useContext(BlogContext);