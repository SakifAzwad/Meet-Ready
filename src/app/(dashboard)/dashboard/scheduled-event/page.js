"use client";
// import EventCard from "@/components/EventCard/EventCard";
import { useSession } from "next-auth/react";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { FaMagnifyingGlass } from "react-icons/fa6";
import Loading from "@/components/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiCalendarDate, CiClock2, CiLink, CiMail } from "react-icons/ci";

const ScheduledEvent = () => {
  // Getting user email from session

  const session = useSession();
  const email = session?.data?.user?.email;
  const name = session?.data?.user?.name;

  // State for storing event

  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(false);

  // function to call api to get scheduled event

  const getScheduledEvent = async (email) => {
    try {
      const res = await axios.get(`/api/event?email=${email}`);
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  // Using tanstack query to call getScheduledEvent function

  const { data, isLoading } = useQuery({
    queryKey: ["scheduledEventGet"],
    queryFn: () => getScheduledEvent(email),
  });

  console.log("data", data);
  // const getScheduledEvent = async() => {
  //   // console.log(email)
  //   setLoading(true)
  //   try {
  //   const res = await fetch (`/api/event?email=${email}`, {
  //     cache: "no-store",
  //   })
  //   if (res.status === 500) {
  //     console.log("An error ocurred please try again.");
  //   }

  //   const eventData = await res.json();
  //   // console.log('event data', eventData)
  //   setEventData(eventData?.scheduledEvent);
  //   setLoading(false)
  // } catch (error) {
  //     setLoading(false)
  //   }
  // }

  // useEffect(() => {
  //   getScheduledEvent()
  // }, [email])

  // console.log(eventData)

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="pt-16 px-10 md:px-0">
      <h1 className="text-3xl text-center md:text-start font-semibold pl-4 md:border-l-4 text-purple-500  border-purple-500">
        Scheduled Events
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pt-10 ">
        {data ? (
          data?.scheduledEvent?.map((event, idx) => (
            <div
              key={idx}
              className="border border-purple-200 rounded-lg  p-6  hover:shadow-md hover:shadow-purple-400"
            >
              <div className="">
                <p className="text-slate-900 text-xl text-start font-semibold mb-5">
                  Event Name {event?.eventTitle}
                </p>
                <div className="space-y-3">
                  <p className="flex font-medium items-center gap-3">
                    <span className="text-xl font-extrabold text-purple-700">
                      <CiCalendarDate />
                    </span>{" "}
                    Date:{" "}
                    <span className="text-normal font-normal">
                      {new Date(event?.selectedDate).toLocaleDateString(
                        "en-US",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </span>
                  </p>
                  <p className=" flex font-medium items-center gap-3">
                    <span className="text-xl font-extrabold text-purple-700">
                      <CiClock2 />
                    </span>{" "}
                    Time:{" "}
                    <span className="text-normal font-normal">
                      {event?.selectedTime}
                    </span>
                  </p>
                  <p className=" flex font-medium items-center gap-3">
                    <span className="text-xl font-extrabold text-purple-700">
                      <CgProfile />
                    </span>{" "}
                    Interviewer:{" "}
                    <span className="text-normal font-normal">
                      {event?.name}
                    </span>
                  </p>
                  <p className=" flex font-medium items-center gap-3">
                    <span className="text-xl font-extrabold text-purple-700">
                      <CiMail />
                    </span>{" "}
                    Email:{" "}
                    <span className="text-normal font-normal">
                      {event?.intervieweeEmail}
                    </span>
                  </p>
                  <p className=" flex font-medium items-center gap-3">
                    <span className="text-xl font-extrabold text-purple-700">
                      <CiLink />
                    </span>{" "}
                    Link:{" "}
                    <span className="text-normal font-normal">
                      {event?.meetingLink}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-2xl font-semibold text-purple-500 text-center">
            No Scheduled Event Available.
          </p>
        )}

        {/* {<ScheduleEvents></ScheduleEvents>} */}
      </div>
    </div>
  );
};

export default ScheduledEvent;
