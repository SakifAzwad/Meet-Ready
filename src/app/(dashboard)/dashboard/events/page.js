/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import EventCard from "@/components/EventCard/EventCard";
import InputField from "@/components/InputField/InputField";
import Loading from "@/components/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Events = () => {
  // Getting user email from session so that event information can be called based on email
  const session = useSession();
  const email = session?.data?.user?.email;

  //  Creating function to get event data based on email
  const getDataByEmail = async (email) => {
    // console.log(email)
    try {
      const res = await axios.get(`/api/createEvent?email=${email}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  };

  // Using tanstack query and axios data is fetched form server

  const { data, isLoading, isError } = useQuery({
    queryKey: ["singleEventDataGet"],
    queryFn: () => getDataByEmail(email),
  });

  // Rendering p tag at the time of data loading

  if (isLoading) {
    return <Loading></Loading>;
  }

  // Updating fetched data and add meet dynamic link in it.

  const updatedEventData = data?.myEvent?.map((event) => ({
    ...event,
    shareableLink: `https://meet-ready.vercel.app/event/${event._id}`,
  }));

  console.log("upadated event data", updatedEventData);

  return (
    <div className="flex flex-col justify-start mt-16 space-y-5 px-8 md:px-2 lg:px-0">
      <div className="flex justify-center items-center relative ">
        <FaMagnifyingGlass className="text-lg absolute left-3 text-gray-600" />
        <InputField
          type="text"
          placeholder="Search event..."
          className="input input-bordered pl-10 font-medium text-gray-700 bg-white border focus:border-purple-400 dark:focus:border-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-purple-300 w-full"
        />
      </div>

      <h1 className="text-2xl font-semibold pl-2 border-l-2 border-purple-500">
        Events
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 ">
        {updatedEventData ? (
          updatedEventData?.map((event) => (
            <EventCard key={event._id} event={event} />
          ))
        ) : (
          <p className="text-2xl text-center font-semibold">No data to show</p>
        )}
      </div>
    </div>
  );
};

export default Events;
