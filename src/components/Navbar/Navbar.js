"use client";
// import styles from "./Navbar.module.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import logo from "@/assets/meetReadyLogo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Logout from "../Logout/Logout";
// import { useFetchDataAndSetUser } from "./fetchDataAndSetUser";


const Navbar = () => {

  // const session = await getServerSession(authOptions)

  // console.log('session in navbar', session)

  // const user = session?.user
  // console.log(user)

  const user=false;
  // const currentPath = window.location.pathname;
  // const router = useRouter();
  const currentPath = "/";
  const [isSticky, setIsSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const threshold = 1;
  //     setIsSticky(scrollY > threshold);
  //   };

  //   if (typeof window !== 'undefined') {
  //     // Add event listener when component mounts
  //     window.addEventListener("scroll", handleScroll);

  //     // Remove event listener when component unmounts
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }
  // }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav
      className={`${
        isSticky
          ? "bg-purple-200"
          : "bg-gradient-to-r from-[#E7F1FE] via-[#ECF0FE] to-[#F5EEFF]"
      } ${
        isSticky ? "fixed top-0 w-full" : ""
      } transition-colors duration-300 ease-in-out`}
    >
      <div className={`flex items-center justify-between lg: `}>
        <div className="flex space-x-6 items-center">
          <Image
            className="py-4 ml-12 mr-4"
            src={logo}
            width={"200"}
            height={"150"}
            alt="logo"
          />
          <ul className="hidden lg:flex text-col0 font-light justify-evenly items-center gap-x-4 text-lg menu-vertical lg:menu-horizontal px-1">
            <li
              className={currentPath === "/" ? `text-purple-800 font-bold` : ``}
            >
              <a
                className="relative after:bg-purple-500 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <Link
                className="font-normal relative after:bg-purple-500 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer"
                href="/features"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                className="font-normal relative after:bg-purple-500 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer"
                href="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className="font-normal relative after:bg-purple-500 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer"
                href="/about"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:flex hidden">
          <div className="relative text-gray-600">
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <svg
                className="h-4 w-4 fill-current text-purple-900"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style={{ enableBackground: "new 0 0 56.966 56.966" }}
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
          <div>
            {
              user ?
              (<Logout/>) :
              (

                <a
              className=" ml-4 mr-12 flex h-min items-center disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 justify-center ring-none  rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  bg-purple-400 border-b-violet-700 disabled:border-0 disabled:bg-violet-500 disabled:text-white ring-white text-white border-b-4 hover:border-0 active:border-0 hover:text-gray-100 active:bg-violet-800 active:text-gray-300 focus-visible:outline-violet-500 text-sm sm:text-base"
              href="/login"
            >
              Login
            </a>
              )
            }
            
          </div>
        </div>
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <svg
              className="w-6 h-6 mx-6 text-purple-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6 mx-6 text-purple-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {isSidebarOpen && (
        <div className="lg:hidden mt-4 ">
          {/* Your sidebar content goes here */}
          <ul className="flex font-light justify-evenly items-left gap-y-4 text-lg menu-vertical lg:menu-horizontal pl-12">
            <li
              className={currentPath === "/" ? `text-purple-800 font-bold` : ``}
            >
              <a
                className="relative after:bg-purple-500 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <Link
                className="font-normal relative after:bg-purple-500 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer"
                href="/rooms"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                className="font-normal relative after:bg-purple-500 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer"
                href="/mybookings"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className="font-normal relative after:bg-purple-500 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer"
                href="/aboutus"
              >
                About Us
              </Link>
            </li>
          </ul>
          <div className="lg:flex mb-4">
          <div className="relative text-gray-600">
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="bg-white h-10 ml-12 my-4 px-5 pr-10 rounded-full text-sm focus:outline-none"
            />
            <button type="submit" className="absolute left-64  top-4 mt-3 mr-4">
              <svg
                className="h-4 w-4 fill-current text-purple-900"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style={{ enableBackground: "new 0 0 56.966 56.966" }}
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
          <div className="pb-2">
            <a
              className=" mx-12 mb-4 flex h-min items-center disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 justify-center ring-none  rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  bg-purple-400 border-b-violet-700 disabled:border-0 disabled:bg-violet-500 disabled:text-white ring-white text-white border-b-4 hover:border-0 active:border-0 hover:text-gray-100 active:bg-violet-800 active:text-gray-300 focus-visible:outline-violet-500 text-sm sm:text-base"
              href="/login"
            >
              Login
            </a>
          </div>
        </div>
        </div>
        
      )}
    </nav>
  );
};

export default Navbar;
