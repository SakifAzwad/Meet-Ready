"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
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

    const startTime = `${startHour.toString().padStart(2, "0")}:${startMinute
      .toString()
      .padStart(2, "0")}`;
    const endTime = `${endHour.toString().padStart(2, "0")}:${endMinute
      .toString()
      .padStart(2, "0")}`;

    timeSlots.push(`${startTime}-${endTime}`);
  }

  return timeSlots;
};

const TwoPersonEvent = () => {
  const [next1, setNext1] = useState(false);
  const [location, setLocation] = useState("");
  const router = useRouter();
  const session = useSession();
  const email = session?.data?.user?.email;
  const name = session?.data?.user?.name;
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
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfWeek[date.getDay()];
  };

  // Define the mutation function
  const addData = async (oneEventInfo) => {
    try {
      const res = await axios.post("/api/createEvent", oneEventInfo);
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const { data, isError, mutateAsync, isPending } = useMutation({
    mutationFn: addData,
    onSuccess: (data) => {
      console.log(data);
      if (data.status === 200) {
        // setLoading(false)
        toast.success("Event successfully schedule!");
        queryClient.invalidateQueries(["singleEventDataGet"]);
        router.push("/dashboard/events");
      }
    },
  });

  const formHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const eventTitle = form.eventTitle.value;
    const eventDuration = form.eventDuration.value;
    const fromDate = form.fromDate.value;
    const toDate = form.toDate.value;
    const meetingLocation = location;
    const meetingLink = form.meetingLink.value;
    const eventStatus = "Pending";
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
      eventTitle,
      eventDuration,
      fromDate,
      toDate,
      meetingLocation,
      meetingLink,
      eventStatus,
      email,
      userName,
      dateAndTimeArray,
    };
    console.log(oneEventInfo);
    // Call the mutation function
    mutateAsync(oneEventInfo);
  };

  const eHandle = (event) => {
    setLocation(event.target.value);
  };

  return (
    <>
      <div className="max-w-7xl py-10">
        <form
          onSubmit={formHandler}
          className="flex flex-col  xl:w-2/3 space-y-10 pt-6 px-6 md:px-12  mx-auto"
        >
          <h2 className="text-3xl text-start font-semibold">
            Create Your Event
          </h2>
          {/* Title */}
          <div className="flex justify-center w-full mx-auto">
            <label className="w-4/12 md:w-4/12" htmlFor="">
              <h2 className="font-medium">Your Event title</h2>
            </label>
            <InputField
              className="border outline-none  p-2 rounded-md w-8/12 md:w-8/12"
              type="text"
              name="eventTitle"
              placeholder={"Late Night Meeting"}
              required
            />
          </div>
          {/* Duration */}
          <div className="flex justify-center w-full mx-auto">
            <label className="w-4/12 md:w-4/12" htmlFor="">
              <h2 className="font-medium">Duration</h2>
            </label>
            <select
              defaultValue=""
              name="eventDuration"
              className="select select-bordered  p-2 rounded-md w-8/12 md:w-8/12"
              onChange={(e) => setEventDuration(e.target.value)}
              required
            >
              <option disabled value="">
                Select Duration
              </option>
              {generateDurationOptions()}
            </select>
          </div>
          {/* date from */}
          <div className="flex justify-center w-full mx-auto">
            <label className="w-4/12 md:w-4/12" htmlFor="">
              <h2 className="font-medium">
                Select a Date
                <br />
                <span className="text-sm font-normal text-gray-400">{`(From)`}</span>
              </h2>
            </label>
            <div className="flex gap-6 justify-center items-center w-8/12 md:w-8/12">
              <InputField
                className="border outline-none  p-2 rounded-md w-8/12 md:w-8/12"
                type="date"
                name="fromDate"
                onChange={(e) => setFromDate(e.target.value)}
                required
              />
              <h2 className="font-medium">To</h2>
              <InputField
                className="border outline-none  p-2 rounded-md  w-8/12 md:w-8/12"
                type="date"
                name="toDate"
                onChange={(e) => setToDate(e.target.value)}
                required
              />
            </div>
          </div>
          {/* time slot */}
          <div className="w-full justify-center  space-y-10 mx-auto">
            {fromDate && toDate
              ? getDatesInRange(fromDate, toDate).map((date, index) => (
                  <div
                    key={index}
                    className="flex justify-center w-full mx-auto"
                  >
                    <label className="w-4/12 md:w-4/12" htmlFor="">
                      <h2 className="font-medium">
                        Select Time Slot
                        <br />
                        <p className="text-sm font-normal text-gray-400">{`Date: ${date.toLocaleDateString()} (${getDayOfWeek(
                          date
                        )})`}</p>
                      </h2>
                    </label>

                    {/* Dropdown for time slots based on selected event duration */}
                    {eventDuration && (
                      <select
                        defaultValue=""
                        name="timeSlot"
                        className="select select-bordered  p-2 rounded-md w-8/12 md:w-8/12"
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
                    )}
                  </div>
                ))
              : "Please select dates"}
          </div>

          {/* Event Location */}
          <div className="flex justify-center  w-full mx-auto">
            <label className="w-4/12 md:w-4/12 " htmlFor="">
              <h2 className="font-medium">Event Location</h2>
            </label>
            <select
              className="select select-bordered p-1.5 rounded-md w-8/12 md:w-8/12"
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
          {/* Booking Form */}
          <div className="flex justify-center  w-full mx-auto">
            <label className="w-4/12 md:w-4/12" htmlFor="">
              <h2 className="font-medium">
                Booking Form <br />
                <span className="text-sm font-normal text-gray-400">
                  create meeting link
                </span>
              </h2>
            </label>
            <div className="flex justify-between items-center gap-2 w-8/12 md:w-8/12">
              <InputField
                className={`border outline-none  p-2 rounded-md  ${
                  location ? "w-5/6" : "w-full"
                }`}
                type="text"
                name="meetingLink"
                placeholder={"https://meet.example.com/late-night-meet"}
                required
              />
              {location === "zoom" ? (
                <Link
                  className="w-1/6 border flex justify-center items-center border-purple-500 p-2 text-blue-500"
                  href="https://zoom.us/"
                  target="_blank"
                >
                  Create
                </Link>
              ) : (
                ""
              )}

              {location === "meet" ? (
                <Link
                  className="w-1/6 border flex justify-center items-center border-purple-500 p-2 text-blue-500"
                  href="https://meet.google.com/ "
                  target="_blank"
                >
                  Create
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
          {/* Button */}
          <hr className="w-full" />
          <div>
            <button
              type="submit"
              className=" flex gap-2 bg-purple-400 hover:bg-purple-500 focus:bg-indigo-400 text-white font-medium rounded px-4 py-2 "
            >
              {isPending && (
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="mr-2 animate-spin"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                </svg>
              )}
              Confirm Event
            </button>
          </div>
        </form>
      </div>
      {/* Old Form */}
    </>
  );
};

export default TwoPersonEvent;
