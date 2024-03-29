"use client";
import Lottie from "lottie-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import MeetLogo from "../../../public/Meet.json";
import LoginAnimation from "../../assets/LoginAnimation.json";
import InputField from "../InputField/InputField";
import Spinner from "../Loading/Spinner";

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonPosition, setButtonPosition] = useState('right');
  const buttonRef = useRef(null);
  const [formFilled, setFormFilled] = useState(false);

  const rangeRef = useRef(null);
  

  const handleMouseMove = (e) => {
    if (!formFilled) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      if (
        (buttonPosition === 'left' && mouseX > buttonRect.left - 30 && mouseX < buttonRect.right) ||
        (buttonPosition === 'right' && mouseX < buttonRect.right + 30 && mouseX > buttonRect.left)
      ) {
        setButtonPosition((prevPosition) => (prevPosition === 'left' ? 'right' : 'left'));
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [buttonPosition, formFilled]);

  useEffect(() => {
    if(email && password){
      setFormFilled(true)
    }
  },[email, password])


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    const response = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    console.log(response);

    if (response?.error) {
      setLoading(false);
      toast.error("Login Fail!");

      console.log(response?.error);
    } else {
      setLoading(false);
      toast.success("Successfully login!");
    }
    router.push("/dashboard");
  };

  const handleGoogleSignIn = () => {
    setIsClick(true);
    signIn("google");
  };

  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-purple-300 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <Lottie
          style={{ height: "90vh", marginTop: "90px" }}
          animationData={LoginAnimation}
        />
      </div>

      <div 
      id="range"
      className="bg-purple-100 w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12   flex items-center justify-center">
        <div className="w-full h-100">
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

          <h1 className="text-xl md:text-2xl font-bold leading-tight text-center">
            Log in to your account
          </h1>

          <form 
          
          className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <InputField
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email Address"
                value={email}
              onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg mt-2text-gray-700 bg-white border focus:border-purple-400 dark:focus:border-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-purple-300"
                autoFocus
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <InputField
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                minLength="6"
                value={password}
              onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg mt-2 text-gray-700 bg-white border focus:border-purple-400 dark:focus:border-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-purple-300"
                required
              />
            </div>

            <div className="text-right mt-2">
              <a
                href="#"
                className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
              >
                Forgot Password?
              </a>
            </div>
           {
            formFilled ? ( !loading ? (
              <button
                type="submit"
                className="w-full block bg-purple-400 hover:bg-purple-500 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
              >
                Log In
              </button>
            ) : (
              <Spinner />
            )) : (
              <div className="h-20">
                 <button
              type="submit"
              ref={buttonRef}
              style={{ position: "absolute", bottom: 130, [buttonPosition]: 100, transition: "left 0.5s, right 0.5s" }}
              className=" block bg-purple-400 hover:bg-purple-500 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-4"
            >
              Log In
            </button>
              </div>
            )
           }
          </form>

          <hr className="my-6 border-gray-300 w-full" />
          {!isClick ? (
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="w-full block bg-purple-400 hover:bg-purple-500 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 border border-gray-300"
            >
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
                <span className="ml-4">Log in with Google</span>
              </div>
            </button>
          ) : (
            <Spinner />
          )}

          <p className="mt-8">
            Need an account?{" "}
            <Link
              href="/register"
              className="text-purple-500 hover:text-purple-700 font-semibold"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
