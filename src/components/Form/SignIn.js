import React, { useState } from "react";

const SignIn = () => {
  const [isSign, setSignIn] = useState(true);
  const handleSign = () => {
    setSignIn(!isSign);
  };
  return (
    <>
      <div className=" w-4/12 h-[60%]  mx-auto mt-10 bg-black px-16 py-16 opacity-70">
        <div className="p-2 ">
          <h1 className="text-white font-sans text-3xl font-semibold mb-1">
            {isSign ? "Sign In" : "Sign Up"}
          </h1>
          <form
            className="h-72 flex flex-col justify-evenly items-center"
            type="GET"
            action="https://localhost:3000/user"
          >
            <div>
              {!isSign && (
                <input
                  className="w-full h-12 rounded-sm indent-3 border border-none outline-none mb-6 text-white bg-slate-600"
                  type="text"
                  name="Name"
                  placeholder="Enter your Name"
                  spellCheck="false"
                  autoComplete="off"
                />
              )}
              <input
                className="w-full h-12 rounded-sm indent-3 border border-none outline-none mb-6 text-white bg-slate-600"
                type="email"
                name="Email"
                placeholder="Email or phone number"
                spellCheck="false"
                autoComplete="off"
              />
              <input
                className="w-full h-12 rounded-sm indent-3 border-none outline-none text-white bg-slate-600"
                type="password"
                name="Password"
                placeholder="Password"
                autoComplete="off"
              />
            </div>
            <button className="w-full p-4 bg-gradient-to-r from-red-900 to-orange-600 filter brightness-200 text-white rounded-md">
              {isSign ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <div className="w-full h-10 -mt-4  flex justify-between items-center text-slate-300">
            <div className="flex justify-center items-center">
              <input
                type="checkbox"
                name="Remember Me"
                placeholder="Remember me"
                id="remMe"
              />
              <label htmlFor="remMe" className="text-sm ml-1">
                Remember Me
              </label>
            </div>
            <div>
              <p className="text-sm">
                <a href="/">Need Help?</a>
              </p>
            </div>
          </div>
          <p className="text-slate-400">
            {isSign ? "New to NetFlix!" : "Already Registered?"}&nbsp;&nbsp;
            <span
              className="text-white cursor-pointer hover:underline"
              onClick={handleSign}
            >
              {isSign ? "Sign Up Now" : "Sign In Now"}
            </span>
          </p>
          <p className="text-slate-400 text-xs mt-4 text-center">
            Sign in is protected by Google reCAPTCHA to ensure you're not a bot
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
