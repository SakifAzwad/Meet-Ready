/* eslint-disable @next/next/no-img-element */
"use client";

import HoverButton from "./HoverButton";

// import img from 'next/img';

const Banner = () => {
  return (
    <div className="lg:flex w-full" data-testid="homeBanner">
      <div className="lg:w-1/2 lg:ml-28">
        <h1 className="lg:text-5xl text-center lg:text-left text-3xl lg:pt-36 pt-12 font-semibold ">
          Take Control of Your Time <br></br> Stay{" "}
          <span className="text-purple-700">Meet-Ready</span>
        </h1>
        <h1 className="pt-12 text-2xl text-center lg:text-left">
          Focus on What Matters Most, <br></br> Leave Scheduling to Us
        </h1>
        <div className="lg:ml-0  mt-8 flex items-center justify-center lg:justify-start">
          <HoverButton />
        </div>
      </div>
      <div className="lg:w-1/2">
        <img className="" src="https://i.ibb.co/6tJ58K9/banner.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
