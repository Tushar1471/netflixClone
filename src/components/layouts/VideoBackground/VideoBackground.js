import React from "react";
import { useFetchTrailer } from "../../../hooks/useFetchTrailer";
import { useSelector } from "react-redux";
import VideoTitle from "../VideoTitle/VideoTitle";
const VideoBackground = () => {
  useFetchTrailer();
  const newArr = [];
  const dbTrailer = useSelector((store) => store.movies?.nowPlayingVideos);

  if (dbTrailer === null) return;
  dbTrailer.filter((item) =>
    item.type === "Trailer" ? newArr.push(item) : null
  );

  const { key, name } = newArr[2];

  return (
    <>
      <div className="w-full bg-blue-200">
        <VideoTitle data={key} />
        <div className="w-full h-full absolute top-0  bg-gradient-to-tr from-black px-12"></div>
        <div className="w-4/12 h-60 p-4  flex flex-col justify-evenly  absolute top-[380px] left-10">
          <div className="flex items-center">
            <img
              className="w-10 h-10"
              src="https://th.bing.com/th/id/OIP.jHQLwTvVoKGcJNKN_5jL3QHaHa?rs=1&pid=ImgDetMain"
              alt="Random"
            />
            <h1 className="ml-1 text-3xl text-white">SERIES</h1>
          </div>
          <h1 className="text-5xl text-white font-semibold font-serif ">
            {name}
          </h1>
          <div className="w-full flex justify-between">
            <button className="flex  items-center bg-white px-14 py-2 text-xl font-bold rounded-lg hover:bg-slate-200 ">
              <span className="material-symbols-outlined text-3xl">
                play_arrow
              </span>
              Play
            </button>
            <button
              className="flex items-center px-10 py-2 text-xl font-bold drop-shadow-2xl text-white
               rounded-lg opacity-90 bg-gradient-to-br from-slate-600 hover:bg-slate-800"
            >
              <span className="material-symbols-outlined">info</span>
              More info
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoBackground;
