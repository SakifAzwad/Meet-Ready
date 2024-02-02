"use client";
import Image from "next/image";
import logo from "@/assets/meetReadyLogo.png";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowRightFromBracket,
  FaBars,
  FaCalendar,
  FaLink,
  FaPlus,
} from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import userLogo from "@/assets/userLogo.png";
import mobileLogo from "@/assets/meetReadyLogoMobile.png";
import { useState } from "react";
import { signOut } from "next-auth/react";

const DashNav = () => {
  const [isClicked, setIsClicked] = useState(false);

  const pathname = usePathname();

  return (
    <div>
      <div
        className={`hidden lg:flex fixed justify-between bg-purple-200 min-h-screen flex-col transition-all duration-300 ${
          isClicked ? "w-20" : "w-72"
        }`}
      >
        <div
          className={`p-5 space-y-5 flex ${
            isClicked && "justify-center items-center"
          } flex-col relative`}
        >
          {isClicked ? (
            <button
              onClick={() => setIsClicked(false)}
              className="btn btn-sm absolute right-6 top-2 "
            >
              <FaArrowRight />
            </button>
          ) : (
            <button
              onClick={() => setIsClicked(true)}
              className="btn btn-sm absolute right-2 top-2 "
            >
              <FaArrowLeft />
            </button>
          )}

          {isClicked ? (
            <Link href={"/"}>
              <Image
                src={mobileLogo}
                width={"40"}
                height={"150"}
                alt="logo"
                className="mt-2"
              />
            </Link>
          ) : (
            <Link href={"/"}>
              <Image src={logo} width={"200"} height={"150"} alt="logo" />
            </Link>
          )}

          <Link
            href={"/dashboard/create"}
            className="flex justify-center items-center"
          >
            <button className="btn glass bg-emerald-600 hover:bg-emerald-800 text-white text-lg">
              <FaPlus />
              {isClicked ? "" : "Create"}
            </button>
          </Link>
         

          <Link href={"/dashboard/events"}>
            <p
              className={`flex justify-start items-center hover:bg-purple-400 text-lg font-semibold gap-3 duration-500 btn glass bg-purple-300  ${
                isClicked && "btn glass"
              } ${pathname === "/dashboard/events" && "bg-purple-500 "}`}
            >
              <FaLink /> {isClicked ? "" : "Events"}
            </p>
          </Link>

          <Link href={"/dashboard/scheduled-event"}>
            <p
              className={`flex justify-start items-center hover:bg-purple-400 text-lg font-semibold gap-3 duration-500 btn glass bg-purple-300  ${
                isClicked && "btn glass"
              } ${
                pathname === "/dashboard/scheduled-event" && "bg-purple-500"
              }`}
            >
              <FaCalendar /> {isClicked ? "" : "Scheduled Events"}
            </p>
          </Link>
        </div>

        <div className="p-5">
          <button 
          onClick={() => signOut()}
          className="w-full glass btn bg-purple-500   text-lg hover:bg-purple-600">
            <FaArrowRightFromBracket /> Log Out
          </button>
        </div>
      </div>

      {/* mobile and tablet device dashboard nav */}
      <div className="drawer flex lg:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content absolute top-1 left-2">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="btn glass bg-purple-800 text-white drawer-button"
          >
            <FaBars />
          </label>
        </div>
        <div className="drawer-side z-40">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 space-y-2 w-72 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <Link href={"/"}>
              <Image src={logo} width={"200"} height={"150"} alt="logo" />
            </Link>

            <hr />
          <Link href={"/dashboard/createNewEvent"}>
          <button className="btn glass bg-emerald-600 hover:bg-emerald-800 text-white text-lg">
              <FaPlus />
              Create
            </button>
          </Link>

            <hr />
            <Link href={"/dashboard/events"}>
              <p
                className={`flex justify-start items-center hover:bg-purple-400 text-lg font-semibold gap-3 duration-500 btn glass bg-purple-300 
                  } ${pathname === "/dashboard/events" && "bg-purple-500 "}`}
              >
                <FaLink /> Events
              </p>
            </Link>

            <hr />
            <Link href={"/dashboard/scheduled-event"}>
              <p
                className={`flex justify-start items-center hover:bg-purple-400 text-lg font-semibold gap-3 duration-500 btn glass bg-purple-300 ${
                  pathname === "/dashboard/scheduled-event" && "bg-purple-500"
                }`}
              >
                <FaCalendar /> Scheduled Events
              </p>
            </Link>

            <hr />
            <button 
            onClick={() => signOut()}
            className="glass  bg-purple-500  btn hover:bg-purple-600 text-lg">
              <FaArrowRightFromBracket /> Log Out
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashNav;
