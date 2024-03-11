// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Inputs from '../../../utility/Inputs'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { toast } from "react-toastify";
import { auth, db } from '../../../firebaseConfig/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


const SignUp = ({setSigReq, setModal}) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",

  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(form["username", "email", "password", "confirmPassword"] === ""){
      toast.error("Please fill all the fields")
    }
    else if(form.password !== form.confirmPassword){
      toast.error("Passwords do not match")
  }
  else{
    setLoading(true);
    const {user} = await createUserWithEmailAndPassword(
      auth, form.email, form.password);
      const ref = doc(db, "users", user.uid);
      const userDoc = await getDoc(ref);

      if (!userDoc.exists()) {
        await setDoc(ref, {
          userId: user.uid,
          username: form.username,
          email: form.email,
          userImg: "",
          bio: "",
          created: Date.now(),
        });
        navigate("/");
        toast.success("New Account has been Created");
        setModal(false);
        setLoading(false);
      }
    }
  

  
}

  return (
    <div className='size mt-[10rem] text-center'>
        <h2 className='text-3xl'>Sign Up with your Email & Password</h2>
        <p className='w-full sm:w-[25rem] mx:auto py-[3rem] '></p>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3' action="">
            <Inputs form={form} setForm={setForm} type="name" title="username" placeholder="Your user name"/>
            <Inputs form={form} setForm={setForm} type="email" title="email" placeholder="Enter your Email"/>
            <Inputs form={form} setForm={setForm} type="password" title="password" placeholder="Enter your passcord"/>
            <Inputs form={form} setForm={setForm} type="password" title="confirmPassword" placeholder="Confirm your passcord"/>
            <button className={`px-4 py-1 text-sm rounded-full bg-green-800
            hover:bg-green-700 text-white w-fit mx-auto ${loading ? "opacity-40 pointer-events-none" : "" }`}>
              Sign Up
            </button>
        </form>
        <button 
       onClick={() => setSigReq("")}
        className='mt-5 text-sm text-green-600 hover:text-green-800 flex items-center mx-auto gap-1 text-l'>
        <IoIosArrowDropleftCircle />
        All sign up options
        </button>
    </div>
  )
}

export default SignUp