"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  const {eventTitle, eventDuration, fromTime, eventDate, eventStatus, _id, meetingLink, shareableLink} = event

  console.log('event card', event)
  const meetLinkRef = useRef(null);
  const router = useRouter()
  
  const copyToClipboard = () => {
    if (meetLinkRef.current) {
      meetLinkRef.current.select();
      navigator.clipboard.writeText(meetLinkRef.current.value);
      // Optionally, you can provide feedback to the user
      alert("Link copied to clipboard!");
    }
  };

// Delete functionality

const handleDelete = async (id) => {
  // Todo a alert should be shown that the user is sure something like that
     const res = await fetch(`/api/createEvent/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type":"application/json"
      }
    })
    console.log(res.status)
    if(res.status === 200){
      console.log("Event Successfully Deleted")
      // Todo replace clg with toast
      // router.push('/dashboard/events')
      window.location.reload()
      // TODO refetch data after delete not reload
    }else{
      console.log("An error occurred.")
      // Todo replace clg with toast
    }
  
}

// Finish functionality

const handleFinish = async (id) => {
  const eventStatus = 'Finished'
  // Todo a alert should be shown that the user is sure something like that
  const res = await fetch(`/api/createEvent/${id}`,{
    method: 'PATCH',
    headers: {
      "Content-type":"application/json"
    },
    body: JSON.stringify(eventStatus)
  })
  if(res.status === 200){
    console.log('Status updated')
    // Todo replace clg with toast
    window.location.reload()
    // TODO refetch data after it not reload
  }else{
    console.log("An error occurred.")
    // Todo replace clg with toast
  }
}


  return (
    <div>
      <div className="border-t-2 w-72 relative border-purple-500 bg-white p-5 rounded-md space-y-3">
        <div className="absolute right-2 top-2">
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1 btn-sm ">
              <FaGear />
            </div>
            {/* edit, delete and complete icon  */}
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box"
            >
              {/* edit button */}
              <li>
                <Link href={`/dashboard/editEvent/${event._id}`}>
                  <button 
                  className="flex font-semibold justify-center items-center gap-2">
                    <FaPencil />
                    Edit
                  </button>
                </Link>
              </li>
              {/* finished button */}
              <li>
                <button
                onClick={()=>handleFinish(_id)}
                className="flex text-green-800 font-semibold justify-center items-center gap-2">
                  <FaCheck />
                  Finished
                </button>
              </li>
              {/* delete button */}
              <li>
                <button 
                onClick={()=>handleDelete(_id)}
                className="flex text-red-500 font-semibold justify-center items-center gap-2">
                  <FaTrash />
                  Delete
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* Card body */}
        <div>
        <h1 className="text-xl font-medium">{eventTitle}</h1>
          <h1 className="text-base font-extralight">{eventDuration}, One-on-One</h1>
          <h1 className="text-base font-extralight">{fromTime}, {eventDate}</h1>
          <h1 className="text-base font-extralight">
            <span className="font-semibold">Status</span>: {eventStatus}
          </h1>
        </div>
        <hr />

        {/* open and share button */}
        <div className="flex justify-between">
          {/* open button */}
          <Link
            target="_blank"
            href={meetingLink}
            className="btn btn-sm flex justify-center items-center gap-2 border border-purple-500"
          >
            Open
          </Link>
          {/* share button */}
          <button
            onClick={() => document.getElementById(`my_modal_${_id}`).showModal()}
            className="btn btn-sm flex justify-center items-center gap-2 border border-sky-500 "
          >
            <FaShare /> Share
          </button>
        </div>
      </div>

      {/* MODAL  */}
      <dialog id={`my_modal_${_id}`} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{eventTitle}</h3>

          <p className="text-kg font-semibold mt-3">
            Copy and paste your scheduling link into a message
          </p>
          <div className="flex justify-between items-center gap-5 mt-3">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              defaultValue={shareableLink}
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
