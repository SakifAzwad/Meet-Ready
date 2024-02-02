'use client'


import { useEffect, useState } from "react";







const ScheduleEvents = ({}) => {
    const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/events.json'); // Assuming events.json is in the public directory
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
     console.log(events)
     
    
     

    return (
        <div>
           
      
      <div className=" ">
        {
            events.map((event,idx)=> <div key={idx} className="bg-pink-300 rounded-md my-4 p-8">

              <div className="">
                    <p className="text-slate-900 text-center font-bold">Event Title:{event?.name}</p>
<div className="flex justify-center gap-8">
<p className="text-slate-600">EventDate:{event?.selectedDate}</p>
<p className="text-slate-600">EventTime:{event?.time}</p>
</div>

                   <div className="text-center my-8">
                    <a className="btn bg-pink-400" href={event?.meetingLink} target="blank">LINK</a>
                    </div> 

              </div>




            </div> )
        }
      </div>










        </div>
    );
};

export default ScheduleEvents;