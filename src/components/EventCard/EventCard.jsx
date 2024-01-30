"use client";
import Link from "next/link";
import { useRef } from "react";
import {
  FaCheck,
  FaClipboard,
  FaGear,
  FaPencil,
  FaShare,
  FaTrash,
} from "react-icons/fa6";

const EventCard = ({event}) => {
  console.log(event)
  const {eventTitle, eventDuration, fromTime, eventDate } = event
  const meetLinkRef = useRef(null);
  
  const copyToClipboard = () => {
    if (meetLinkRef.current) {
      meetLinkRef.current.select();
      navigator.clipboard.writeText(meetLinkRef.current.value);
      // Optionally, you can provide feedback to the user
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div>
      <div className="border-t-2 w-72 relative border-purple-500 bg-white p-5 rounded-md space-y-3">
        <div className="absolute right-2 top-2">
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1 btn-sm ">
              <FaGear />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box"
            >
              <li>
                <Link href={`/dashboard/editEvent/${event._id}`}>
                  <button 
                  className="flex font-semibold justify-center items-center gap-2">
                    <FaPencil />
                    Edit
                  </button>
                </Link>
              </li>
              <li>
                <p className="flex text-green-800 font-semibold justify-center items-center gap-2">
                  <FaCheck />
                  Finished
                </p>
              </li>
              <li>
                <p className="flex text-red-500 font-semibold justify-center items-center gap-2">
                  <FaTrash />
                  Delete
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div>
        <h1 className="text-xl font-medium">{eventTitle}</h1>
          <h1 className="text-base font-extralight">{eventDuration}, One-on-One</h1>
          <h1 className="text-base font-extralight">{fromTime}, {eventDate}</h1>
          <h1 className="text-base font-extralight">
            <span className="font-semibold">Status</span>: Pending
          </h1>
        </div>
        <hr />
        <div className="flex justify-between">
          <a
            target="_blank"
            href="https://meet.google.com/qpi-uwjh-rkk"
            className="btn btn-sm flex justify-center items-center gap-2 border border-purple-500"
          >
            Open
          </a>
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="btn btn-sm flex justify-center items-center gap-2 border border-sky-500 "
          >
            <FaShare /> Share
          </button>
        </div>
      </div>

      {/* MODAL  */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">This is meeting Title!</h3>

          <p className="text-kg font-semibold mt-3">
            Copy and paste your scheduling link into a message
          </p>
          <div className="flex justify-between items-center gap-5 mt-3">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              defaultValue={"https://meet.google.com/qpi-uwjh-rkk"}
              readOnly
              ref={meetLinkRef}
            />
            <button
              onClick={copyToClipboard}
              className="btn bg-sky-500 text-white hover:text-black"
            >
              <FaClipboard /> Copy
            </button>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default EventCard;
