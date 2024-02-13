"use client";

import { cartContext } from "@/utils/Cart/CartContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useContext } from "react";

const Profile = () => {
  const session = useSession();
  const email = session?.data?.user?.email;
  const { isClicked } = useContext(cartContext);
  //  Data get function

  const getMyProfile = async (email) => {
    try {
      const res = await axios.get(`/api/jobSeeker?email=${email}`);
      return res.data.profile;
    } catch (error) {
      console.log(error);
    }
  };

  // tanstack query data fetch

  const { data, isLoading } = useQuery({
    queryKey: ["getJobSeekerProfile"],
    queryFn: () => getMyProfile(email),
  });

  if (!email || isLoading) {
    return <p>Loading.......</p>;
  }

  console.log(data);
  return (
    <div className={`pt-10 pl-20 pr-5 ${isClicked ? "lg:pl-24" : "lg:pl-80"}`}>
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold text-black">Profile</h1>
      {/*Name and Image*/}
      <div className="flex justify-between items-center mt-5">
        <h1 className="text-2xl font-bold text-black">{data?.name}</h1>
        <Image
          src={data?.image}
          height={100}
          width={100}
          alt="Profile-Image"
          className="rounded-full border-[3px] border-purple-600"
        />
      </div>
      <hr
        className="my-5"
        style={{
          backgroundColor: "black",
          height: "3px",
        }}
      />
      {/* Intro about myself */}
      <div className="space-y-2">
        <p>
          I am <span className="text-purple-700">{data?.name}</span>, a motivated and dedicated professional with a
          passion for <span className="text-purple-700">{data?.skill}</span>. I thrive in dynamic environments and am
          committed to delivering high-quality results. 
        </p>
        <p> Below, you can watch an
          introductory video about myself and access my detailed resume for more
          information. </p>
          <p>I look forward to connecting and discussing how my skills
          and experience can benefit your team. Feel free to reach me via email at <span className="text-purple-700">{data?.email}</span> or call me at <span className="text-purple-700">{data?.phone}</span>.</p>
      </div>
      {/*Other Profile Info*/}
        <div>
          <p>Name: {data?.name}</p>
          <p>Email: {data?.email}</p>
          <p>Phone: {data?.phone}</p>
          <p>Address: {data?.address}</p>
          <p>Skill: {data?.skill}</p>
        </div>
      {/*Intro Video*/}
      <div className="mt-5">
  <h2 className="text-xl font-bold text-black">Intro Video</h2>
  <video controls className="mt-2" style={{ maxWidth: "100%" }}>
    <source src={data?.video} type="video/avi" />
    Your browser does not support the video tag.
  </video>
</div>
      {/*Resume*/}

      {/*Publish button and publish link*/}
    </div>
  );
};

export default Profile;
