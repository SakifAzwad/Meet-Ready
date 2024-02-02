"use client";

import Link from "next/link";


const ScheduleEvents = ({ events }) => {
  console.log(events);

  return (
    <div>
      <div className=" ">
        {events?.map((event, idx) => (
          <div key={idx} className="bg-pink-300 rounded-md mt-4 p-8">
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
                  className="btn bg-pink-400"
                  href={event?.meetingLink}
                  target="_blank"
                >
                  LINK
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleEvents;
