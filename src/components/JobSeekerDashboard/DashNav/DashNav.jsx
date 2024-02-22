"use client";
import Image from "next/image";
import logo from "@/assets/meetReadyLogo.png";
import MeetLogo from "../../../../public/Meet.json";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowRightFromBracket,
  FaBars,
  FaCalendar,
  FaHouse,
  FaLink,
  FaPlus,
} from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import mobileLogo from "@/assets/meetReadyLogoMobile.png";
import { useContext, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import DashNavButton from "@/components/DashNavButton/DashNavButton";
import UserName from "../UserName/UserName";
import UserImage from "../UserImage/UserImage";
import { cartContext } from "@/utils/Cart/CartContext";
import Lottie from "lottie-react";

const DashNav = () => {
  const { isClicked, setIsClicked } = useContext(cartContext);
  const session = useSession();
  const userImage = session?.data?.user?.image;

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
            <DashNavButton
              onClick={() => setIsClicked(false)}
              className="btn btn-sm absolute right-6 top-2 text-purple-700"
            >
              <FaArrowRight />
            </DashNavButton>
          ) : (
            <DashNavButton
              onClick={() => setIsClicked(true)}
              className="btn btn-sm absolute right-2 top-2 text-purple-700"
            >
              <FaArrowLeft />
            </DashNavButton>
          )}

          {isClicked ? (
            <Link href={"/"}>
              <Lottie
                animationData={MeetLogo}
                style={{
                  width: "100px",
                  height: "100px",
                }}
              />
            </Link>
          ) : (
            <div className="flex items-center">
              <Lottie
                animationData={MeetLogo}
                style={{
                  width: "100px",
                  height: "100px",
                }}
              />
              <p className="text-center text-3xl">
                <span
                  className="text-3xl font-black"
                  style={{
                    color: "white",
                    WebkitTextFillColor: "black",
                    WebkitTextStroke: "1.5px purple",
                    fontSize: "28px",
                    fontWeight: "bolder",
                  }}
                >
                  MeetReady
                </span>
              </p>
            </div>
          )}
          {isClicked ? "" : <UserName />}

          {isClicked ? (
            ""
          ) : (
            <div className="flex justify-center">
              <UserImage userImage={userImage} />
            </div>
          )}

          <Link
            href={"/Job-Seeker-Dashboard/createProfile"}
            className="flex justify-center items-center"
          >
            <DashNavButton
              className={`flex justify-start items-center hover:bg-purple-400 text-lg font-semibold gap-3 duration-500 btn glass bg-purple-300 w-full  ${
                isClicked && "btn glass"
              } ${pathname === "/Job-Seeker-Dashboard/createProfile" && "bg-purple-500 "}`}
            >
              <FaPlus />
              {isClicked ? "" : "Create Profile"}
            </DashNavButton>
          </Link>

          <Link
            href={"/Job-Seeker-Dashboard/profile"}
            className="flex justify-center items-center"
          >
            <DashNavButton
              className={`flex justify-start items-center hover:bg-purple-400 text-lg font-semibold gap-3 duration-500 btn glass bg-purple-300 w-full  ${
                isClicked && "btn glass"
              } ${pathname === "/Job-Seeker-Dashboard/profile" && "bg-purple-500 "}`}
            >
              <RxAvatar /> {isClicked ? "" : "Profile"}
            </DashNavButton>
          </Link>

          <Link
            href={"/dashboard/scheduled-event"}
            className="flex justify-center items-center"
          >
            <DashNavButton
              className={`flex justify-start items-center hover:bg-purple-400 text-lg font-semibold gap-3 duration-500 btn glass bg-purple-300 w-full  ${
                isClicked && "btn glass"
              } ${
                pathname === "/dashboard/scheduled-event" && "bg-purple-500"
              }`}
            >
              <FaCalendar /> {isClicked ? "" : "Scheduled Events"}
            </DashNavButton>
          </Link>
        </div>

        <div className="p-3">
          <Link href={"/"}>
            <DashNavButton className="w-full flex justify-start items-center text-lg font-semibold gap-3 duration-500 btn glass bg-purple-300  hover:bg-purple-400">
              {isClicked ? (
                <FaHouse />
              ) : (
                <>
                  <FaHouse /> Go to Home
                </>
              )}
            </DashNavButton>
          </Link>
          <DashNavButton
            onClick={() => signOut()}
            className="w-full mt-2 flex justify-start items-center text-lg font-semibold gap-3 duration-500 btn glass bg-purple-300  hover:bg-purple-400"
          >
            {isClicked ? (
              <FaArrowRightFromBracket />
            ) : (
              <>
                <FaArrowRightFromBracket /> Logout
              </>
            )}
          </DashNavButton>
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

            {/* USER NAME */}

            <UserName />

            {/* USER IMAGE */}

            <div className="flex justify-center">
              <UserImage userImage={userImage} />
            </div>

            <Link href={"/Job-Seeker-Dashboard/createProfile"}>
              <DashNavButton
                className={`btn glass bg-purple-300 hover:bg-purple-400  text-lg w-full flex justify-start items-center ${
                  pathname === "/Job-Seeker-Dashboard/createProfile" &&
                  "bg-purple-500 "
                }`}
              >
                <FaPlus />
                Create Profile
              </DashNavButton>
            </Link>

            <hr />
            <Link href={"/Job-Seeker-Dashboard/profile"}>
              <DashNavButton
                className={`flex justify-start items-center hover:bg-purple-400 text-lg font-semibold gap-3 duration-500 btn glass bg-purple-300 w-full
                  } ${pathname === "/Job-Seeker-Dashboard/profile" && "bg-purple-500 "}`}
              >
                <RxAvatar /> Profile
              </DashNavButton>
            </Link>

            <hr />
            <Link href={"/dashboard/scheduled-event"}>
              <DashNavButton
                className={`flex justify-start items-center hover:bg-purple-400 text-lg font-semibold gap-3 duration-500 btn glass bg-purple-300 w-full ${
                  pathname === "/dashboard/scheduled-event" && "bg-purple-500"
                }`}
              >
                <FaCalendar /> Scheduled Events
              </DashNavButton>
            </Link>

            <hr />

            <DashNavButton
              onClick={() => signOut()}
              className="flex justify-start items-center text-lg font-semibold gap-3 duration-500 btn glass bg-purple-300  hover:bg-purple-400"
            >
              {isClicked ? (
                <FaArrowRightFromBracket />
              ) : (
                <FaArrowRightFromBracket />
              )}
              {"Log Out"}
            </DashNavButton>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashNav;
