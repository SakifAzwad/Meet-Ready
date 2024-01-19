import logo from "@/assets/meetReadyLogo.png"
import Link from "next/link";

import React from 'react';

const login = () => {
    return (
        <>
        
       
        
<section class="flex flex-col md:flex-row h-screen items-center">

  <div class="bg-purple-300 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
    <img src="https://i.ibb.co/nLK1vKw/12146011-Wavy-Gen-01-Single-07.png" alt="" class=" w-full h-full object-cover py-12"/>
  </div>

  

  <div class="bg-purple-100 w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">


    <div class="w-full h-100">

    <img src="https://i.ibb.co/T24b18g/meet-Ready-Logo.png" class="px-12"/>
      <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12 text-center">Log in to your account</h1>

      <form class="mt-6" action="#" method="POST">
        <div>
          <label class="block text-gray-700">Email Address</label>
          <input type="email" name="" id="" placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required/>
        </div>

        <div class="mt-4">
          <label class="block text-gray-700">Password</label>
          <input type="password" name="" id="" placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required/>
        </div>

        <div class="text-right mt-2">
          <a href="#" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
        </div>

        <button type="submit" class="w-full block bg-purple-400 hover:bg-purple-500 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Log In</button>
      </form>

      <hr class="my-6 border-gray-300 w-full"/>

      <button type="button" class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
            <div class="flex items-center justify-center">
            <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="w-6 h-6"
    viewBox="0 0 48 48"
  >
    <defs>
      <path
        id="a"
        d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
      />
      <clipPath id="b">
        <use xlinkHref="#a" overflow="visible" />
      </clipPath>
    </defs>
    <g clipPath="url(#b)">
      <path fill="#FBBC05" d="M0 37V11l17 13z" />
      <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
      <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
      <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
    </g>
  </svg>
            <span class="ml-4">
            Log in
            with
            Google</span>
            </div>
          </button>

      <p class="mt-8">Need an account?<Link href="/register" class="text-purple-500 hover:text-purple-700 font-semibold">Create an
              account</Link></p>


    </div>
  </div>

</section>
        
        </>
        
    );
};

export default login;