'use client'

import Marquee from "react-fast-marquee";
import Status from "./Status/Status";



const AboutUs = () => {



    return (
        <div>

                    <div className="text-center my-12 space-y-4">
          <h1 className="text-6xl text-black font-bold">Helping Milllions 
           <span className="text-pink-500"> for contact</span>
           <h1 className="text-6xl text-black font-bold">Easier</h1>
          </h1>
            <p className="text-slate-500 w-[550px] text-2xl mx-auto text-center ">From small businesses to Fortune 100 companies, millions of people around the world rely on Calendly to close deals, land candidates, build relationships, and grow their business—faster.</p>
           </div>

             
              <Status></Status>

           



        
                <Marquee></Marquee>
       







        </div>
    );
};

export default AboutUs;