
import Image from "next/image";
import React from "react";
import logo from "@/assets/meetReadyLogo.png";
import mobileLogo from "@/assets/meetReadyLogoMobile.png";
import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";
import userLogo from "@/assets/userLogo.png";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { signOut } from "next-auth/react";
import Logout from "../Logout/Logout";

const Navbar = async () => {
  // const user = false;
  const session = await getServerSession(authOptions)
  const user = session?.user;
  console.log(session)
  console.log(user)
  return (
    <div className="navbar bg-purple-200  text-black">
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
          <FaMagnifyingGlass className="text-xl absolute left-2 text-gray-600" />
          <input
            type="text"
            placeholder="Search here"
            className="input input-bordered pl-8 font-medium border-purple-300 focus:border-purple-300 w-40 md:w-60 lg:w-72"
          />
        </div>

        {/* user avatar */}
        {user ? (
          <>
            <div className="dropdown dropdown-end hidden lg:flex z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar z-10"
              >
                <div className="w-10 rounded-full z-10">
                  <Image
                    src={userLogo}
                    alt="user Logo"
                    width={"50"}
                    height={"50"}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 "
              >
                <li>
                  <a className="font-semibold z-50">{user?.name}</a>
                </li>
                <li>
                  <a className="font-semibold z-50">{user?.email}</a>
                </li>
                <hr />
                <li>
                  <Link href={"/editProfile"}>Edit Profile</Link>
                </li>
                <li>
                  {/* <a>Logout</a> */}
                  <Logout/>
                </li>
              </ul>
              
            </div>
          </>
        ) : (
          <>
            <Link href={"/login"}>
              <button className="btn hidden md:hidden glass text-lg bg-purple-700 text-white hover:bg-purple-800 lg:flex">
                Login
              </button>
            </Link>
          </>
        )}

        <div className="flex lg:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn glass bg-purple-800 text-white"
            >
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
          <div className="drawer-side z-50">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-72 min-h-full text-lg font-semibold bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li className="border-b">
                <Link href={"/"}>Home</Link>
              </li>
              {user ? (
                <>
                  <li className="border rounded-lg my-3">
                    <div className="flex justify-start items-center">
                      <div className="w-10 rounded-full">
                        <Image
                          src={userLogo}
                          alt="user Logo"
                          width={"50"}
                          height={"50"}
                        />
                      </div>
                      <a>{user?.name}</a>
                    </div>
                    <a>{user?.email}</a>
                  </li>

                  <hr />
                  <li className="border-b">
                    <Link href={"/editProfile"}>Edit Profile</Link>
                  </li>
                  <li className="border-b">
                    {/* <a >Logout</a> */}
                    <Logout/>
                  </li>
                </>
              ) : (
                <>
                  <li className="border-b">
                    <Link href={"/login"}>Log In</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
