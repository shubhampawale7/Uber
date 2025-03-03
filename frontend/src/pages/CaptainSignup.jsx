import React, { useState } from "react";
import { Link } from "react-router-dom";
const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    console.log(userData);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };
  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between ">
        <div>
          <img
            className="w-16 mb-10"
            src="https://pngimg.com/d/uber_PNG24.png"
            alt="uber-logo"
          />
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className="text-lg w-full mb-2 font-medium">
              {" "}
              What's our Captain's Name
            </h3>
            <div className="flex gap-4 mb-5 ">
              <input
                required
                className="bg-[#eeeeee]  w-1/2  rounded px-4 py-2   text-lg placeholder:text-sm "
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <input
                required
                className="bg-[#eeeeee]   w-1/2 rounded px-4 py-2   text-lg placeholder:text-sm "
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <h3 className="text-lg mb-2 font-medium">
              {" "}
              What's our Captain's email
            </h3>
            <input
              required
              className="bg-[#eeeeee] mb-5  rounded px-4 py-2  w-full text-lg placeholder:text-sm "
              type="email"
              placeholder=" email@example.com "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h3 className="text-lg mb-2 font-medium"> Enter Password</h3>
            <input
              className="bg-[#eeeeee] mb-5  rounded px-4 py-2  w-full text-lg placeholder:text-sm "
              required
              type="password"
              placeholder="Password "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="bg-[#111] text-[#fff] font-semibold mb-3  rounded px-4 py-2  w-full text-lg  ">
              Sign Up
            </button>
          </form>
          <p className="text-center">
            Already have an Account?{" "}
            <Link to="/captain-login">
              <span className="text-blue-500">Login Here</span>
            </Link>
          </p>
        </div>

        <div>
          <p className="text-[10px] leading-tight">
            This site is protected by reCAPTCHA and the{" "}
            <span className="underline">Google Privacy Policy</span> and{" "}
            <span className="underline">Terms of Service apply</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;
