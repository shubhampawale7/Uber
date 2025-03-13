import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className=" bg-cover bg-center bg-[url(https://plus.unsplash.com/premium_vector-1726060273669-4ca98c1d1d61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYWZmaWN8ZW58MHx8MHx8fDA%3D)] flex pt-8  justify-between flex-col h-screen w-full">
        <img
          className="w-16 ml-8 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-3xl font-bold"> Get Started with Uber </h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5 "
          >
            <span className="text-white">Continue</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
