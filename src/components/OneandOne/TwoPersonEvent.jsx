"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";


// Function to generate options for duration select
const generateDurationOptions = () => {
  const durations = [
    "10 minutes",
    "15 minutes",
    "20 minutes",
    "25 minutes",
    "30 minutes",
    "40 minutes",
    "45 minutes",
    "50 minutes",
    "60 minutes",
  ];

  return durations.map((duration, index) => (
    <option key={index} value={duration}>
      {duration}
    </option>
  ));
};

// Function to generate time options
const generateTimeOptions = () => {
  const times = [
    "6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM",
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
    "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM",
    "12:00 AM"
  ];

  return times.map((time, index) => (
    <option key={index} value={time}>
      {time}
    </option>
  ));
};

const TwoPersonEvent = () => {
  const [next1, setNext1] = useState(false);
  const [location, setLocation] = useState("");
  const router = useRouter()
  const session = useSession();
  const email = session?.data?.user?.email;
 

  const [selectedDays, setSelectedDays] = useState({});

  const checkboxHandler = (day, fromTime, toTime) => {
    setSelectedDays((prevSelectedDays) => ({
      ...prevSelectedDays,
      [day]: { fromTime, toTime },
    }));
  };

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
 

  const formHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const eventTitle = form.eventTitle.value;
    const eventDuration = form.eventDuration.value;
    const availableDays = selectedDays;
    const fromDate = form.fromDate.value;
    const toDate = form.toDate.value;
    const meetingLocation = location;
    const meetingLink = form.meetingLink.value;
    const eventStatus = 'Pending'

    // console.log(selectedDays)

    const oneEventInfo = {
      eventTitle, eventDuration, availableDays, fromDate, toDate, meetingLocation, meetingLink, eventStatus
    };
console.log(oneEventInfo)
    try {
      const res = await fetch("/api/createEvent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(oneEventInfo),
      });

      if (res.status === 500) {
        console.log("An error ocurred please try again.");
      }
      if (res.status === 200) {
        console.log("Event successfully created");
        router.push('/dashboard/events')
      }
    } catch (error) {
      console.log(error);
    }
  };
    
  const eHandle = (event) => {
    setLocation(event.target.value);
  };



  return (
    <div className="my-10">
      <form onSubmit={formHandler}>
        <div className={`${next1 ? "hidden" : "block"} spacey-y-10`}>
          {/* EVENT TITLE */}

          <div className="">
            <label className="label">
              <span className="label-text font-semibold text-black text-xl">
                Event Title
              </span>
            </label>
            <p className="text-sm">
              Make A simple Title To Remember Your Event
            </p>
            <input
              className="w-[380px] outline-none border border-slate-400 h-[40px] rounded-md hover:border-blue-400 p-2"
              type="text"
              name="eventTitle"
            />
          </div>

          {/* PAGE SLUG */}

          {/* <div className="">
            <label className="label">
              <span className="label-text font-semibold text-black text-xl">
                Page Slug
              </span>
            </label>
            <p className="text-sm">How the URL will look like to the public.</p>
            <input
              className="w-[380px] outline-none border border-slate-400 h-[40px] rounded-md hover:border-blue-400 p-2"
              type="text"
              name="slug"
            />
            <p>http://localhost:3000/dashboard/events</p>
          </div> */}
        </div>

        {/* <button onClick={()=>setNext1(!next1)} className="btn">Next</button> */}

        <div className="">
          {/* EVENT DURATION */}

          <div className="space-y-3 my-7">
            <label className="label">
              <span className="label-text font-semibold text-black text-xl">
                Duration (minutes)
              </span>
            </label>
            <p className="text-sm">
              Setup the duration, capacity, and optional pricing of your
              meetings.
            </p>
            <select
              defaultValue="default"
              name="eventDuration"
              className="select select-bordered w-full "
            >
              <option disabled value="default">
                Select Duration
              </option>
              {generateDurationOptions()}
            </select>
          </div>
        </div>

        <div className="my-6  ">
          {/* AVAILABLE DAYS */}
          <label className="label">
            <span className="label-text font-semibold text-black text-xl">
              Daily availability
            </span>
          </label>
          <p className="text-sm">Set your availability during the week.</p>

          <div className="">
            {/* AVAILABLE DAYS AND TIMES */}

            <div className=" ">
              {daysOfWeek.map((day, index) => (
                <div
                  key={index}
                  className="flex flex-row  gap-4 space-x-3  items-center"
                >
                  <input
                className="checkbox checkbox-xs"
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    checkboxHandler(day, "default", "default");
                  } else {
                    const { [day]: _, ...rest } = selectedDays;
                    setSelectedDays(rest);
                  }
                }}
              />
                  <label className="label">
                    <span className="label-text mr-4">{day}</span>

                    <select
                  className="select select-bordered select-xs w-[105px] my-3 max-w-xs"
                  name={`fromTime-${day}`}
                  defaultValue="default"
                  onChange={(e) => {
                    checkboxHandler(day, e.target.value, selectedDays[day]?.toTime);
                  }}
                >
                      <option disabled value="default" >
                        {" "}
                        From
                      </option>
                      {generateTimeOptions()}
                    </select>

                    <select
                  className="select select-bordered select-xs w-[105px] my-3 max-w-xs"
                  name={`toTime-${day}`}
                  defaultValue="default"
                  onChange={(e) => {
                    checkboxHandler(day, selectedDays[day]?.fromTime, e.target.value);
                  }}
                >
                      <option disabled value="default" >
                        {" "}
                        To
                      </option>
                      {generateTimeOptions()}
                    </select>
                  </label>
                </div>
              ))}
            </div>
            {/* first time ends */}
          </div>

          <div className="flex md:flex-row flex-col gap-3 items-center">
            {/* FIRST FREE DAY */}

            <div className="">
              <label className="label">
                <span className="label-text font-semibold text-black text-xl">
                  Pick Your Free Days (From)
                </span>
              </label>
              <p className="text-sm">Make some Time For Your Meeting</p>
              <input
                className="w-[230px] outline-none border border-slate-400 h-[40px] rounded-md hover:border-blue-400 p-2"
                type="date"
                name="fromDate"
              />
            </div>
            {/* FIRST FREE DAY  */}

            {/* SECOND FREE DAY  */}
            <div className="">
              <label className="label">
                <span className="label-text font-semibold text-black text-xl">
                  Pick Your Free Days (To)
                </span>
              </label>
              <p className="text-sm">Make some Time For Your Meeting</p>
              <input
                className="w-[230px] outline-none border border-slate-400 h-[40px] rounded-md hover:border-blue-400 p-2"
                type="date"
                name="toDate"
              />
            </div>

            {/* SECOND FREE DAY  */}
          </div>

          <div className="">
            <select
              className="select select-bordered select-xl w-[150px] my-3 max-w-xs"
              onChange={eHandle}
              name="location"
              value={location}
              // defaultValue="default"
            >
              <option value="default" >
                Select Your Location
              </option>
              <option value={"meet"}>Google Meet</option>
              <option value={"zoom"}>Zoom</option>
            </select>
          </div>

          <div className="space-y-5">
            <div className="">
              <label className="label">
                <span className="label-text font-semibold text-black text-xl">
                  Booking Form
                </span>
              </label>
              <p className="text-sm">Create Your Meeting link</p>
              <input
                className="w-[380px] outline-none border border-slate-400 h-[40px] rounded-md hover:border-blue-400 p-2"
                type="text"
                name="meetingLink"
              />
              {location === "zoom" ? (
                <Link
                  className="btn bg-blue-500 hover:bg-blue-400 hover:text-white"
                  href="https://zoom.us/"
                  target="_blank"
                >
                  Create Zoom Link
                </Link>
              ) : (
                ""
              )}

              {location === "meet" ? (
                <Link
                  className="btn bg-blue-500 hover:bg-blue-400 hover:text-white"
                  href="https://meet.google.com/ "
                  target="_blank"
                >
                  Create Meet Link
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className="">
          <button className="border-2 text-xl text-sky-700 w-[230px] rounded-md h-[45px] border-sky-700 hover:before:bg-sky-700 before:w-full before:h-0 hover:before:h-full hover:before:-z-10 hover:before:absolute before:absolute relative before:top-0 hover:before:left-0 before:duration-500 hover:text-white transform origin-top before:block">
            Confirm Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default TwoPersonEvent;
