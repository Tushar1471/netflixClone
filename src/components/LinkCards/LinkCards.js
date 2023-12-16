import React from "react";
import { useSelector } from "react-redux";
import { useFetchDetails } from "../../hooks/useFetchDetails";
import { Link } from "react-router-dom";

const LinkCards = () => {
  const resId = useSelector((store) => store.movies?.checkId);
  const data = useSelector((store) => store.movies?.showDetails);
  useFetchDetails(resId);
  if (data === null) return "loading.....";
  const { genres, original_title, backdrop_path, poster_path, overview } = data;
  return (
    <>
      {data && (
        <div>
          <div className="w-full h-screen relative">
            <img
              className="w-full h-full"
              src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
              alt="Netflix"
            />
          </div>
          <div className="w-full h-screen bg-black opacity-70 absolute top-0"></div>
          <div className="flex justify-center">
            <div className="w-11/12 h-screen absolute top-0 flex justify-center items-center p-6 cursor-pointer">
              <div className="w-9/12 h-[100%] shadow-lg">
                <div className="w-full h-[50%] flex justify-evenly p-1">
                  <Link className="w-3/12 h-full" to={"/browse"}>
                    <img
                      className="w-full h-full rounded-lg"
                      src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                      alt=""
                    />
                  </Link>
                  <div className="w-7/12 h-full flex flex-col justify-center text-white">
                    <div className="w-full">
                      <h1 className=" border-b border-slate-500 border-solid text-5xl font-serif font-semibold text-center py-1  bg-gradient-to-r from-blue-700 via-green-400 to-indigo-600 text-transparent bg-clip-text animate-custom-bounce ">
                        {original_title}
                      </h1>
                    </div>
                    <div className="flex justify-evenly px-2 py-2">
                      {genres.map((item) => (
                        <p
                          className="bg-gradient-to-b from-black px-6 py-4 rounded-[100vh]  shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]  cursor-pointer transition hover:bg-black"
                          key={item.id}
                        >
                          {item.name}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full h-[50%] px-4 py-4 flex justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-black shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]  rounded-[10vh] flex justify-center items-center relative">
                    <div className="w-full h-full"></div>
                    <div className="w-11/12 h-full absolute top-0 flex items-center">
                      <p className=" text-2xl opacity-60 bg-gradient-to-r from-blue-400 via-green-200 to-indigo-400 text-transparent bg-clip-text text-justify font-semibold ">
                        {overview}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LinkCards;
