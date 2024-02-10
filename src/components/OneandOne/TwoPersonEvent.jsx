"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import InputField from "../InputField/InputField";


// Function to generate options for duration select
const generateDurationOptions = () => {
  const durations = [
    "10 minutes",
    "15 minutes",
    "20 minutes",
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

// Function to generate time slots based on event duration
const generateTimeSlots = (duration) => {
  const totalMinutes = parseInt(duration);
  const timeSlots = [];
  
  for (let i = 0; i < 24 * 60; i += totalMinutes) {
    const startHour = Math.floor(i / 60);
    const startMinute = i % 60;
    
    const endHour = Math.floor((i + totalMinutes) / 60);
    const endMinute = (i + totalMinutes) % 60;
    
    const startTime = `${startHour.toString().padStart(2, '0')}:${startMinute.toString().padStart(2, '0')}`;
    const endTime = `${endHour.toString().padStart(2, '0')}:${endMinute.toString().padStart(2, '0')}`;
    
    timeSlots.push(`${startTime}-${endTime}`);
  }

  return timeSlots;
};

const TwoPersonEvent = () => {
  const [next1, setNext1] = useState(false);
  const [location, setLocation] = useState("");
  const router = useRouter()
  const session = useSession();
  const email = session?.data?.user?.email;
  const name = session?.data?.user?.name
  const [fromDate, setFromDate] = useState([]);
  const [toDate, setToDate] = useState([]);
  // State to store selected event duration
const [eventDuration, setEventDuration] = useState("");
const queryClient = useQueryClient();


  // Function to generate an array of dates between two dates
const getDatesInRange = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const dates = [];

  while (startDate <= endDate) {
    dates.push(new Date(startDate));
    startDate.setDate(startDate.getDate() + 1);
  }
  return dates;
};
 
// Function to get the day of the week
const getDayOfWeek = (date) => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return daysOfWeek[date.getDay()];
};

 // Define the mutation function
 const addData = async(oneEventInfo)=>{
  try {
    const res = await axios.post("/api/createEvent", oneEventInfo)
    return res;
  } catch (error) {
    console.log(error)
    throw error;
  }
    }
  
  const {data, isError, mutateAsync, isPending} = useMutation({
    mutationFn: addData,
    onSuccess:(data) => {
      console.log(data)
      if(data.status === 200){
        // setLoading(false)
      // toast.success('Lead successfully updated!');
      queryClient.invalidateQueries(['singleEventDataGet'])
      router.push('/dashboard/events')
      }
    }
  })
  
  


  const formHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const eventTitle = form.eventTitle.value;
    const eventDuration = form.eventDuration.value;
    const fromDate = form.fromDate.value;
    const toDate = form.toDate.value;
    const meetingLocation = location;
    const meetingLink = form.meetingLink.value;
    const eventStatus = 'Pending';
    const userName = name;


      // Generating an array of dates between from and to dates
  const selectedDates = getDatesInRange(fromDate, toDate);

  // Generating an array of time slots based on the selected event duration
  const selectedTimeSlots = generateTimeSlots(eventDuration);

  // Creating an array to connect date and time slot at each index
  const dateAndTimeArray = selectedDates.map((date, index) => ({
    date: date.toLocaleDateString(),
    dayOfWeek: getDayOfWeek(date),
    timeSlot: selectedTimeSlots[index % selectedTimeSlots.length], // Loop through time slots
  }));

    const oneEventInfo = {
      eventTitle, eventDuration,  fromDate, toDate, meetingLocation, meetingLink, eventStatus, email, userName, dateAndTimeArray
    };
console.log(oneEventInfo)
   // Call the mutation function
mutateAsync(oneEventInfo);
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
            <InputField
            className="md:w-[380px] outline-none h-[40px] rounded-md text-gray-700 bg-white border focus:border-purple-400 dark:focus:border-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-purple-300 p-2"
            type="text"
            name="eventTitle"
            required
            />
            {/* <input
              className="md:w-[380px] outline-none border border-slate-400 h-[40px] rounded-md hover:border-blue-400 p-2"
              type="text"
              name="eventTitle"
              required
            /> */}
          </div>

         
          {/* EVENT DURATION */}
        <div className="">
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
              defaultValue=""
              name="eventDuration"

              className="select select-bordered w-full  md:w-[380px] "
              onChange={(e) => setEventDuration(e.target.value)}
              required
            >
              <option disabled value="">
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
              <InputField
               className="w-[230px] outline-none border-slate-400 h-[40px] rounded-md text-gray-700 bg-white border focus:border-purple-400 dark:focus:border-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-purple-300 p-2"
               type="date"
               name="fromDate"
               onChange={(e) => setFromDate(e.target.value)}
               required
              />
              {/* <input
                className="w-[230px] outline-none border border-slate-400 h-[40px] rounded-md hover:border-blue-400 p-2"
                type="date"
                name="fromDate"
                onChange={(e) => setFromDate(e.target.value)}
                required
              /> */}
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
<InputField
className="w-[230px] outline-none  h-[40px] rounded-md text-gray-700 bg-white border focus:border-purple-400 dark:focus:border-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-purple-300 p-2"
type="date"
name="toDate"
onChange={(e) => setToDate(e.target.value)}
required
/>

              {/* <input
                className="w-[230px] outline-none border border-slate-400 h-[40px] rounded-md hover:border-blue-400 p-2"
                type="date"
                name="toDate"
                onChange={(e) => setToDate(e.target.value)}
                required
              /> */}
            </div>

            {/* SECOND FREE DAY  */}
          </div>
{/* set time for each day */}
<div>
  <label className="label-text font-semibold text-black text-xl">
    Selected Date Range
  </label>
  <div className="text-sm space-y-3 my-3">
    {fromDate && toDate ? (
      getDatesInRange(fromDate, toDate).map((date, index) => (
        <div key={index} className="flex items-center">
          <p>{`Date: ${date.toLocaleDateString()} (${getDayOfWeek(date)})`}</p>
          
          {/* Dropdown for time slots based on selected event duration */}
          {eventDuration && (
            <label className="ml-4">
              <span className="label-text font-semibold text-black text-xl">
                Select Time Slot
              </span>
              <select
                defaultValue=""
                name="timeSlot"
                className="select select-bordered w-full"
                required
              >
                <option disabled value="">
                  Select Time Slot
                </option>
                {generateTimeSlots(eventDuration).map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </label>
          )}
        </div>
      ))
    ) : (
      'Please select dates'
    )}
  </div>
</div>




{/* location */}

          <div className="">
          <label className="label">
                <span className="label-text font-semibold text-black text-xl">
                  Event Location
                </span>
              </label>
            <select
              className="select select-bordered select-xl w-[250px] my-3 max-w-xs"
              onChange={eHandle}
              name="location"
              value={location}
              required
              // defaultValue="default"
            >
              <option value="" disabled>
                Select Your Location
              </option>
              <option value={"meet"}>Google Meet</option>
              <option value={"zoom"}>Zoom</option>
            </select>
          </div>
{/* meeting link */}
          <div className="space-y-5">
            <div className="">
              <label className="label">
                <span className="label-text font-semibold text-black text-xl">
                  Booking Form
                </span>
              </label>
              <p className="text-sm">Create Your Meeting link</p>
        <InputField
          className="w-[380px] outline-none  h-[40px] rounded-md text-gray-700 bg-white border focus:border-purple-400 dark:focus:border-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-purple-300 p-2"
          type="text"
          name="meetingLink"
          required
        />

              {/* <input
                className="w-[380px] outline-none border border-slate-400 h-[40px] rounded-md hover:border-blue-400 p-2"
                type="text"
                name="meetingLink"
                required
              /> */}
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
{/* create event button */}
        <div className="">
          <button className="border-2 text-xl text-sky-700 w-[230px] rounded-md h-[45px] border-pink-300 hover:before:bg-pink-300 before:w-full before:h-0 hover:before:h-full hover:before:-z-10 hover:before:absolute before:absolute relative before:top-0 hover:before:left-0 before:duration-500 hover:text-white transform origin-top before:block">
            Confirm Event
          </button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default TwoPersonEvent;
