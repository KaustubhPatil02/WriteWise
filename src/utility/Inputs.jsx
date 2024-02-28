import React from "react";

const Input = ({ type, placeholder, form, setForm }) => {
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm capitalize">{placeholder}</label>
      <input
        className="text-center border-b border-black outline-none"
        type={type}
        name={placeholder}
        // onChange={handleChange}
      />
    </div>
  );
};

export default Input;
