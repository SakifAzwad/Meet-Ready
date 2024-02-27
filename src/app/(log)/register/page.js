"use client";
import InputField from "@/components/InputField/InputField";
import Lottie from "lottie-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MeetLogo from "../../../../public/Meet.json";
import LoginAnimation from "../../../assets/LoginAnimation.json";

import Spinner from "@/components/Loading/Spinner";
import { useState } from "react";
import toast from "react-hot-toast";

const Register = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.status === 400) {
        setLoading(false);
        toast.error("This email is already registered");
        console.log("This email is already registered");
      }
      if (res.status === 200) {
        setLoading(false);
        toast.success("Successfully Register!!");
        console.log("Registration successful");
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section class="flex flex-col md:flex-row h-screen items-center">
        <div
          class="bg-purple-100 w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
        >
          <div class="w-full h-100">
            <div className="flex items-center justify-center">
              <Lottie
                animationData={MeetLogo}
                className="py-4"
                style={{
                  width: "100px",
                  height: "170px",
                }}
              />
              <p className="text-center text-3xl">
                <span
                  className="text-3xl font-black"
                  style={{
                    color: "white",
                    WebkitTextFillColor: "black",
                    WebkitTextStroke: "1.5px purple",
                    fontSize: "42px",
                    fontWeight: "bolder",
                  }}
                >
                  MeetReady
                </span>
              </p>
            </div>

            <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12 text-center">
              Sign Up to get Started
            </h1>

            <form class="mt-2" onSubmit={handleSubmit}>
              <div>
                <label class="block text-gray-700">Name</label>
                <InputField
                  type="text"
                  name="name"
                  id=""
                  placeholder="Enter Your Name"
                  class="w-full px-4 py-3 rounded-lg  mt-2 text-gray-700 bg-white border focus:border-purple-400 dark:focus:border-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-purple-300"
                  autofocus
                  autocomplete
                  required
                />
              </div>

              <div class="">
                <label class="block text-gray-700">Email</label>
                <InputField
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter Your Email"
                  minlength="6"
                  class="w-full px-4 py-3 rounded-lg mt-2 text-gray-700 bg-white border focus:border-purple-400 dark:focus:border-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-purple-300"
                  required
                />
              </div>

              <div class="">
                <label class="block text-gray-700">Password</label>
                <InputField
                  type="password"
                  name="password"
                  id=""
                  placeholder="Enter Your Password"
                  minlength="6"
                  class="w-full px-4 py-3 rounded-lg  mt-2 text-gray-700 bg-white border focus:border-purple-400 dark:focus:border-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-purple-300"
                  required
                />
              </div>
              {!loading ? (
                <button
                  type="submit"
                  class="w-full block bg-purple-400 hover:bg-purple-500 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
                >
                  Register
                </button>
              ) : (
                <Spinner />
              )}
            </form>

            <p class="mt-8">
              Already have an account?
              <Link
                href="/login"
                class="text-purple-500 hover:text-purple-700 font-semibold"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
        <div className="bg-purple-300 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <Lottie
            style={{ height: "90vh", marginTop: "90px" }}
            animationData={LoginAnimation}
          />
        </div>
      </section>
    </>
  );
};

export default Register;
