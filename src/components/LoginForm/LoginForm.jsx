'use client'
import Link from 'next/link'
import React from 'react'
import { signIn, useSession } from "next-auth/react"
import logo from "@/assets/meetReadyLogo.png"
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const LoginForm = () => {
  const router = useRouter()

  const handleSubmit = async(e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email, password)
    const response = await signIn("credentials", {
      redirect: false,
      email,
      password,
    })

    if (response?.error){
      console.log(error)
    }
    router.replace('/')
  }
  return (
    <section className="flex flex-col md:flex-row h-screen items-center">

  <div className="bg-purple-300 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
    <Image src="https://i.ibb.co/nLK1vKw/12146011-Wavy-Gen-01-Single-07.png" alt='login-image' height={700} width={500} className=" w-full h-full object-cover py-12"/>

    {/* <img src="https://i.ibb.co/nLK1vKw/12146011-Wavy-Gen-01-Single-07.png" alt="" className=" w-full h-full object-cover py-12"/> */}
  </div>

  

  <div className="bg-purple-100 w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12   flex items-center justify-center">


    <div className="w-full h-100">

    <Image src="https://i.ibb.co/T24b18g/meet-Ready-Logo.png" className="px-12" height={200} width={400} alt='logo'/>

{/* 
    <img src="https://i.ibb.co/T24b18g/meet-Ready-Logo.png" className="px-12" alt='logo'/> */}


      <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12 text-center">Log in to your account</h1>

      <form className="mt-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700">Email Address</label>
          <input type="email" name="email" id="email" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus required/>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" name="password" id="password" placeholder="Enter Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500                focus:bg-white focus:outline-none" required/>
        </div>

        <div className="text-right mt-2">
          <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
        </div>

        <button type="submit" className="w-full block bg-purple-400 hover:bg-purple-500 focus:bg-indigo-400 text-white font-semibold rounded-lg              px-4 py-3 mt-6">Log In</button>
      </form>

      <hr className="my-6 border-gray-300 w-full"/>

      <button 
      onClick={() => signIn('google')}
      type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
            <div className="flex items-center justify-center">
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
            <span className="ml-4">
            Log in
            with
            Google</span>
            </div>
          </button>

      <p className="mt-8">Need an account? <Link
       href="/register" className="text-purple-500 hover:text-purple-700 font-semibold">Create an
              account</Link></p>


    </div>
  </div>

</section>
  )
}

export default LoginForm