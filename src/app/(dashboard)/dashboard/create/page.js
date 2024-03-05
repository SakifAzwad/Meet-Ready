"use client";
import Lottie from "lottie-react";
import Link from "next/link";
import GroupMeet from "../../../../assets/GroupMeet.json";
import MeetAnimation from "../../../../assets/Meet.json";

const CreateEvent = () => {
  return (
    <div className="px-10 md:px-0">
      <h1 className="text-2xl md:text-4xl font-extrabold text-center my-12 text-purple-900">
        Choose a Event Type
      </h1>

      <div className="flex md:flex-row justify-center gap-8 items-center flex-col">
        <div className="relative md:w-96 h-full md:h-96 bg-purple-100 w-full border-2 shadow-lg px-6 rounded-md ">
          <Lottie style={{ height: "150px" }} animationData={MeetAnimation} />
          <h1 className="text-2xl font-semibold text-center mb-4 text-black">
            One-on-One
          </h1>
          <p className="h-[80px]">
            Help clients and colleagues find a time to book with me. Good for
            sales executives, realtors, HR consultants
          </p>

          <Link
            className="md:absolute bottom-8 pl-24 md:pl-0 left-1/2 transform -translate-x-1/2"
            href={"/dashboard/createNewEvent"}
          >
            <button className="text-lg py-2 px-4 rounded-md before:block before:absolute hover:before:bg-pink-300 before:w-0 before:h-0 hover:before:h-20 hover:before:w-40 before:-bottom-2 before:-right-2 before:duration-500 before:rounded-xl before:-z-10 relative inline-block transform  font-medium bg-transparent border-2 overflow-hidden border-purple-900 duration-500">
              Visit Page
            </button>
          </Link>
        </div>

        <div className="relative md:w-96 h-full md:h-96 bg-purple-100 w-full border-2 shadow-lg px-6 rounded-md">
          <Lottie
            style={{ height: "120px", marginTop: "10px" }}
            animationData={GroupMeet}
          />
          <h1 className="text-2xl font-semibold text-center my-4 text-black">
            Group Sessions
          </h1>
          <p className="h-[80px]">
            Help clients book a seat in one of the upcoming sessions. Good for
            yoga classes, virtual events.
          </p>

          <Link
            className="md:absolute pl-24 md:pl-0 bottom-8 left-1/2 transform -translate-x-1/2"
            href={"/dashboard/teamEvent"}
          >
            <button className="text-lg py-2 px-4 rounded-md before:block before:absolute hover:before:bg-pink-300 before:w-0 before:h-0 hover:before:h-20 hover:before:w-40 before:-bottom-2 before:-right-2 before:duration-500 before:rounded-xl before:-z-10 relative inline-block transform  font-medium bg-transparent border-2 overflow-hidden border-purple-900 duration-500 ">
              Visit Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
