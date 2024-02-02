"use client"
// import EventCard from "@/components/EventCard/EventCard";
import { useSession } from "next-auth/react";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { FaMagnifyingGlass } from "react-icons/fa6";
import Link from "next/link";
import ScheduleEvents from "@/components/ScheduledEvents/ScheduledEvent";
import { useEffect, useState } from "react";



const ScheduledEvent = () => {
  // Getting user email from session
  const session = useSession()
  const email = session?.data?.user?.email
  const name = session?.data?.user?.name
  console.log(session)
  console.log(name)

  console.log(email)
  // State for storing event
  const [eventData, setEventData] = useState(null)
  const [loading, setLoading] = useState(false)

  const getScheduledEvent = async() => {
    console.log(email)
    setLoading(true)
    try {
    const res = await fetch (`/api/event?email=${email}`, {
      cache: "no-store", 
    })
    if (res.status === 500) {
      console.log("An error ocurred please try again.");
    }

    const eventData = await res.json();
    console.log(eventData)
    setEventData(eventData?.scheduledEvent);
    setLoading(false)
  } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    getScheduledEvent()
  }, [email])

  console.log(eventData)

if(loading){
  return <p>Loading ...............</p>
}


  return (
    <div className="">
      <h1 className="text-2xl text-center font-semibold pl-2 border-l-2 border-purple-500">
        Scheduled Events
      </h1>

    <div className="my-8">
   {
    loading ? (<p>Wait please. loading...</p>) : ( 
      eventData ? ( eventData?.map((event, idx) => (
        <div key={idx} className="bg-sky-100 rounded-md mt-4 p-8">
          <div className="">
            <p className="text-slate-900 text-center font-bold mb-5">
              Event Title:{event?.eventTitle}
            </p>
            <div className="space-y-3">
              <p className="text-slate-600">
              Event Date: {new Date(event?.selectedDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
              </p>
              <p className="text-slate-600">EventTime: {event?.selectedTime}</p>
           
              <p className="text-slate-600">
              Interviewee Name: {event?.name}
              </p>
              <p className="text-slate-600">Interviewee Email: {event?.intervieweeEmail}</p>
              <p className="text-slate-600 capitalize">Meeting Location: {event?.meetingLocation}</p>
            </div>

            <div className="text-center mt-5">
              <Link
                className="btn bg-purple-300 text-white"
                href={event && event.meetingLink}
                target="_blank"
              >
                LINK
              </Link>
            </div>
          </div>
        </div>
      ))) : (<p>No Scheduled Event Available.</p>)
    
    )
   }
    </div>

     
             

  
    </div>
  );
};

export default ScheduledEvent;
