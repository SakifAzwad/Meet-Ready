/* eslint-disable @next/next/no-img-element */
"use client";
import PublicProfileForm from "@/components/PublicProfile/PublicProfile";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaMailchimp, FaPhone, FaPrint } from "react-icons/fa6";

const PublicProfile = ({ params }) => {
  const id = params.id;

  // Function to call data

  const getPublicProfileData = async (id) => {
    try {
      const res = await axios.get(`/api/jobSeeker/${id}`);
      return res.data.profileData;
    } catch (error) {
      console.log(error);
    }
  };

  // Tanstack query to fetch data

  const { data, isLoading } = useQuery({
    queryKey: ["publicData"],
    queryFn: () => getPublicProfileData(id),
  });

  if (isLoading) {
    return <p> Please Wait for loading........</p>;
  }


 
  console.log(data);
  return (
    <div id="section-to-print" className="min-h-screen bg-gray-100  flex flex-col justify-center ">
      <PublicProfileForm data={data}/>
    </div>
  );
};

export default PublicProfile;

address: "Mirpur-2, Block: H, Road No: 09, House no: 12, Bangladesh";
email: "22235103364@cse.bubt.edu.bd@gmail.com";
image: "https://utfs.io/f/6126ffc1-fcbd-497a-b4f0-50ee6adece33-aro212.jpg";
introVideo: "https://utfs.io/f/b4e260ac-0295-4fab-b0a5-7cb412fe9524-nmnzmf.mp4";
loginEmail: "22235103364@cse.bubt.edu.bd";
name: "MD ABDUR RAHMAN SIFAT";
phone: "+8801521788920";
publishableLink: "http://local-host:3000/publicProfile/65d8b4d87f85bc10c1c49ded";
resume: "https://utfs.io/f/d43b2310-fac6-4418-9d3d-a3d74d31876f-iwo1uz.pdf";
skill: "MERN";
__v: 0;
_id: "65d8b4d87f85bc10c1c49ded";
