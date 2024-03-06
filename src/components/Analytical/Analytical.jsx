/* eslint-disable @next/next/no-img-element */
"use client";
import { useQuery } from "@tanstack/react-query";
import "chart.js/auto";
import { useSession } from "next-auth/react";
import { Bar, Pie } from "react-chartjs-2";
const Analytical = () => {
  // Getting user email from session so that event information can be called based on email
  const session = useSession();
  const email = session?.data?.user?.email;
  console.log("email in alalytical", email);
  //  Creating function to get event data based on email
  const getDataByEmail = async (email) => {
    console.log(email);
    try {
      const res = await axios.get(`/api/createEvent?email=${email}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  };

  // Using tanstack query and axios data is fetched form server

  const {
    data: emailData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["singleEventDataGet"],
    queryFn: () => getDataByEmail(email),
  });

  console.log("data in analytical", emailData);
  const data = {
    labels: ["Google Meet", "Zoom", "Others"],
    datasets: [
      {
        label: "",
        data: [3, 2, 1],
        backgroundColor: ["#6A0DAD", "rgba(106, 13, 173, 0.6)", "#c084fc"],
        borderColor: ["#6A0DAD", "rgba(147, 112, 219, 0.6)", "#c084fc"],
        borderWidth: 1,
      },
    ],
  };
  const data2 = {
    labels: [
      "Sep 2023",
      "Oct 2023",
      "Nov 2023",
      "Dec 2023",
      "Jan 2024",
      "Feb 2024",
    ],
    datasets: [
      {
        label: "Interviews",
        data: [2, 5, 3, 1, 5, 2], // Sample data for the 6 months
        backgroundColor: "rgba(147, 112, 219, 0.6)",
        borderColor: "rgba(147, 112, 219, 0.6)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            max: 20, // Maximum value on the y-axis
          },
        },
      ],
    },
  };
  return (
    <div className="md:mx-0  mx-8">
      <h1 className="mt-12 text-center text-5xl text-purple-900 font-extrabold ">
        Analytical Dashboard
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1  mt-12  lg:gap-x-12 gap-y-4">
        <div className=" card  bg-purple-100 shadow-xl">
          <div className="card-body">
            <div className="flex items-center gap-x-4">
              <img
                src="https://i.ibb.co/Z8RS8ms/resume-svgrepo-com-1.png"
                className="w-11"
              ></img>
              <h2 className="card-title text-5xl text-purple-900">5</h2>
            </div>
            <p className="text-2xl font-semibold">Interviews Created</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card  bg-purple-100 shadow-xl">
          <div className="card-body">
            <div className="flex items-center gap-x-4">
              <img
                src="https://i.ibb.co/C5cs5C4/job-search-svgrepo-com.png"
                className="w-11"
              ></img>
              <h2 className="card-title text-5xl text-purple-900">2</h2>
            </div>
            <p className="text-2xl font-semibold">Interviews Finished</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card  bg-purple-100 shadow-xl">
          <div className="card-body">
            <div className="flex items-center gap-x-4">
              <img
                src="https://i.ibb.co/Yc2Nksq/presentation-svgrepo-com.png"
                className="w-11"
              ></img>
              <h2 className="card-title text-5xl text-purple-900">1</h2>
            </div>
            <p className="text-2xl font-semibold">Upcoming Interviews</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
      <div className="lg:flex md:w-full lg:gap-x-8">
        <div className="card bg-purple-100 mt-12 shadow-xl lg:w-1/3  mb-8 p-8">
          <h1 className="text-center pb-4 text-2xl text-purple-900 font-semibold">
            Platform Used
          </h1>
          <Pie className="" data={data}></Pie>
        </div>
        <div className="card bg-purple-100 mt-12 shadow-xl lg:w-2/3  mb-8 p-8">
          <h1 className="text-center pb-4 text-2xl text-purple-900 font-semibold">
            Interview Frequency
          </h1>
          <Bar data={data2} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Analytical;
