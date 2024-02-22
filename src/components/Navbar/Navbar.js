/* eslint-disable @next/next/no-img-element */
"use client";
// import styles from "./Navbar.module.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import logo from "@/assets/meetReadyLogo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Logout from "../Logout/Logout";
import InputField from "../InputField/InputField";
import Lottie from "lottie-react";
// import { useFetchDataAndSetUser } from "./fetchDataAndSetUser";
import MeetLogo from "../../../public/Meet.json";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const session = useSession();
  console.log(session.data?.user);

  const [currentPath, setCurrentPath] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const currentPathName = usePathname();
  useEffect(() => {
      setCurrentPath(currentPathName);
  }, [currentPathName]);

  //   if (typeof window !== 'undefined') {
  //     // Add event listener when component mounts

  //     // Remove event listener when component unmounts
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }
  // }, []);

  const name = session.data?.user?.name || "";
  let lastName = "";
  if (name) {
    const nameParts = name.split(" ");
    lastName = nameParts[nameParts.length - 1];
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <nav
      data-testid="homeNavbar"
      className={`sticky top-0 z-50 bg-gradient-to-r from-[#E7F1FE] via-[#ECF0FE] to-[#F5EEFF]`}
    >
      <div className={`flex items-center justify-between lg: `}>
        <div className="flex space-x-6 items-center">
          {/* <Image
            className="py-4 ml-12 mr-4"
            src={logo}
            width={"200"}
            height={"150"}
            alt="logo"
          /> */}
          <div className="flex items-center mr-4 -mt-4 ml-7">
            <Lottie
              animationData={MeetLogo}
              style={{
                width: "90px",
                height: "90px",
              }}
            />
            <p className="mt-2">
              <span
                className="font-black"
                style={{
                  color: "white",
                  WebkitTextFillColor: "black",
                  WebkitTextStroke: "1.5px purple",
                  fontSize: "32px",
                  fontWeight: "bolder",
                }}
              >
                MeetReady
              </span>
            </p>
          </div>
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
            <li  className={currentPath === "/features" ? `text-purple-800 font-bold` : ``}>
              <Link
                className=" relative after:bg-purple-500 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer"
                href="/features"
              >
                Features
              </Link>
            </li>
            <li  className={currentPath === "/pricing" ? `text-purple-800 font-bold` : ``}>
              <Link
                className=" relative after:bg-purple-500 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer"
                href="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li  className={currentPath === "/dashboard" ? `text-purple-800 font-bold` : ``}>
              <Link
                className=" relative after:bg-purple-500 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer"
                href="/dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li  className={currentPath === "/about" ? `text-purple-800 font-bold` : ``}>
              <Link
                className="relative after:bg-purple-500 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer"
                href="/about"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:flex hidden">
          <div className="relative text-gray-600">
            <InputField
              type="search"
              name="search"
              placeholder="Search"
              className="text-gray-700 bg-white border focus:border-purple-400 dark:focus:border-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-purple-300 h-10 px-5 pr-10 rounded-full text-sm"
            />
            {/* <input
              type="search"
              name="search"
              placeholder="Search"
              className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
            /> */}
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
            {session.data?.user?.email ? (
              <div className="dropdown dropdown-end  flex justify-center items-center gap-2">
                <div
                  tabIndex={0}
                  role="button"
                  className="mx-12 mb-4 flex h-min items-center disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 justify-center ring-none  rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  bg-purple-400 border-b-violet-700 disabled:border-0 disabled:bg-violet-500 disabled:text-white ring-white text-white border-b-4 hover:border-0 active:border-0 hover:text-gray-100 active:bg-violet-800 active:text-gray-300 focus-visible:outline-violet-500 text-sm sm:text-base"
                >
                  <div className="w-10 ">
                    <p className="text-wrap">{lastName}</p>
                  </div>

                  <ul
                    tabIndex={0}
                    className=" mt-64 z-[1] p-2 shadow menu menu-sm dropdown-content bg-purple-400  dark:text-black dark:border-white dark:border-2 dark:border-opacity-50 dark:shadow-lg dark:ring-2 dark:ring-white dark:ring-opacity-50 dark:ring-offset-2 dark:ring-offset-white dark:ring-offset-opacity-50 dark:divide-white"
                  >
                    <li className=" rounded-lg mt-2 flex items-center justify-center text-center text-white">
                      <p className="text-wrap">
                        {session.data?.user?.name || ""}
                      </p>
                    </li>
                    <li className="border rounded-lg mt-2 flex items-center justify-center text-center text-white hover:bg-black dark:hover:bg-white dark:hover:text-black">
                      <Link
                        href={"/dashboard/profile"}
                        className="justify-center w-full text-center flex"
                      >
                        Profile
                      </Link>
                    </li>
                    <li className="border rounded-lg mt-2 flex items-center justify-center text-white text-center hover:bg-black dark:hover:bg-white dark:hover:text-black">
                      <Link
                        href={`/dashboard`}
                        className="justify-center w-full text-center flex"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li className="border rounded-lg mt-2 flex items-center text-white justify-center text-center hover:bg-black dark:hover:bg-white dark:hover:text-black">
                      <button
                        onClick={handleSignOut}
                        className="justify-center w-full text-center flex"
                      >
                        LogOut
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-8">
                <p className="btn bg-transparent hover:bg-transparent border-none rounded-full text-4xl text-black dark:text-white cursor-pointer"></p>
                <Link title="Login" href="/login">
                  <button className="mx-12 mb-4 flex h-min items-center disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 justify-center ring-none  rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  bg-purple-400 border-b-violet-700 disabled:border-0 disabled:bg-violet-500 disabled:text-white ring-white text-white border-b-4 hover:border-0 active:border-0 hover:text-gray-100 active:bg-violet-800 active:text-gray-300 focus-visible:outline-violet-500 text-sm sm:text-base">
                    Login
                  </button>
                </Link>
              </div>
            )}
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
                href="/dashboard"
              >
                Dashboard
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
          <div className="lg:flex mb-4">
            <div className="relative text-gray-600">
              <InputField
                type="search"
                name="search"
                placeholder="Search"
                className="bg-white h-10 ml-12 my-4 px-5 pr-10 rounded-full text-sm text-gray-700  border focus:border-purple-400 dark:focus:border-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-purple-300"
              />

              {/* <input
              type="search"
              name="search"
              placeholder="Search"
              className="bg-white h-10 ml-12 my-4 px-5 pr-10 rounded-full text-sm focus:outline-none"
            /> */}
              <button
                type="submit"
                className="absolute left-64  top-4 mt-3 mr-4"
              >
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
              {session.data?.user?.email ? (
                <div className="dropdown dropdown-end  flex justify-center items-center gap-2">
                  <div
                    tabIndex={0}
                    role="button"
                    className="mx-12 mb-4 flex h-min items-center disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 justify-center ring-none  rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  bg-purple-400 border-b-violet-700 disabled:border-0 disabled:bg-violet-500 disabled:text-white ring-white text-white border-b-4 hover:border-0 active:border-0 hover:text-gray-100 active:bg-violet-800 active:text-gray-300 focus-visible:outline-violet-500 text-sm sm:text-base"
                  >
                    <div className="w-10 ">
                      <p className="text-wrap">{lastName}</p>
                    </div>

                    <ul
                      tabIndex={0}
                      className=" hidden mt-64 z-[1] p-2 shadow menu menu-sm dropdown-content bg-purple-400  dark:text-black dark:border-white dark:border-2 dark:border-opacity-50 dark:shadow-lg dark:ring-2 dark:ring-white dark:ring-opacity-50 dark:ring-offset-2 dark:ring-offset-white dark:ring-offset-opacity-50 dark:divide-white"
                    >
                      <li className=" rounded-lg mt-2 flex items-center justify-center text-center text-white">
                        <p className="text-wrap">
                          {session.data?.user?.name || ""}
                        </p>
                      </li>
                      <li className="border rounded-lg mt-2 flex items-center justify-center text-center text-white hover:bg-black dark:hover:bg-white dark:hover:text-black">
                        <Link
                          href={"/dashboard/profile"}
                          className="justify-center w-full text-center flex"
                        >
                          Profile
                        </Link>
                      </li>
                      <li className="border rounded-lg mt-2 flex items-center justify-center text-white text-center hover:bg-black dark:hover:bg-white dark:hover:text-black">
                        <Link
                          href={`/dashboard`}
                          className="justify-center w-full text-center flex"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li className="border rounded-lg mt-2 flex items-center text-white justify-center text-center hover:bg-black dark:hover:bg-white dark:hover:text-black">
                        <button
                          onClick={handleSignOut}
                          className="justify-center w-full text-center flex"
                        >
                          LogOut
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-8">
                  <p className="btn bg-transparent hover:bg-transparent border-none rounded-full text-4xl text-black dark:text-white cursor-pointer"></p>
                  <Link title="Login" href="/login">
                    <button className="mx-12 mb-4 flex h-min items-center disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 justify-center ring-none  rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  bg-purple-400 border-b-violet-700 disabled:border-0 disabled:bg-violet-500 disabled:text-white ring-white text-white border-b-4 hover:border-0 active:border-0 hover:text-gray-100 active:bg-violet-800 active:text-gray-300 focus-visible:outline-violet-500 text-sm sm:text-base">
                      Login
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
