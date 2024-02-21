import Image from "next/image";
import logo from "./../../assets/meetReadyLogo.png";
import MeetLogo from "../../../public/Meet.json";
import {
  FaC,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import Lottie from "lottie-react";

const PricingFooter = () => {
  return (
    <div className="w-[90vw] mx-auto">
      <footer className="footer p-5 bg-base-200 text-base-content">
        <nav>
          <h6 className="footer-title">General</h6>
          <a href="/pricing/#" className="link link-hover">Branding</a>
          <a href="/pricing/#" className="link link-hover">Design</a>
          <a href="/pricing/#" className="link link-hover">Marketing</a>
          <a href="/pricing/#" className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Use cases</h6>
          <a href="/pricing/#"  className="link link-hover">About us</a>
          <a href="/pricing/#"  className="link link-hover">Contact</a>
          <a href="/pricing/#"  className="link link-hover">Jobs</a>
          <a href="/pricing/#"  className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a href="/pricing/#"  className="link link-hover">Terms of use</a>
          <a href="/pricing/#"  className="link link-hover">Privacy policy</a>
          <a href="/pricing/#"  className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <div className="flex items-center">
            <Lottie
              animationData={MeetLogo}
              style={{
                width: "60px",
                height: "50px",
              }}
            />
            <p className="text-center text-3xl">
              <span
                className="text-3xl font-black"
                style={{
                  color: "white",
                  WebkitTextFillColor: "black",
                  WebkitTextStroke: "1.5px purple",
                  fontSize: "28px",
                  fontWeight: "bolder",
                }}
              >
                MeetReady
              </span>
            </p>
          </div>
          <a className="link link-hover">
            The simple and affordable way to book meetings online
          </a>
          <div className="flex flex-row gap-4">
            <FaFacebook className="text-purple-600 text-4xl" />
            <FaTwitter className="text-purple-600 text-4xl" />
            <FaLinkedin className="text-purple-600 text-4xl" />
            <FaInstagram className="text-purple-600 text-4xl" />
          </div>
          <button className="w-full  hover:animate-pulse h-16 border-2 border-sky-300 text-sky-800 font-black rounded-full hover:text-black duration-300 relative group">
            <span className=" absolute w-12 group-hover:w-[93%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-sky-300 group-hover:bg-sky-500 group-hover:duration-500 -z-10"></span>
            All System Operation
          </button>
          <select className="select select-primary w-full max-w-xs">
            <option disabled selected>
              English
            </option>
            <option>Bangla</option>
            <option>Hindi</option>
            <option>Arabic</option>
            <option>Frances</option>
          </select>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
          <FaC className="text-purple-600 text-4xl" />
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default PricingFooter;
