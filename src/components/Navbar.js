// Navbar.js
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assests/imfg.png";

const Navbar = () => {
  return (
    <div className="bg-black/90">
      <div className="h-[5rem] flex items-center justify-between px-4 md:max-w-[90vw] mx-auto">
        {/* Left */}
        <div className="flex items-center">
          <div className="flex w-[3rem] h-[3rem] bg-white rounded-full">
            <img src={logo} alt="" className="object-cover" />
          </div>
          <div className="text-white font-bold">
            <p className="text-[21px] pl-2">Video Call App</p>
          </div>
        </div>

        {/* Right */}
        <div className="">
          <ul className="text-white font-bold flex items-center gap-4 cursor-pointer">
            {/* Use NavLink for active styling */}
            <li>
              <NavLink to="/about" activeClassName="text-blue-500">
                About Us
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
