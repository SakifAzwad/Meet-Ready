
"use client"
// import EventCard from "@/components/EventCard/EventCard";
import { useSession } from "next-auth/react";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { FaMagnifyingGlass } from "react-icons/fa6";
import Link from "next/link";
import ScheduleEvents from "@/components/ScheduledEvents/ScheduledEvent";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "@/components/Loading/Loading";

const ScheduledEvent = () => {
  // Getting user email from session

  const session = useSession()
  const email = session?.data?.user?.email
  const name = session?.data?.user?.name
 
  // State for storing event

  const [eventData, setEventData] = useState(null)
  const [loading, setLoading] = useState(false)

  // function to call api to get scheduled event

  const getScheduledEvent = async (email) => {
    try {
      const res = await axios.get(`/api/event?email=${email}`)
      return res.data
      ;
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  // Using tanstack query to call getScheduledEvent function

  const {data, isLoading} = useQuery({
    queryKey:['scheduledEventGet'],
    queryFn: () => getScheduledEvent(email),
  })


  console.log('data', data)
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





if(isLoading){
  return <Loading></Loading>
}


  return (
    <div className="">
      <h1 className="text-2xl text-center font-semibold pl-2 border-l-2 border-purple-500">
        Scheduled Events
      </h1>

    <div className="my-8">

   {
     
      data ? ( data?.scheduledEvent?.map((event, idx) => (
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
              <p className="text-slate-600">Meeting Link: {event?.meetingLink}</p>
            </div>

            <div className="text-center mt-5">
              {/* <Link
                className="btn bg-purple-300 text-white"
                href={event?.meetingLink}
                target="_blank"
              >
                LINK
              </Link> */}
            </div>
          </div>
        </div>
      ))) : (<p>No Scheduled Event Available.</p>)
    
    
   }

    {/* {<ScheduleEvents></ScheduleEvents>} */}

    </div>

     
             

  
    </div>
  );
};

export default ScheduledEvent;
