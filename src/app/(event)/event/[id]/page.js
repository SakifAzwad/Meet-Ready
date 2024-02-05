// Event.js
"use client";
import MyCalendar from "@/components/IntervieweeEvent/Calendar";
import InputSection from "@/components/IntervieweeEvent/InputSection";
import TimePicker from "@/components/IntervieweeEvent/TimePicker";
import 'react-calendar/dist/Calendar.css';
import React, { useEffect, useState } from "react";


const Event = ({params}) => {
  // Getting id of the meeting
  const id = params.id
  console.log(id)

  // Storing event data
  const [singleEventData, setSingleEventData] = useState(null)


  console.log(singleEventData)

  console.log(singleEventData?.email)

  // Getting event data from server
  const getSingleEvent = async(id)=> {
    try {
      const res = await fetch(`/api/createEvent/${id}`,{
        cache: 'no-store'
      })
  
      const singleEvent = await res.json()
      setSingleEventData(singleEvent.singleEvent)
  
    } catch (error) {
      console.log(error)
    }
   }
// Calling getSingleEvent function at the time of component load
   useEffect(()=> {
    getSingleEvent(id)
   },[id])


  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });

  const startDate = new Date("2024-03-10");
  const endDate = new Date("2024-03-15");

  const onClickedDate = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const bookingData = {
      selectedDate,
      selectedTime,
      intervieweeEmail: formData.email,
      name: formData.name,
      userEmail: singleEventData.email,
      userName: singleEventData.userName,
      meetingLocation: 'meet',
      meetingLink: 'www.flasfl.com',
      eventTitle:'sakif'
    };
    console.log(bookingData);
    // Perform actions with bookingData, such as sending it to a backend server

    try {
      const res = await fetch('/api/event', {
        method: "POST",
        headers:{
          "Content-type": "application/json"
        },
        body: JSON.stringify(bookingData)
      })
      if(res.status === 200){
        //todo add toast or alert
        console.log('Booking Successful')
      }
      if(res.status === 500){
        //todo add toast or alert
        console.log('Error in booking. Please try again.')
      }
    } catch (error) {
      // todo add toast or alert
      console.log(error, 'Error occurred in send data to server. Please try again later.')
    }
  };

  return (
    <main className=" bg-gradient-to-r from-[#E7F1FE] via-[#ECF0FE] to-[#F5EEFF] min-h-screen text-center flex justify-center items-center">
      <div>
      <div className="space-y-4 ">
        {/* Meeting name */}
        <h1 className="text-3xl text-purple-800 font-bold">Scrum Meeting</h1>
        {/* Interviewer Name */}
        <h1 className="text-xl text-purple-700 font-semibold">Sakif Azwad</h1>
        <div className="flex space-x-3 justify-center items-center">
          <svg
            className="h-4  text-gray-500 "
            data-id="details-item-icon"
            viewBox="0 0 10 10"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
          >
            <path
              d="M.5 5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M5 3.269V5l1.759 2.052"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <h1 className="text-gray-500"> 30 Min</h1>
        </div>
      </div>
      <div className="container mx-auto p-4">
    
        <form onSubmit={handleSubmit} className="space-y-4">
          
         <div className="md:flex md:space-x-4 w-full">
            <div>
                <MyCalendar tileClassName="rounded-lg" onClickedDate={onClickedDate} startDate={startDate} endDate={endDate} />
            </div>
            <div className="flex items-center justify-center w-full">
               <div className="flex items-center justify-center">
               <div className="">
               {selectedDate && (
            <>
              <TimePicker onSelectTime={handleTimeChange} />
              <InputSection onChange={handleInputChange} />
              <button type="submit" className=" mx-auto flex h-min items-center disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 justify-center ring-none  rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  bg-purple-400 border-b-violet-700 disabled:border-0 disabled:bg-violet-500 disabled:text-white ring-white text-white border-b-4 hover:border-0 active:border-0 hover:text-gray-100 active:bg-violet-800 active:text-gray-300 focus-visible:outline-violet-500 text-sm sm:text-base">Submit</button>
            </>
          )}
               </div>
               </div>
            </div>
         </div>
         
         
          
        </form>
      </div>
      </div>
    </main>
  );
};

export default Event;
