import React from "react";
const Homepage = () => {
  return (
    <>
      <div className="w-[100%] h-[100vh] relative">
        <img
          className="w-full h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Netflix"
        />
        <div className="w-full h-full bg-black absolute top-0 opacity-90 bg-gradient-to-t from-slate-700 to-slate-900"></div>
        <div className="w-full h-full absolute top-0 opacity-60">
          <div className="w-full h-24  flex justify-between items-center">
            <div className="w-2/12 h-16 ml-8">
              <img
                className="w-full h-full"
                src="https://davidblaine.com/wp-content/uploads/2017/04/netflix-logo.png"
                alt="Random"
              />
            </div>
            <div className="w-3/12 h-16 p-1 mr-8 flex justify-evenly items-center">
              <div className="w-6/12 h-10 bg-gray-800 rounded-md border">
                <select className="w-full h-full text-center bg-transparent text-white text-md">
                  <option value="ENG" className="bg-white text-black">
                    English
                  </option>
                  <option value="HIN" className="bg-white text-black">
                    Hindi
                  </option>
                </select>
              </div>
              <div className="w-3/12 h-10">
                <button className="w-full h-full bg-red-800 hover:bg-red-900 rounded-md text-white">
                  <a href="http://localhost:3000/login">Sign In</a>
                </button>
              </div>
            </div>
          </div>
          <div className="w-6/12 p-5 mt-32 ml-44 text-white">
            <p className="text-6xl  font-bold leading-[75px]">
              Unlimited movies,
              <br /> TV shows and more
            </p>
            <p className="text-3xl mt-5 mb-9">
              Starts at &#8377;149.Cancel anytime.
            </p>
            <p className="text-md text-slate-400">
              Ready to watch?Enter your email to create or restart your
              membership.
            </p>
            <div className="w-full h-16 flex justify-between mt-5">
              <div className="w-7/12 h-full bg-gray-900 rounded-md text-white">
                <input
                  type="email"
                  className="rounded-md indent-4 w-full h-full bg-transparent"
                  placeholder="Email address"
                />
              </div>
              <div className="w-4/12 h-full rounded-lg bg-red-600 mr-10">
                <button className="w-full  h-full text-xl font-bold flex justify-center items-center">
                  Get Started
                  <span className="material-symbols-outlined ml-2 text-xl">
                    arrow_forward_ios
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-black text-white"></div>
    </>
  );
};

export default Homepage;
