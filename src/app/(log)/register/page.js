"use client";
import InputField from "@/components/InputField/InputField";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Register = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        toast.error("This email is already registered");
      }
      if (res.status === 200) {
        toast.success("Registration Successful!");
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
            <Image
              src="https://i.ibb.co/T24b18g/meet-Ready-Logo.png"
              alt="register-image"
              className="px-12"
              width={500}
              height={800}
            />

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

                {/* <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Enter Your Name"
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autofocus
                  autocomplete
                  required
                /> */}
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
              {/* <div class="">
                <label class="block text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter Your Password"
                  minlength="6"
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                  required
                />
              </div> */}

              <button
                type="submit"
                class="w-full block bg-purple-400 hover:bg-purple-500 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
              >
                Register
              </button>
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
        <div class="bg-purple-300 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <Image
            height={600}
            width={600}
            className="object-cover w-full h-full py-12"
            alt="second-image"
            src="https://i.ibb.co/nLK1vKw/12146011-Wavy-Gen-01-Single-07.png"
          />
        </div>
      </section>
    </>
  );
};

export default Register;
