import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import pop2 from "../assests/pop2.jpg";
import Navbar from "../components/Navbar.js";
import { useAuth } from "../components/AuthContext.js"; // Replace with the actual path to AuthContext

const Home = () => {
  const [RoomCode, setRoomCode] = useState("");
  const navigate = useNavigate();
  const { authenticated } = useAuth();

  const handleSignUp = () => {
    navigate(`/signup`);
  };

  const handleLogin = () => {
    navigate(`/login`); // Replace with the actual path to the login page
  };

  const submitCode = (e) => {
    e.preventDefault();
    if (authenticated) {
      navigate(`/room/${RoomCode}`);
    } else {
      handleSignUp();
    }
  };

  return (
    <div className=" ">
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <div className="relative h-screen ">
        {/* Image */}
        <div className="absolute h-full w-full flex overflow-hidden">
          <img src={pop2} className="object-cover  w-full h-full" />
        </div>
        {/* Overlay */}
        <div className="absolute h-full w-full flex overflow-hidden bg-black/60"></div>
        {/* Hero Info */}
        <div className="lg:flex lg:pt-20 flex-col items-center justify-center relative z-10 px-6 md:max-w-[90vw] mx-auto">
          {/* Main */}
          <div className=" flex flex-col items-center justify-center pb-8">
            <h1 className="text-[50px] md:text-[80px] text-black font-bold font-italic pt-12">
              Video Chat App
            </h1>
            <p className="text-[26px] text-brown  -mt-2">
              Experience the future of seamless connectivity with simplicity and efficiency! 😊
            </p>
          </div>

          {/* Enter Code */}
          <form
            onSubmit={submitCode}
            className="text-white md:pt-12 flex flex-col items-center justify-center"
          >
            <div className=" flex flex-col justify-center items-center">
              <label className="text-[30px] md:text-[40px] font-bold pt-6 text-black">
                Enter Room Code
              </label>
              <input
                type="text"
                required
                placeholder="Enter Room Code"
                value={RoomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                className="py-1.5 md:py-2 px-4 rounded-full max-w-[14rem] mt-2 text-black md:mt-6 outline-0"
              />
            </div>
            <button
              type="submit"
              className=" bg-blue-500 hover:bg-blue-400 duration-100 ease-out font-bold w-[5rem] md:w-[7rem] rounded-full py-[5px] md:py-[7px] mt-2 md:mt-4 "
            >
              Go
            </button>
          </form>

          {/* Sign Up and Login buttons */}
          <div className="flex mt-4 space-x-4">
            <button
              onClick={handleSignUp}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Sign Up
            </button>
            <button
              onClick={handleLogin}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
