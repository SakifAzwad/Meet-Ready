import Image from "next/image";
import React from "react";
import logo from "@/assets/meetReadyLogo.png";
import mobileLogo from "@/assets/meetReadyLogoMobile.png";
import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="navbar bg-black bg-opacity-30 text-black">
      {/* navbar start logo */}
      <div className="navbar-start ml-2">
        <Link href={"/"} className="md:flex hidden">
          <Image src={logo} width={"200"} height={"150"} alt="logo" />
        </Link>
        <Link className="md:hidden flex" href={"/"}>
          <Image src={mobileLogo} width={"50"} height={"150"} alt="logo" />
        </Link>
      </div>

      {/* navbar end  drawer search-bar  login btn*/}
      <div className="navbar-end md:space-x-5 space-x-2 mr-3">
        <div className="flex justify-center items-center relative">
          <FaMagnifyingGlass className="text-xl absolute left-2 text-gray-600"/>
          <input
            type="text"
            placeholder="Search here"
            className="input input-bordered pl-8 font-medium border-purple-300 focus:border-purple-300 w-40 md:w-60 lg:w-72"
          />
        </div>

        <Link href={"/login"}>
          <button className="btn hidden md:hidden glass text-lg bg-purple-700 text-white hover:bg-purple-800 lg:flex">
            Login
          </button>
        </Link>

        <div className="flex lg:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="btn glass bg-purple-800 text-white">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-72 min-h-full text-lg font-semibold bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li className="border-b">
                <Link href={'/'}>Home</Link>
              </li>
              <li className="border-b">
                <Link href={'/login'}>Log In</Link>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;