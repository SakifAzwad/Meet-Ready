/* eslint-disable @next/next/no-img-element */

// import img from "next/img";
import Marquee from "react-fast-marquee";

const Banner3 = () => {
  return (
    <div className="mb-4">
      <h1 className="text-center py-20 text-purple-900 lg:text-5xl text-3xl font-bold">
        Discover all our Integrations
      </h1>
      <Marquee className="">
        <div className="mx-8">
          <img
            width="184"
            height="184"
            loading="lazy"
            className="h-15 w-15 md:h-20 md:w-20 lg:w-[92px] lg:h-[92px] object-cover"
            src="https://www.appointlet.com/wp-content/uploads/2022/12/Office-365-2x.png"
            alt=""
          />
        </div>
        <div className="mx-8">
          <img
            width="184"
            height="184"
            loading="lazy"
            class="h-15 w-15 md:h-20 md:w-20 lg:w-[92px] lg:h-[92px] object-cover"
            src="https://www.appointlet.com/wp-content/uploads/2022/12/Zoom-2x-1.png"
            alt=""
          />
        </div>
        <div className="mx-8">
          <img
            width="184"
            height="184"
            loading="lazy"
            class="h-15 w-15 md:h-20 md:w-20 lg:w-[92px] lg:h-[92px] object-cover"
            src="https://www.appointlet.com/wp-content/uploads/2022/12/Google-Meet-2x.png"
            alt=""
          />
        </div>
        <div className="mx-8">
          <img
            width="184"
            height="184"
            loading="lazy"
            class="h-15 w-15 md:h-20 md:w-20 lg:w-[92px] lg:h-[92px] object-cover"
            src="https://www.appointlet.com/wp-content/uploads/2022/12/chrome-2x.png"
            alt=""
          />
        </div>
        <div className="mx-8">
          <img
            width="184"
            height="184"
            loading="lazy"
            class="h-15 w-15 md:h-20 md:w-20 lg:w-[92px] lg:h-[92px] object-cover"
            src="https://www.appointlet.com/wp-content/uploads/2022/12/Google-Calendsr-2x.png"
            alt=""
          />
        </div>
        <div className="mx-8">
          <img
            width="184"
            height="184"
            loading="lazy"
            class="h-15 w-15 md:h-20 md:w-20 lg:w-[92px] lg:h-[92px] object-cover"
            src="https://www.appointlet.com/wp-content/uploads/2022/12/LimkedIn-2x.png"
            alt=""
          />
        </div>
        <div className="mx-8">
          <img
            width="184"
            height="184"
            loading="lazy"
            class="h-15 w-15 md:h-20 md:w-20 lg:w-[92px] lg:h-[92px] object-cover"
            src="https://www.appointlet.com/wp-content/uploads/2022/12/Google-sheets-2x.png"
            alt=""
          />
        </div>
        <div className="mx-8">
          <img
            width="184"
            height="184"
            loading="lazy"
            class="h-15 w-15 md:h-20 md:w-20 lg:w-[92px] lg:h-[92px] object-cover"
            src="https://www.appointlet.com/wp-content/uploads/2022/12/Trello-2x.png"
            alt=""
          />
        </div>
        <div className="mx-8">
          <img
            width="184"
            height="184"
            loading="lazy"
            class="h-15 w-15 md:h-20 md:w-20 lg:w-[92px] lg:h-[92px] object-cover"
            src="https://www.appointlet.com/wp-content/uploads/2022/12/Google-Analyticks-2x.png"
            alt=""
          />
        </div>
        <div className="mx-8">
          <img
            width="184"
            height="184"
            loading="lazy"
            class="h-15 w-15 md:h-20 md:w-20 lg:w-[92px] lg:h-[92px] object-cover"
            src="https://www.appointlet.com/wp-content/uploads/2022/12/Firefox-2x.png"
            alt=""
          />
        </div>
      </Marquee>
    </div>
  );
};

export default Banner3;
