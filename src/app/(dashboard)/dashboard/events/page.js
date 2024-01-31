'use client'
import EventCard from "@/components/EventCard/EventCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Events = () => {
  const [eventData, setEventData] = useState([])
  const [singleEventData, setSingleEventData] = useState([])
 
  const getEvent = async()=> {
    const  email = 'r4pido3@gmail.com'

   try {
     const res = await fetch(`/api/createEvent?email=${email}`,{
       cache: 'no-store'
     })
  
     if(res.status === 500 ){
       console.log("An error ocurred please try again.")
     }
  
     const eventData = await res.json()
     
     setEventData(eventData.myEvent)
   } catch (error) {
     console.log(error)
   }
  }
  useEffect(()=>{
    getEvent()
  },[])

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

 const getSingleEvent = async(id)=> {
  try {
    const res = await fetch(`/api/createEvent/${id}`,{
      cache: 'no-store'
    })

    const singleEvent = await res.json()
    setSingleEventData(singleEvent)

  } catch (error) {
    console.log(error)
  }
 }

 const editEvent = async(id) => {
  const editedData = {
    eventName:'Enayet1',
    eventSlug:'enayet-monday',
    duration:'2',
    location:'zoom',
    schedule:'tue, 10-18',
    link:'zoom.com/enayet-monday',
    email:'infoicpasyl@gmail.com',
  }
  try {
    const res = await fetch(`/api/createEvent/${id}`,{
      method:"PUT",
      headers:{
        "Content-type":"application/json"
      },
      body: JSON.stringify({editedData})
    })
  } catch (error) {
    
  }
 }

console.log('get data based on email', eventData)
console.log('get single data based on id', singleEventData)



// for experiment
const firstCard={
  id:1,
  Name:'Tanjil',
  age:20,
  birth:2004
  
 }



 const firstCard1={
  id:2,
  Name:'fazil',
  age:20,
  birth:2004
  
 }












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
      {
          eventData ? (
            eventData?.map(event => <EventCard key={event._id} event={event}/>)
          ) : (
            <p>No data to show</p>
          )
        }
        {/* <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/> */}
        
      </div>

       {/* for expeiment */}
         
         
       <div className="">

<div className="">
        <p>Name:{firstCard.Name}</p>
        <Link className="btn" href={`/slug/${firstCard.id}`}>Preview</Link>
      

        </div>



        <div className="">
        <p>Name:{firstCard1.Name}</p>
        <Link className="btn" href={`/slug/${firstCard1.id}`}>Preview</Link>
      

        </div>



</div>
         
         
    </div>
  );
};

export default Events;
