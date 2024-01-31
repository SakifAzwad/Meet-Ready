"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TwoPersonEvent = () => {
  const [next1, setNext1] = useState(false);
  const [location, setLocation] = useState("");
  const router = useRouter()
  const session = useSession();
  const email = session?.data?.user?.email;
  const [isChecked, setIsChecked] = useState([]);
  const [fromTime1, setFromTime1] = useState("");
  const [toTime1, setToTime1] = useState("");

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [selectedDay, setSelectedDay] = useState(null);
  // const [checkboxValues, setCheckboxValues] = useState(daysOfWeek.map(() => false));
  const [checkboxValues, setCheckboxValues] = useState([]);
  const [timeSlots, setTimeSlots] = useState("");

  const formHandler = async (e) => {
    e.preventDefault();

    const eventTitle = e.target.title.value;
    const eventSlug = e.target.slug.value;
    const eventDuration = e.target.duration.value;
    // const eventDay = e.target.days.value;
    const fromTime = e.target.fromTime.value;
    const toTime = e.target.toTime.value;
    // const eventDate = e.target.date.value;
    const meetingLink = e.target.meetingLink.value;
    const eventLocation = e.target.location.value;
    const eventStatus = 'Pending'
    const oneEventInfo = {
      eventTitle,
      eventSlug,
      eventDuration,
      // eventDay,
      fromTime,
      toTime,
      // eventDate,
      meetingLink,
      eventLocation,
      email,
      eventStatus,
      fromTime1,
      toTime1,
      selectedDay,
      timeSlots,
      checkboxValues
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

  const handleCheckboxChange = (day) => {
    const indexs = daysOfWeek.indexOf(day);
    const newCheckboxValues = [...checkboxValues];
    const newIsChecked = [...isChecked];

    newCheckboxValues[indexs] = !checkboxValues[indexs];
    newIsChecked[indexs] = newCheckboxValues[indexs];

    setCheckboxValues(newCheckboxValues);
    setIsChecked(newIsChecked);
    setSelectedDay(newCheckboxValues[indexs] ? day : null);

    const time = { selectedDay, fromTime1, toTime1 };
    setTimeSlots(time);

    console.log(timeSlots);
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
              name="title"
            />
          </div>

          {/* PAGE SLUG */}

          <div className="">
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
          </div>
        </div>

        {/* <button onClick={()=>setNext1(!next1)} className="btn">Next</button> */}

        <div className="">
          {/* APPONITTYPES */}

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
              name="duration"
              className="select select-bordered w-full "
            >
              <option disabled value="default">
                Select Duration
              </option>
              <option value="10 minutes">10 minutes</option>
              <option value="15 minutes ">15 minutes</option>
              <option value="20 minutes">20 minutes</option>
              <option value="25 minutes">25 minutes</option>
              <option value="30 minutes">30 minutes</option>
              <option value="40 minutes">40 minutes</option>
              <option value="45 minutes">45 minutes</option>
              <option value="50 minutes">50 minutes</option>
              <option value="60 minutes">60 minutes</option>
            </select>
          </div>
        </div>

        <div className="my-6  ">
          {/* Time zone */}
          <label className="label">
            <span className="label-text font-semibold text-black text-xl">
              Daily availability
            </span>
          </label>
          <p className="text-sm">Set your availability during the week.</p>

          <div className="">
            {/* first tme slots */}

            <div className=" ">
              {daysOfWeek.map((day, index) => (
                <div
                  key={index}
                  className="flex flex-row  gap-4 space-x-3  items-center"
                >
                  <input
                    className="checkbox checkbox-xs"
                    type="checkbox"
                    checked={checkboxValues[index]}
                    onChange={() => handleCheckboxChange(day)}
                  />
                  <label className="label">
                    <span className="label-text mr-4">{day}</span>

                    <select
                      className="select select-bordered select-xs w-[105px] my-3 max-w-xs"
                      name="fromTime"
                      disabled={!isChecked[index]}
                      onChange={(event) => setFromTime1(event.target.value)}
                      defaultValue="default"
                    >
                      {" "}
                      <option disabled value="default" selected>
                        {" "}
                        From
                      </option>
                      <option value="6:00 AM">6:00 AM</option>
                      <option value="6:00 AM">6:30 AM</option>
                      <option value="7:00 AM">7:00 AM</option>
                      <option value="7:30 AM">7:30 AM</option>
                      <option value="8:00 AM">8:00 AM</option>
                      <option value="8:30 AM">8:30 AM</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="9:30 AM">9:30 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="10:30 AM">10:30 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="12:30 PM">12:30 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="1:30 PM">1:30 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="2:30 PM">2:30 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="3:30 PM">3:30 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="4:30 PM">4:30 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="5:30 PM">5:30 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="6:30 PM">6:30 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="7:30 PM">7:30 PM</option>
                      <option value="8:00 PM">8:00 PM</option>
                      <option value="8:30 PM">8:30 PM</option>
                      <option value="9:00 PM">9:00 PM</option>
                      <option value="9:30 PM">9:30 PM</option>
                      <option value="10:00 PM">10:00 PM</option>
                      <option value="10:30 PM">10:30 PM</option>
                      <option value="11:00 PM">11:00 PM</option>
                      <option value="11:30 PM">11:30 PM</option>
                      <option value="12:00 AM">12:00 AM</option>
                    </select>

                    <select
                      className="select select-bordered select-xs w-[105px] my-3 max-w-xs"
                      name="toTime"
                      value={toTime1}
                      disabled={!isChecked[index]}
                      onChange={(event) => setToTime1(event.target.value)}
                      defaultValue="default"
                    >
                      {" "}
                      <option disabled value="default" selected>
                        {" "}
                        To
                      </option>
                      <option value="6:00 AM">6:00 AM</option>
                      <option value="6:00 AM">6:30 AM</option>
                      <option value="7:00 AM">7:00 AM</option>
                      <option value="7:30 AM">7:30 AM</option>
                      <option value="8:00 AM">8:00 AM</option>
                      <option value="8:30 AM">8:30 AM</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="9:30 AM">9:30 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="10:30 AM">10:30 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="12:30 PM">12:30 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="1:30 PM">1:30 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="2:30 PM">2:30 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="3:30 PM">3:30 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="4:30 PM">4:30 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="5:30 PM">5:30 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="6:30 PM">6:30 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="7:30 PM">7:30 PM</option>
                      <option value="8:00 PM">8:00 PM</option>
                      <option value="8:30 PM">8:30 PM</option>
                      <option value="9:00 PM">9:00 PM</option>
                      <option value="9:30 PM">9:30 PM</option>
                      <option value="10:00 PM">10:00 PM</option>
                      <option value="10:30 PM">10:30 PM</option>
                      <option value="11:00 PM">11:00 PM</option>
                      <option value="11:30 PM">11:30 PM</option>
                      <option value="12:00 AM">12:00 AM</option>
                    </select>
                  </label>
                </div>
              ))}
            </div>
            {/* first time ends */}
          </div>

          <div className="flex md:flex-row flex-col gap-3 items-center">
            {/* first date */}

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
            {/* first date */}

            {/* 2nd date */}
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
                name="Date"
              />
            </div>

            {/* 2nd date */}
          </div>

          <div className="">
            <select
              className="select select-bordered select-xl w-[150px] my-3 max-w-xs"
              onChange={eHandle}
              name="location"
              value={location}
              defaultValue="default"
            >
              <option value="default" selected>
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
