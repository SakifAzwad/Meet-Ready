"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashNavButton from "@/components/DashNavButton/DashNavButton";
import Input from "@/components/JobSeekerDashboard/Input/Input";
import PdfViewer from "@/components/JobSeekerDashboard/PdfViewer/PdfViewer";
import VideoPlayer from "@/components/JobSeekerDashboard/VideoPlayer/VideoPlayer";
import { cartContext } from "@/utils/Cart/CartContext";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

const Profile = () => {
  const session = useSession();
  const email = session?.data?.user?.email;
  const { isClicked, publicProfile, setPublicProfile } =
    useContext(cartContext);
  const [copySuccess, setCopySuccess] = useState("");
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

  // Data patch function

  const publishableLink = async (publicProfile) => {
    console.log(publicProfile)
    try {
      console.log(publicProfile)
      const res = await axios.patch(`/api/jobSeeker?email=${email}`, publicProfile)
      return res.data;
    } catch (error) {
      console.log(error)
    }
  }


  const {mutateAsync} = useMutation({
    mutationFn: publishableLink,
    onSuccess:(data) => {
      console.log(data)
      if(data === "Publishable Link Update"){
        toast.success("Linked saved in server.")
      } else if (data === "Error in Link Publish"){
        toast.error("Error occurred. Try again Later.")
      } else if (data === "Internal Server Error"){
        toast.error("Internal Server Error. Try agin later")
      }
    }
  })

  // onclick handler
  const handleClick = async () => {
    const publicLink = `http://local-host:3000/publicProfile/${data?._id}`
    console.log(publicLink)
    setPublicProfile(`http://local-host:3000/publicProfile/${data?._id}`);
    mutateAsync(publicLink)
    
  };

  // publishable link copy functionality

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(publicProfile);
      setCopySuccess("Copied to clipboard!");
      toast.success("Linked copied to dashboard")
    } catch (error) {
      console.error("Failed to copy:", error);
      setCopySuccess("Copy failed");
      toast.error("Copy failed")
    }
  };

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
          I am <span className="text-purple-700">{data?.name}</span>, a
          motivated and dedicated professional with a passion for{" "}
          <span className="text-purple-700">{data?.skill}</span>. I thrive in
          dynamic environments and am committed to delivering high-quality
          results.
        </p>
        <p>
          {" "}
          Below, you can watch an introductory video about myself and access my
          detailed resume for more information.{" "}
        </p>
        <p>
          I look forward to connecting and discussing how my skills and
          experience can benefit your team. Feel free to reach me via email at{" "}
          <span className="text-purple-700">{data?.email}</span> or call me at{" "}
          <span className="text-purple-700">{data?.phone}</span>.
        </p>
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
        <h2 className="text-xl font-bold text-black mb-5">Intro Video</h2>
        {data?.introVideo && <VideoPlayer video={data?.introVideo} />}
        {/* <video controls className="mt-2" style={{ maxWidth: "100%" }}>
    <source src={data?.video} type="video/avi" 
    className="w-[100%] h-[100%]"
    />
    Your browser does not support the video tag.
  </video> */}
      </div>
      {/*Resume*/}
      <div className="my-5">
        {/* <PdfViewer/> */}
        <h2 className="text-xl font-bold text-black mb-5">Resume</h2>

        {/* TODO show pdf viewer here */}

        {data?.resume && (
          <h1>
            Resume Link :{" "}
            <Link
              className="cursor-pointer text-purple-700"
              href={data?.resume}
              target="_blank"
            >
              Click Here
            </Link>
          </h1>
        )}
      </div>
      {/*Publish button and publish link*/}
      <div className="space-y-3">
        <DashNavButton 
        className='bg-purple-500 hover:bg-purple-700 text-white '
        onClick={handleClick}>Publish Now</DashNavButton>
        {publicProfile && (
          <>
            <Input
              onClick={copyToClipboard}
              readOnly="readOnly"
              value={publicProfile}
            />
        {/* copy button  */}
        <DashNavButton
        className='bg-purple-500 hover:bg-purple-700 text-white'
        onClick={copyToClipboard}>Copy Publishable Link</DashNavButton>
          </>
        )}
      </div>
      <ToastContainer
        toastStyle={{ backgroundColor: "rgb(192 132 252)", color: "black" }}
        bodyClassName="toast-body"
        position="top-left"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Profile;
