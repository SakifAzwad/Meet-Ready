import Image from "next/image";
import InputField from "../InputField/InputField";

const Footer = () => {
  return (
    <div data-testid="homeFooter">
      <footer className=" font-sans lg:px-40">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div>
              <p className="font-semibold text-black ">Quick Links</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-black transition-colors duration-300  dark:hover:text-purple-400 hover:underline hover:cursor-pointer hover:text-col1">
                  Home
                </p>
                <p className="text-black transition-colors duration-300  dark:hover:text-purple-400 hover:underline hover:cursor-pointer hover:text-col1">
                  Who We Are
                </p>
                <p className="text-black transition-colors duration-300  dark:hover:text-purple-400 hover:underline hover:cursor-pointer hover:text-col1">
                  Our Philosophy
                </p>
              </div>
            </div>

            <div>
              <p className="font-semibold text-black ">Industries</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-black transition-colors duration-300  dark:hover:text-purple-400 hover:underline hover:cursor-pointer hover:text-col1">
                  Retail & E-Commerce
                </p>
                <p className="text-black transition-colors duration-300  dark:hover:text-purple-400 hover:underline hover:cursor-pointer hover:text-col1">
                  Information Technology
                </p>
                <p className="text-black transition-colors duration-300  dark:hover:text-purple-400 hover:underline hover:cursor-pointer hover:text-col1">
                  Finance & Insurance
                </p>
              </div>
            </div>
            <div className="sm:col-span-2">
              <h1 className="max-w-lg text-xl font-semibold tracking-tight  xl:text-2xl ">
                Subscribe our newsletter to get an update.
              </h1>

              <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row w-full">
                <InputField
                  id="email"
                  type="text"
                  className="px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-purple-400 dark:focus:border-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-purple-300 w-1/2 "
                  placeholder="Email Address"
                />

                {/* <input id="email" type="text" className="px-4 w-1/2 py-2 text-gray-700 bg-white border  rounded-md   focus:border-purple-400 dark:focus:border-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-purple-300" placeholder="Email Address" />
                 */}
                <button className=" ml-4  flex h-min items-center disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 justify-center ring-none  rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  bg-purple-400 border-b-violet-700 disabled:border-0 disabled:bg-violet-500 disabled:text-white ring-white text-white border-b-4 hover:border-0 active:border-0 hover:text-gray-100 active:bg-violet-800 active:text-gray-300 focus-visible:outline-violet-500 text-sm sm:text-base">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="sm:flex sm:items-center sm:justify-between lg:px-20">
            <div className="flex flex-1 gap-4 hover:cursor-pointer">
              <Image
                className="hover:opacity-80"
                src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
                width="130"
                height="110"
                alt=""
              />
              <Image
                className="hover:opacity-80"
                src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                width="130"
                height="110"
                alt=""
              />
            </div>

            <div className="flex gap-4 hover:cursor-pointer">
              <Image
                className="hover:opacity-80"
                src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                width="30"
                height="30"
                alt="fb"
              />
              <Image
                className="hover:opacity-80"
                src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                width="30"
                height="30"
                alt="tw"
              />
              <Image
                className="hover:opacity-80"
                src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                width="30"
                height="30"
                alt="inst"
              />
              <Image
                className="hover:opacity-80"
                src="https://www.svgrepo.com/show/94698/github.svg"
                width="30"
                height="30"
                alt="gt"
              />
              <Image
                className="hover:opacity-80"
                src="https://www.svgrepo.com/show/22037/path.svg"
                width="30"
                height="30"
                alt="pn"
              />
              <Image
                className="hover:opacity-80"
                src="https://www.svgrepo.com/show/28145/linkedin.svg"
                width="30"
                height="30"
                alt="in"
              />
              <Image
                className="hover:opacity-80"
                src="https://www.svgrepo.com/show/22048/dribbble.svg"
                width="30"
                height="30"
                alt="db"
              />
            </div>
          </div>
          <p className="font-sans p-8 text-start md:text-center md:text-lg md:p-4">
            © 2024 Meet-Ready Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
