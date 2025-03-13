/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="uber-logo"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg mb-2 font-medium"> What's your email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-[#eeeeee] mb-7  rounded px-4 py-2  w-full text-lg placeholder:text-base "
            type="email"
            placeholder=" email@example.com "
          />
          <h3 className="text-lg mb-2 font-medium"> Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7  rounded px-4 py-2  w-full text-lg placeholder:text-base "
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password "
          />
          <button className="bg-[#111] text-[#fff] font-semibold mb-3  rounded-lg px-4 py-2  w-full text-lg placeholder:text-base ">
            Login
          </button>
        </form>
        <p className="text-center">
          New here?{" "}
          <Link to="/signup">
            <span className="text-blue-500">Create Account</span>
          </Link>
        </p>
      </div>

      <div>
        <Link
          to="/captain-login"
          className="flex items-center justify-center bg-[#10b461] text-[#fff] font-semibold mb-7  rounded px-4 py-2  w-full text-lg placeholder:text-base "
        >
          <span className="text-white">Sign In as captain</span>
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
