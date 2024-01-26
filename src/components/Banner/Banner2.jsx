"use client";
// import img from "next/img";
import { TypeAnimation } from "react-type-animation";

const Banner2 = () => {
  return (
    <div>
      <div>
        <h1 className="text-center py-20 text-purple-900 lg:text-5xl text-3xl font-bold">
          Setup made quick, sharing made simple
        </h1>
      </div>
      <div className="lg:flex lg:w-full">
        <div className="lg:w-1/2">
          <img src="https://i.ibb.co/M1CBf8X/Untitled-design-1.png" alt="" />
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
      <div className="lg:flex  lg:w-full">
        <div className="lg:w-1/2">
          <h1 className="lg:text-left text-center  lg:pl-36 text-2xl pt-32 text-purple-900">
          Share your scheduling link effortlessly: distribute your booking page via email, text, social media, or embed it seamlessly on your website
          </h1>
        </div>
        <div className="lg:w-1/2">
          <img src="https://i.ibb.co/pdnMDGq/Untitled-design-3.png" alt="" />
        </div>
      </div>
      <div className="lg:flex  lg:w-full">
      <div className="lg:w-1/2">
          <img src="https://i.ibb.co/R60DsZ0/Untitled-design-6.png" alt="" />
        </div>
        <div className="lg:w-1/2">
        <h1 className="lg:text-left text-center  lg:pl-36 text-2xl pt-32 text-purple-900">
          Experience the surge in bookings as individuals begin scheduling time with you. With Meet-Ready`s intuitive dashboard, effortlessly manage all your appointments.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
