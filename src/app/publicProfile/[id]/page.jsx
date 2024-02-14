"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import React, { useEffect } from "react";

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

  // download function

  const handleDownloadPdf = (downloadLink) => {
    try {
      const link = document.createElement("a");
      link.href = downloadLink;
      
      // Extract filename from the downloadLink
      const filename = downloadLink.substring(downloadLink.lastIndexOf("/") + 1);
      
      link.download = filename; // specify the filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };
  
  const handleDownloadVideo = (link) => {
    try {
      const anchor = document.createElement("a");
      anchor.href = link;
      anchor.download = true;
      anchor.click();
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  console.log(data);
  return (
    <div
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
      }}
      className="my-10 max-w-7xl mx-auto"
    >
      {/* heading */}
      <div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "50px",
            fontWeight: "bold",
          }}
        >
          Hello Fella greeting from {data?.name}
        </h1>
      </div>
      <hr
        className="my-5"
        style={{
          backgroundColor: "purple",
          height: "3px",
          borderRadius: "20px",
        }}
      />
      {/* Introduction div */}
      <div
        style={{
          fontSize: "30px",
          margin: "30px 0",
          textAlign: "justify",
          lineHeight: "46px",
          fontWeight: "600",
        }}
        className="text-xl"
      >
        A dedicated and resourceful professional seeking a challenging position
        where my{" "}
        <span
          style={{
            color: "rgb(147 51 234)",
          }}
        >
          {data?.skill}
        </span>{" "}
        can be utilized to contribute to the success and growth of the
        organization. With a strong background in{" "}
        <span
          style={{
            color: "rgb(147 51 234)",
          }}
        >
          {data?.skill}
        </span>
        , I am eager to apply my expertise and drive for excellence to make
        meaningful contributions to a dynamic team.
      </div>

      {/* image */}
      <div
        style={{
          display: "flex",
          justifyContent: "right",
        }}
      >
        <Image
          src={data?.image}
          height={300}
          width={300}
          alt="Profile-Image"
          style={{
            borderRadius: "10px",
            border: "8px solid rgb(147 51 234)",
            boxShadow: '0 10px 26px rgba(147, 51, 234, 0.6), 0 15px 18px rgba(147, 51, 234, 0.2)'
          }}
        />
      </div>
      {/* my info */}
      <div style={{
          margin: "60px 0px",
        }}>
        <h1
          style={{
            fontSize: "50px",
            fontWeight: "bold",
            textAlign: "center",
            textShadow: "2px 2px 4px rgba(147, 51, 234, 0.7)",
          }}
          className="text-center font-bold text-3xl"
        >
          My Info
        </h1>

        <div
          style={{
            color: "black",
            fontSize: "30px",
            margin: "30px 0",
            lineHeight: "46px",
            fontWeight: "600",
            backgroundColor: 'rgb(233 213 255)',
            borderRadius: "20px",
            padding: '10px 20px',
            boxShadow: '0 10px 26px rgba(147, 51, 234, 0.5), 0 15px 18px rgba(147, 51, 234, 0.5)',
          }}
        >
          <p className="bg-purple-200">Name: {data?.name}</p>
          <p>Email: {data?.email}</p>
          <p>Phone: {data?.phone}</p>
          <p>Address: {data?.address}</p>
          <p>Skill: {data?.skill}</p>
        </div>
      </div>
      {/* download options */}
      <div
        style={{
          margin: "60px 0px",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            fontWeight: "bold",
            textAlign: "center",
            textShadow: "2px 2px 4px rgba(147, 51, 234, 0.7)",
          }}
          className="text-center font-bold text-3xl shadow-2xl"
        >
          Download Section
        </h1>
        {/* buttons */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            margin: "50px 0",
          }}
        >
          <button
            style={{
              padding: "20px 30px",
              border: "2px solid rgb(147, 51, 234)",
              fontSize: "25px",
              fontWeight: "bold",
              backgroundColor: "rgb(147, 51, 234)",
              color: "white",
              borderRadius: "10px",
              cursor: "pointer",
              boxShadow: '0 10px 26px rgba(147, 51, 234, 0.6), 0 15px 18px rgba(147, 51, 234, 0.2)'
            }}
            onClick={() => handleDownloadPdf(data?.resume)}
          >
            Resume
          </button>
          <button
            style={{
              padding: "20px 30px",
              border: "2px solid rgb(147, 51, 234)",
              fontSize: "25px",
              fontWeight: "bold",
              backgroundColor: "rgb(147, 51, 234)",
              color: "white",
              borderRadius: "10px",
              cursor: "pointer",
              boxShadow: '0 10px 26px rgba(147, 51, 234, 0.6), 0 15px 18px rgba(147, 51, 234, 0.2)'
            }}
            onClick={() => handleDownloadVideo(data?.introVideo)}
          >
            Intro Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublicProfile;
