import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebaseConfig/firebase';
import Loading from '../components/loading/Loading';
const BlogContext = createContext();

const Context = ({ children }) => {
  const [currUser, setCurrUser] = useState(false);
  const [Loading, setLoading] = useState(false);

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
      {/* {Loading ? <Loading /> : children } */}
      {children }
    </BlogContext.Provider>
  );
};



export default Context
export const Blog = () => useContext(BlogContext);