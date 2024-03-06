"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import Leader from "./Leader/Leader";

const AboutUs = () => {
  return (
    <div className="p-4">
      <div className="text-center my-12 space-y-4">
        <h1 className="md:text-6xl text-3xl text-black font-bold">
          Helping Milllions
          <span className="text-pink-500"> for contact</span>
          <h2 className="md:text-6xl text-3xl text-black font-bold">Easier</h2>
        </h1>
        <p className="text-slate-500 md:w-[550px] w-full md:text-2xl mx-auto text-center ">
          From small businesses to Fortune 100 companies, millions of people
          around the world rely on Calendly to close deals, land candidates,
          build relationships, and grow their business—faster.
        </p>
      </div>

      <div className="my-12 p-5 ">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 my-20  gap-4">
          <div className="space-y-3 text-center">
            <h1 className="md:text-6xl text-4xl  text-pink-500 font-bold">
              10<span className="text-slate-600">m</span>
            </h1>
            <p className="md:text-2xl text-lg text-slate-600">
              Users worldwide
            </p>
          </div>

          <div className="space-y-3 text-center">
            <h1 className="md:text-6xl text-4xl  text-pink-500 font-bold">
              100<span className="text-slate-600">k</span>
            </h1>
            <p className="text-2xl text-slate-600">Companies uses</p>
            <p className="md:text-2xl text-lg text-slate-600"> Calendly</p>
          </div>

          <div className="space-y-3 text-center">
            <h1 className="md:text-6xl text-4xl  text-pink-500 font-bold">
              130<span className="text-slate-600">+</span>
            </h1>
            <p className="text-2xl text-slate-600">
              Countries with monthly active
            </p>
            <p className="md:text-2xl text-lg text-slate-600"> users</p>
          </div>

          <div className="space-y-3 text-center">
            <h1 className="md:text-6xl text-4xl  text-pink-500 font-bold">
              50<span className="text-slate-600">+</span>
            </h1>
            <p className="md:text-2xl text-lg text-slate-600">
              Partner integrations
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="text-center">
          <h1 className="md:text-4xl text-2xl">
            Simplified scheduling for more than{" "}
          </h1>
          <h2 className="md:text-4xl text-2xl">
            <span className="font-bold text-pink-600">20 million </span> users
            worldwide
          </h2>
        </div>
        <Marquee className="my-10">
          <div className="mx-8">
            <Image
              width="170"
              height="170"
              loading="lazy"
              className="h-15 w-15 md:h-20 md:w-20 lg:w-[92px] lg:h-[92px] object-cover"
              src="https://i.ibb.co/pbvQ77C/compass.jpg"
              alt=""
            />
          </div>
          <div className="mx-8">
            <Image
              width="170"
              height="170"
              loading="lazy"
              className="h-15 w-15 md:h-20 md:w-20 lg:w-[92px] lg:h-[92px] object-cover"
              src="https://i.ibb.co/FHGdSwK/zendesk.png"
              alt=""
            />
          </div>
          <div className="mx-8">
            <Image
              width="170"
              height="170"
              loading="lazy"
              className="h-15 w-15 md:h-20 md:w-20 lg:w-[92px] lg:h-[92px] object-cover"
              src="https://i.ibb.co/K6bKW6b/LOreal-Logo.png"
              alt=""
            />
          </div>
          <div className="mx-8">
            <Image
              width="170"
              height="170"
              loading="lazy"
              className="h-15 w-15 md:h-20 md:w-20 lg:w-[92px] lg:h-[92px] object-cover"
              src="https://i.ibb.co/MfXFPxH/crocs.jpg"
              alt=""
            />
          </div>
          <div className="mx-8">
            <Image
              width="170"
              height="170"
              loading="lazy"
              className="h-15 w-15 md:h-20 md:w-20 lg:w-[92px] lg:h-[92px] object-cover"
              src="https://i.ibb.co/wSkz6cy/Ancestry-Logo.jpg"
              alt=""
            />
          </div>
          <div className="mx-8">
            <Image
              width="170"
              height="170"
              loading="lazy"
              className="h-15 w-15 md:h-20 md:w-20 lg:w-[92px] lg:h-[92px] object-cover"
              src="https://i.ibb.co/QjXWr48/nestlel.png"
              alt=""
            />
          </div>
          <div className="mx-8">
            <Image
              width="170"
              height="170"
              loading="lazy"
              className="h-15 w-15 md:h-20 md:w-20 lg:w-[92px] lg:h-[92px] object-cover"
              src="https://i.ibb.co/nsPW43c/Albaik-logo.png"
              alt=""
            />
          </div>
        </Marquee>
      </div>

      <div className="flex flex-col md:flex-row w-full  gap-6 md:h-[400px] my-12 p-6">
        <div className="md:w-[50%]">
          <img
            className="w-full h-[400px] rounded-lg"
            src="https://i.ibb.co/fXdXpcv/HD-wallpaper-earth-planet-communication-lines-glow.jpg"
          ></img>
        </div>

        <div className="md:w-[40%] space-y-6">
          <h1 className="md:text-5xl text-3xl font-bold">
            Our <span className="text-pink-600">Mission</span>
          </h1>
          <p className="md:text-2xl text-lg text-slate-500">
            What started as a simple, time-saving scheduling link has grown into
            an omni-channel scheduling platform for teams and businesses around
            the world. Our belief is that a scheduling automation platform
            should provide broad and deep support for various meeting scenarios
            — especially for teams that schedule meetings with external parties
            at scale.
          </p>
        </div>
      </div>

      <div className="">
        <div className="my-12">
          <h1 className="md:text-5xl text-3xl my-8 font-bold text-center">
            Our <span className="text-pink-600">Story</span>
          </h1>
          <p className="md:text-xl text-lg text-slate-500 text-center">
            Meet Ready is so much more than a scheduling platform, we are a team
            of customer
          </p>
          <p className="md:text-xl text-lg text-slate-500 text-center">
            obsessed, mission-oriented people who believe anything is possible.
          </p>
        </div>

        <div className="">
          <Leader></Leader>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
