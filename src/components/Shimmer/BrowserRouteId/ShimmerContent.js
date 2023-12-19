import React from "react";
import { Link } from "react-router-dom";

const ShimmerContent = () => {
  return (
    <>
      <div className="w-full h-screen z-50 absolute bg-black  top-0 flex justify-center py-8">
        <div className="w-2/6 h-full p-6 flex justify-center rounded-lg bg-slate-900 ">
          <div className="w-full h-full  ">
            <div className="w-full h-[40%] relative bg-gradient-to-br from-slate-700  rounded-lg bg-transparent">
              <Link
                to={"/browse"}
                className="w-10 h-10 opacity-50 absolute -right-10 -top-10 bg-gradient-to-br from-slate-800  rounded-[100vh] cursor-pointer "
              >
                <span className="material-symbols-outlined text-white text-[40px]">
                  cancel
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShimmerContent;
