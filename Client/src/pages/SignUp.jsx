import React, { useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

function SignUp() {
  const [ShowPass, SetShowPass] = useState(false);

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onChangeHanlder = (e) => {
    e.preventDefault();
    setUser({...user , [e.target.id]: e.target.value})
  };


  const handlePasswordShow = () => {
    SetShowPass(!ShowPass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  }

 


  return (
    <div className=" p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7 capitalize text-white ">
        sign up
      </h1>
      <span className="text-slate-200 py-2 text-xl pfont-bold ">
        <span className="text-3xl text-teal-200">Discover</span> your property journey effortlessly! <br /> Join now for exclusive access to dream listings
      </span>
      <form onSubmit={handleSubmit} className="  flex flex-col gap-3 ">
        <div className="  mt-5 flex flex-col ">
          <label htmlFor="username" className="text-white font-bold p-2">
            User Name
          </label>
          <input
          onChange={onChangeHanlder}
            type="text"
            name="username"
            id="username"
            placeholder="eg :  JamesSmith"
            className=" p-3 rounded-lg outline-none bg-slate-500 "
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="email" className="text-white font-bold p-2">
            Email
          </label>
          <input
          onChange={onChangeHanlder}
            type="email"
            name="email"
            id="email"
            placeholder="eg :  jamesSmith@gmail.com"
            className=" p-3 rounded-lg outline-none bg-slate-500 "
          />
        </div>
        <label htmlFor="password" className="text-white font-bold pl-2 ">
          Password
        </label>
        <div className="flex justify-between items-center bg-slate-500 rounded-lg  ">
          <input
          onChange={onChangeHanlder}
            type={ShowPass ? "text" : "password"}
            name="password"
            id="password"
            placeholder="eg :  XXXXXXXXXXXXXXXX"
            className=" p-3 w-full rounded-lg outline-none bg-transparent  "
          />

          {ShowPass ? (
            <AiOutlineEye
              className="text-3xl mr-2 cursor-pointer text-white"
              title="Hide  Password"
              onClick={handlePasswordShow}
            />
          ) : (
            <AiFillEyeInvisible
              className="text-3xl mr-2 cursor-pointer text-white"
              title="Show Password"
              onClick={handlePasswordShow}
            />
          )}
        </div>

        <button
          className="mt-4 bg-slate-600 p-3 w-[40%] text-white 
         rounded-lg shadow-lg font-bold text-xl hover:bg-transparent hover:border border-slate-600 "
        >
          Create Account
        </button>
      </form>
      <div className="">
        
          <p className="mt-3 cursor-pointer  text-sm text-slate-200">
            Already Have A Account ?  
            <Link to={"/sign-in"}>
             <span className="ml-2">sign in</span> 
            </Link>
          </p>
        
      </div>
    </div>
  );
}

export default SignUp;
