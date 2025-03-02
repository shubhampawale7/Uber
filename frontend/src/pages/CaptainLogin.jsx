/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { Link } from "react-router-dom";
const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [captainData, setCaptainData] = useState({})
  

  const submitHandler = (e) => {
    e.preventDefault()
    setCaptainData({
      email: email,
      password: password
    })
    
    setEmail('')
    setPassword('')

    }

  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
      <div>
        <img
          className="w-16 mb-10"
          src="https://pngimg.com/d/uber_PNG24.png"
          alt="captain-uber-logo"
        />
        <form onSubmit={(e) => {
          submitHandler(e);
        }}>
          <h3 className="text-lg mb-2 font-medium"> What's your email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-[#eeeeee] mb-7  rounded px-4 py-2 border w-full text-lg placeholder:text-base "
            type="email"
            placeholder=" email@example.com "
          />
          <h3 className="text-lg mb-2 font-medium"> Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7  rounded px-4 py-2 border w-full text-lg placeholder:text-base "
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password "
          />
          <button className="bg-[#111] text-[#fff] font-semibold mb-3  rounded px-4 py-2  w-full text-lg placeholder:text-base ">
            Login
          </button>
        </form>
        <p className="text-center">
         Join a fleet?{" "}
          <Link to="/captain-signup">
            <span className="text-blue-500">Register as a Captain</span>
          </Link>
        </p>
      </div>

      <div>
        <Link
          to='/login'
          className="flex items-center justify-center bg-[#d5622d] text-[#fff] font-semibold mb-7  rounded px-4 py-2  w-full text-lg placeholder:text-base ">
          <span className="text-white">Sign In as User</span>
        </Link>
      </div>
    </div>
  );
};


export default CaptainLogin
