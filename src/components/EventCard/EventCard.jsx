"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
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

const EventCard = ({ event }) => {
  const queryClient = useQueryClient();
  const {
    eventTitle,
    eventDuration,
    fromTime,
    eventDate,
    eventStatus,
    _id,
    meetingLink,
    shareableLink,
  } = event;

  // console.log('event card', event)
  const meetLinkRef = useRef(null);
  const router = useRouter();

  const copyToClipboard = () => {
    if (meetLinkRef.current) {
      meetLinkRef.current.select();
      navigator.clipboard.writeText(meetLinkRef.current.value);
      // Optionally, you can provide feedback to the user
      alert("Link copied to clipboard!");
    }
  };

  // Delete functionality--------

  // Asynchronous function for sending delete request

  const deleteEvent = async (id) => {
    try {
      const res = await axios.delete(`/api/createEvent/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  // Tanstack query is used to call deleteEvent function

  const { mutateAsync: deleteMutateAsync } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: (data) => {
      console.log(data);
      if (data === "Item Deleted") {
        // Todo toast should be shown
        queryClient.invalidateQueries(["singleEventDataGet"]);
      }
    },
  });

  const handleDelete = async (id) => {
    // Todo a alert should be shown that the user is sure something like that
    // calling mutateAsync function
    deleteMutateAsync(id);
  };

  // Finish functionality---------

  // Creating function to update the status of an event
  const updateEventStatus = async (id) => {
    try {
      const res = await axios.patch(`/api/createEvent/${id}`);
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  // Using tanstack query and axios to send patch request

  const { data, mutateAsync } = useMutation({
    mutationFn: updateEventStatus,
    onSuccess: (data) => {
      if (data.status === 200) {
        // Todo implement toast
        // toast.success('Lead successfully updated!');
        queryClient.invalidateQueries(["singleEventDataGet"]);
      }
    },
  });

  // Onclick handler
  const handleFinish = async (id) => {
    mutateAsync(id);
  };

  return (
    <>
      <div className="border border-t-2  shadow-purple-500 border-t-purple-500 bg-white p-6 rounded-md space-y-3 hover:shadow-md">
        <div className="flex justify-between relative">
          <div>
            <h1 className="text-xl font-medium">{eventTitle}</h1>
            <h1 className="text-base font-extralight">
              {eventDuration}, One-on-One
            </h1>
            <h1 className="text-base font-extralight">
              {fromTime}, {eventDate}
            </h1>
            <h1 className="text-base font-extralight">
              <span className="font-semibold">Status</span>: {eventStatus}
            </h1>
          </div>
          {/* dropdown */}
          <div className="absolute dropdown dropdown-bottom dropdown-end right-0">
            <div tabIndex={0} role="button" className="">
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
                  <button className="flex font-semibold justify-center items-center gap-2">
                    <FaPencil />
                    Edit
                  </button>
                </Link>
              </li>
              {/* finished button */}
              <li>
                <button
                  onClick={() => handleFinish(_id)}
                  className="flex text-green-800 font-semibold justify-center items-center gap-2"
                >
                  <FaCheck />
                  Finished
                </button>
              </li>
              {/* delete button */}
              <li>
                <button
                  onClick={() => handleDelete(_id)}
                  className="flex text-red-500 font-semibold justify-center items-center gap-2"
                >
                  <FaTrash />
                  Delete
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* Card body */}

        <hr />

        {/* open and share button */}
        <div className="flex justify-between">
          {/* open button */}
          <Link
            target="_blank"
            href={meetingLink}
            className="px-2 py-1 font-medium rounded-md border border-purple-500 hover:bg-purple-500 hover:text-white hover:shadow-md"
          >
            Open
          </Link>
          {/* share button */}
          <button
            onClick={() =>
              document.getElementById(`my_modal_${_id}`).showModal()
            }
            className="px-2 py-1 flex font-medium justify-center items-center gap-2 border rounded-md hover:text-white hover:bg-purple-500 hover:shadow-md border-purple-500"
          >
            <FaShare /> Share
          </button>
        </div>
      </div>

      {/* MODAL  */}
      <dialog
        id={`my_modal_${_id}`}
        className="modal modal-bottom sm:modal-middle"
      >
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
    </>
  );
};

export default EventCard;
