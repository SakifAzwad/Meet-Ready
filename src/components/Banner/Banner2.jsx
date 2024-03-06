/* eslint-disable @next/next/no-img-element */
"use client";
// import img from "next/img";
import { TypeAnimation } from "react-type-animation";
import Calender from "@/components/Home/HomeJSONs/Calender.json";
import message from "@/components/Home/HomeJSONs/Message.json";
import Bird from "@/components/Home/HomeJSONs/Bird.json";
import Lottie from "lottie-react";
import Image from "next/image";

const Banner2 = () => {
  return (
    <div data-testid="homeBanner2">
      <div>
        <h1 className="text-center py-20 text-purple-900 lg:text-5xl text-3xl font-bold">
          Setup made quick, sharing made simple
        </h1>
      </div>
      <div className="lg:flex lg:w-full">
        <div className="flex items-center justify-center lg:w-1/2">
          <div className="mb-12 rounded-xl flex flex-col max-w-[400px] bg-white h-[450px] items-center justify-center relative">
            <div className="w-60">
              <Lottie animationData={Calender} />
            </div>
            <h1 className="text-3xl font-bold">Set Your availability</h1>
            <div>
              <Image
                width={1000}
                height={1000}
                src="https://i.ibb.co/h7bJR5Q/Week.png"
                alt=""
              />
            </div>
            <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center absolute -top-6 -left-6">
              <h1 className="text-3xl font-bold text-white">1</h1>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <h1 className="lg:text-right text-center lg:pr-36 text-2xl lg:pt-32 text-purple-900">
            {/* <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        ` Take control of your availability by defining your schedule,
        seamlessly connect your calendar, and let the right times
        automatically populate on your booking page.`,
        1000, // wait 1s before replacing "Mice" with "Hamsters"
      ]}
      wrapper="span"
      speed={50}
      className='space-y-12'
      style={{whiteSpace: 'pre-line', fontSize: '1.5em', display: 'inline-block', }}
      
      cursor={false}
    /> */}
            Take control of your availability by defining your schedule,
            seamlessly connect your calendar, and let the right times
            automatically populate on your booking page.
          </h1>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row  lg:w-full">
        <div className="lg:w-1/2">
          <h1 className="lg:text-left text-center  lg:pl-36 text-2xl pt-32 text-purple-900">
            Share your scheduling link effortlessly: distribute your booking
            page via email, text, social media, or embed it seamlessly on your
            website
          </h1>
        </div>
        <div className="flex mt-12 lg:mt-0 items-center justify-center lg:w-1/2">
          <div className="rounded-xl p-4 flex flex-col w-[400px] bg-white h-[450px] items-center justify-center relative">
            <div className="w-60">
              <Lottie animationData={message} />
            </div>
            <h1 className="text-3xl font-bold">Share your booking link</h1>
            <div className="w-[80%] h-8 bg-violet-100 mt-6 rounded-full"></div>
            <button className="btn w-1/2 bg-violet-400 text-white text-xl font-bold mt-12">
              Share Link
            </button>
            <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center absolute -top-6 -left-6">
              <h1 className="text-3xl font-bold text-white">1</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex  lg:w-full mt-12">
        <div className="flex mt-12 lg:mt-0 items-center justify-center lg:w-1/2">
          <div className="rounded-xl p-4 pb-8 flex flex-col w-[400px] bg-white h-[450px] items-center justify-center relative">
            <div className="w-48">
              <Lottie animationData={Bird} />
            </div>
            <h1 className="text-3xl font-bold">Thanks for booking!</h1>
            <h1 className="text-sm text-gray-500 mt-2 font-bold">
              You&apos;ll receive an email with a calendar invite.
            </h1>
            <div className="w-[80%] h-8 bg-violet-100 mt-6 rounded-full"></div>
            <div className="w-[80%] h-8 bg-violet-100 mt-6 rounded-full"></div>
            <div className="w-[80%] h-8 bg-violet-100 mt-6 rounded-full"></div>
            <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center absolute -top-6 -left-6">
              <h1 className="text-3xl font-bold text-white">1</h1>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <h1 className="lg:text-left text-center  lg:pl-36 text-2xl pt-32 text-purple-900">
            Experience the surge in bookings as individuals begin scheduling
            time with you. With Meet-Ready`s intuitive dashboard, effortlessly
            manage all your appointments.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
