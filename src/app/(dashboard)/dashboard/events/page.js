/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import EventCard from "@/components/EventCard/EventCard";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Events = () => {
  // Stater for storing all event data of a user
  const [eventData, setEventData] = useState([]);
  const [singleEventData, setSingleEventData] = useState([]);
  console.log(eventData);
  // Creating event share page
  const updatedEventData = eventData.map((event) => ({
    ...event,
    shareableLink: `http://localhost:3000/event/${event._id}`,
  }));

  console.log(updatedEventData);
  // Getting user email from session so that event information can be called based on email
  const session = useSession();
  const email = session?.data?.user?.email;

  // Getting event data from server based on user email
  const getEvent = async () => {
    try {
      const res = await fetch(`/api/createEvent?email=${email}`, {
        cache: "no-store",
      });

      if (res.status === 500) {
        console.log("An error ocurred please try again.");
      }

      const eventData = await res.json();

      setEventData(eventData.myEvent);
    } catch (error) {
      console.log(error);
    }
  };

  // Calling getEvent function on page load
  useEffect(() => {
    getEvent();
  }, []);

  //  const getEvent = async()=> {
  //    const  email = 'infoicpasyl@gmail.com'
  //    console.log('eimail', email)
  //   try {
  //     const res = await fetch(`/api/createEvent?email=${email}`,{
  //       cache: 'no-store'
  //     })

  //     if(res.status === 500 ){
  //       console.log("An error ocurred please try again.")
  //     }

  //     const eventData = await res.json()

  //     setEventData(eventData.myEvent)
  //   } catch (error) {
  //     console.log(error)
  //   }
  //  }

  const getSingleEvent = async (id) => {
    try {
      const res = await fetch(`/api/createEvent/${id}`, {
        cache: "no-store",
      });

      const singleEvent = await res.json();
      setSingleEventData(singleEvent);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("get single data based on id", singleEventData);















  return (
    <div className="flex flex-col justify-start mt-16 space-y-5">
      <div className="flex justify-center items-center relative border-2">
        <FaMagnifyingGlass className="text-xl absolute left-2 text-gray-600" />
        <input
          type="text"
          placeholder="Search your event here"
          className="input input-bordered pl-8 font-medium border-purple-300 focus:border-purple-300 w-full"
        />
      </div>

      <h1 className="text-2xl font-semibold pl-2 border-l-2 border-purple-500">
        Events
      </h1>
      {/* <button 
      onClick={testApi}
      className="btn btn-primary">Test</button>
      <button 
      onClick={getEvent}
      className="btn btn-primary">Get by Email</button>
      <button 
      onClick={() => getSingleEvent('65b277695b8bef36e2bc0b60')}
      className="btn btn-primary">Get Single Event</button>
      <button 
      onClick={() => editEvent('65b277695b8bef36e2bc0b60')}
      className="btn btn-primary">Edit Single Event</button> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {updatedEventData ? (
          updatedEventData?.map((event) => <EventCard key={event._id} event={event} />)
        ) : (
          <p>No data to show</p>
        )}
        {/* <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/> */}
      </div>
    </div>
  );
};

export default Events;
