// "use client"
// import EventCard from "@/components/EventCard/EventCard";
// import { useSession } from "next-auth/react";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { FaMagnifyingGlass } from "react-icons/fa6";

import ScheduleEvents from "@/components/ScheduledEvents/ScheduledEvent";

// const ScheduledEvent = () => {
//   // Getting user email from session
//   const session = useSession()
//   const email = session?.data?.user?.email
//   const name = session?.data?.user?.name
//   console.log(name)

//   console.log(email)
//   // State for storing event
//   const [eventData, setEventData] = useState(null)

//   const getScheduledEvent = async() => {
//     console.log(email)
//     try {
//     const res = await fetch (`/api/event?email=${email}`, {
//       cache: "no-store", 
//     })
//     if (res.status === 500) {
//       console.log("An error ocurred please try again.");
//     }

//     const eventData = await res.json();
//     console.log(eventData)
//     setEventData(eventData?.scheduledEvent);
//     } catch (error) {
      
//     }
//   }

//   useEffect(() => {
//     getScheduledEvent()
//   }, [email])

//   console.log(eventData)

//   return (
//     <div className="flex flex-col justify-start mt-16 space-y-5">
//       <h1 className="text-2xl font-semibold pl-2 border-l-2 border-purple-500">
//         Scheduled Events
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//         {/* <EventCard  /> */}
        
             

//       </div>
//     </div>
//   );
// };

// export default ScheduledEvent;




const ScheduledEvent = () => {
  // Getting user email from session
  // const session = useSession()
  // const email = session?.data?.user?.email
  // const name = session?.data?.user?.name
  // console.log(name)

  // console.log(email)
  // State for storing event
  // const [eventData, setEventData] = useState(null)

  // const getScheduledEvent = async() => {
  //   console.log(email)
  //   try {
  //   const res = await fetch (`/api/event?email=${email}`, {
  //     cache: "no-store", 
  //   })
  //   if (res.status === 500) {
  //     console.log("An error ocurred please try again.");
  //   }

  //   const eventData = await res.json();
  //   console.log(eventData)
  //   setEventData(eventData?.scheduledEvent);
  //   } catch (error) {
      
  //   }
  // }

  // useEffect(() => {
  //   getScheduledEvent()
  // }, [getScheduledEvent])

  // console.log(eventData)




  return (
    <div className="">
      <h1 className="text-2xl text-center font-semibold pl-2 border-l-2 border-purple-500">
        Scheduled Events
      </h1>

    <div className="my-8">
    <ScheduleEvents></ScheduleEvents>
    </div>

     
             

  
    </div>
  );
};

export default ScheduledEvent;
