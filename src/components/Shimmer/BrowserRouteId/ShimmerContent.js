import React from "react";
import { Link } from "react-router-dom";

const ShimmerContent = () => {
  return (
    <>
      <div className="w-full h-screen bg-black z-50  top-0 flex justify-center py-10">
        <div className="w-2/6 h-full bg-gradient-to-t from-slate-950 flex justify-center rounded-lg">
          <div className="w-full h-full flex flex-col justify-between ">
            <div className="w-full h-[40%] relative bg-gradient-to-r from-slate-500">
              <Link
                to={"/browse"}
                className=" absolute -right-4 -top-6 cursor-pointer "
                title="close"
              >
                <span className="material-symbols-outlined  text-white w-8 h-8 bg-slate-900 rounded-[100vh] flex justify-center items-center text-3xl">
                  close
                </span>
              </Link>
            </div>
            <div className="w-full h-[55%] rounded-lg p-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShimmerContent;
