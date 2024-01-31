'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const EditEvent = ({params}) => {
  const id = params.id
  const [singleEventData, setSingleEventData] = useState(null)
  const [location, setLocation] = useState("");
  const [next1, setNext1] = useState(false);
  const session = useSession()
  const router = useRouter()

  const email = session?.data?.data?.user?.email

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

   useEffect(()=> {
    getSingleEvent(id)
   },[id])

   const formHandler = async (e) => {
    e.preventDefault();

    const eventTitle = e.target.title.value;
    const eventSlug = e.target.slug.value;
    const eventDuration = e.target.duration.value;
    const eventDay = e.target.days.value;
    const fromTime = e.target.fromTime.value;
    const toTime = e.target.toTime.value;
    const eventDate = e.target.date.value;
    const meetingLink = e.target.meetingLink.value;
    const eventLocation = e.target.location.value;

    const editedEventInfo = {
      eventTitle,
      eventSlug,
      eventDuration,
      eventDay,
      fromTime,
      toTime,
      eventDate,
      meetingLink,
      eventLocation,
      email,
    };

    try {
      const res = await fetch(`/api/createEvent/${id}`,{
        method:"PUT",
        headers:{
          "Content-type":"application/json"
        },
        body: JSON.stringify({editedEventInfo})
      })
      if(res.status === 200) {
        console.log('Event updated successfully.')
        router.push('/dashboard/events')
      }else{
        console.log('An error occurred. Please try again.')
      }

      console.log('res', res.status)
    } catch (error) {
      console.log('Error in data put', error)
    }
  };

  const eHandle = (event) => {
    setLocation(event.target.value);
  };

console.log(singleEventData)

  return (
    <div className="my-10">
      {/* 
<ul className="steps steps-vertical lg:steps-horizontal">
  <li className="step step-primary">Register</li>
  <li className="step step-primary">Choose plan</li>
  <li className="step">Purchase</li>
  <li className="step">Receive Product</li>
</ul> */}

     {
      singleEventData && (
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
              defaultValue={singleEventData?.eventTitle}
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
              defaultValue={singleEventData?.eventSlug}
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
              // defaultValue="default"
              name="duration"
              className="select select-bordered w-full "
              defaultValue={singleEventData?.eventDuration}
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

          <div className="flex gap-3">
            <div className="space-y-4">
              {/* select bar */}

              <select
                className="select select-bordered select-xs w-[100px] my-3 max-w-xs"
                name="days"
                // defaultValue="default"
                defaultValue={singleEventData?.eventDay}
              >
                <option disabled value="default" >
                  Select Day
                </option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
              </select>
            </div>

            <div className="">
              {/* avaiable from */}

              <select
                className="select select-bordered select-xs w-[105px] my-3 max-w-xs"
                name="fromTime"
                // defaultValue="default"
                defaultValue={singleEventData?.fromTime}
              >
                <option disabled >
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
            </div>

            <div className="">
              {/* avaiale to */}
              <select
                className="select select-bordered select-xs w-[105px] my-3 max-w-xs"
                name="toTime"
                defaultValue={singleEventData?.toTime}
              >
                <option disabled value="default" >
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
            </div>
          </div>

          <div className="">
            <label className="label">
              <span className="label-text font-semibold text-black text-xl">
                Pick Your Event Day
              </span>
            </label>
            <p className="text-sm">Make some Time For Your Meeting</p>
            <input
              className="w-[380px] outline-none border border-slate-400 h-[40px] rounded-md hover:border-blue-400 p-2"
              type="date"
              name="date"
              defaultValue={singleEventData?.eventDate}
            />
          </div>

          <div className="">
            <select
              className="select select-bordered select-xl w-[150px] my-3 max-w-xs"
              onChange={eHandle}
              name="location"
              value={location}
              // defaultValue="default"
              defaultValue={singleEventData?.eventLocation}
            >
              <option disabled value="default" selected>
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
                defaultValue={singleEventData?.meetingLink}
              />
              {location === "zoom" ? (
                <a
                  className="btn bg-blue-500 hover:bg-blue-400 hover:text-white"
                  href="https://zoom.us/"
                  target="_blank"
                >
                  Create Zoom Link
                </a>
              ) : (
                ""
              )}

              {location === "meet" ? (
                <a
                  className="btn bg-blue-500 hover:bg-blue-400 hover:text-white"
                  href="https://meet.google.com/ "
                  target="_blank"
                >
                  Create Meet Link
                </a>
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
      )
     }
    </div>
  )
}

export default EditEvent