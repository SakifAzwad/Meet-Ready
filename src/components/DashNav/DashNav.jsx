"use client";
import Image from "next/image";
import logo from "@/assets/meetReadyLogo.png";
import MeetLogo from "../../../public/Meet.json";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowRightFromBracket,
  FaBars,
  FaCalendar,
  FaHouseMedical,
  FaLink,
  FaPlus,
  FaSquarePollVertical,
  FaHouse,
} from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import userLogo from "@/assets/userLogo.png";
import mobileLogo from "@/assets/meetReadyLogoMobile.png";
import { useState } from "react";
import { signOut } from "next-auth/react";
import DashNavButton from "../DashNavButton/DashNavButton";
import Lottie from "lottie-react";

const DashNav = () => {
  const [isClicked, setIsClicked] = useState(false);

  const pathname = usePathname();

  return (
    <div data-testid="parent">
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
              className="btn btn-sm absolute right-6 top-2 "
              data-testid="dash-nav-button-left"
            >
              <FaArrowRight data-testid="fa-arrow-right-icon" />
            </DashNavButton>
          ) : (
            <DashNavButton
              onClick={() => setIsClicked(true)}
              className="btn btn-sm absolute right-2 top-2 "
              data-testid="dash-nav-button-right"
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
            <Link href={"/"}>
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
            </Link>
          )}

          <Link
            href={"/dashboard"}
            className="flex justify-center items-center"
          >
            <DashNavButton
              className={`flex justify-start items-center hover:bg-purple-400 text-lg font-semibold gap-3 duration-500 btn glass bg-purple-300 w-full  ${
                isClicked && "btn glass"
              } ${pathname === "/dashboard" && "bg-purple-500 "}`}
            >
              <FaSquarePollVertical />
              {isClicked ? "" : "Analytics"}
            </DashNavButton>
          </Link>
          <Link
            href={"/dashboard/create"}
            className="flex justify-center items-center"
          >
            <DashNavButton
              className={`flex justify-start items-center hover:bg-purple-400 text-lg font-semibold gap-3 duration-500 btn glass bg-purple-300 w-full  ${
                isClicked && "btn glass"
              } ${pathname === "/dashboard/create" && "bg-purple-500 "}`}
            >
              <FaPlus />
              {isClicked ? "" : "Create"}
            </DashNavButton>
          </Link>

          <Link
            href={"/dashboard/events"}
            className="flex justify-center items-center"
          >
            <DashNavButton
              className={`flex justify-start items-center hover:bg-purple-400 text-lg font-semibold gap-3 duration-500 btn glass bg-purple-300 w-full  ${
                isClicked && "btn glass"
              } ${pathname === "/dashboard/events" && "bg-purple-500 "}`}
            >
              <FaLink /> {isClicked ? "" : "Events"}
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
            <Link href={"/dashboard/createNewEvent"}>
              <DashNavButton
                className={`btn glass bg-purple-300 hover:bg-purple-400  text-lg w-full flex justify-start items-center ${
                  pathname === "/dashboard/createNewEvent" && "bg-purple-500 "
                }`}
              >
                <FaPlus />
                Create
              </DashNavButton>
            </Link>

            <hr />
            <Link href={"/dashboard/events"}>
              <DashNavButton
                className={`flex justify-start items-center hover:bg-purple-400 text-lg font-semibold gap-3 duration-500 btn glass bg-purple-300 w-full
                  } ${pathname === "/dashboard/events" && "bg-purple-500 "}`}
              >
                <FaLink /> Events
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
