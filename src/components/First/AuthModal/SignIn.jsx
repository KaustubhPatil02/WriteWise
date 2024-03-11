import React, { useState } from 'react'
import Inputs from '../../../utility/Inputs'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebaseConfig/firebase';
import { useNavigate } from 'react-router-dom';



const SignIn = ({ setSigReq }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    if (form["email", "password"] === "") {
      toast.error("Please enter valid email and password")
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate("/");
      toast.success("User have been Signed in");
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);

    }
  }
  return (
    <div className='size mt-[10rem] text-center'>
      <h2 className='text-3xl'>Sign in with your Email & Password</h2>
      <p className='w-full sm:w-[25rem] mx:auto py-[3rem] '></p>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3' action="">
        <Inputs form={form} setForm={setForm} type="email" title="email" placeholder="Enter your Email" />
        <Inputs form={form} setForm={setForm} type="password" title="password" placeholder="Enter your passcord" />
        <button className={`px-4 py-1 text-sm rounded-full bg-green-800
                     hover:bg-green-700 text-white w-fit mx-auto
                     ${loading ? "opacity-5 pointer-events-none" : ""}`}>
          Sign In
        </button>
      </form>
      <button
        onClick={() => setSigReq("")}
        className='mt-5 text-sm text-green-600 hover:text-green-800 flex items-center mx-auto gap-1 text-l'>
        <IoIosArrowDropleftCircle />
        All sign in options
      </button>
    </div>
  )
}

export default SignIn