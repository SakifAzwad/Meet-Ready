/* eslint-disable @next/next/no-img-element */
"use client"
// import img from 'next/img';
import {Typing, TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div className="lg:flex w-full"
        data-testid="homeBanner"
        >
            <div className="lg:w-1/2 lg:ml-28">
            
                    <h1 className="lg:text-5xl text-center lg:text-left text-3xl lg:pt-36 pt-12 font-semibold ">
                    
                    Take Control of Your Time <br></br> Stay <span className="text-purple-700">Meet-Ready</span>
                    </h1>
                    <h1 className="pt-12 text-2xl text-center lg:text-left">
                    Focus on What Matters Most, <br></br> Leave Scheduling to Us
                    </h1>
                   <div className='lg:ml-0 ml-32'>
                   <a href="/login" className="text-purple-700 border border-purple-600 py-4 mt-8 px-6 rounded inline-flex items-center">
        Get Started
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="w-6 h-6 ml-2"
        >
          <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </a>
                   </div>
                    
            </div>
            <div className="lg:w-1/2">
            <img className="" src="https://i.ibb.co/6tJ58K9/banner.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;