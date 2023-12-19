import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShimmerContent from "../Shimmer/BrowserRouteId/ShimmerContent";
import { useFetchDetails } from "../../hooks/useFetchDetails";

const VideoPlayer = () => {
  const SHOW_TRAILERS = useSelector((store) => store.movies?.showIdTrailers);
  const resId = useSelector((store) => store.movies.checkId);
  useFetchDetails(resId);
  const SHOW_DETAILS = useSelector((store) => store.movies?.showDetails);
  if (SHOW_TRAILERS === null) return <ShimmerContent />;
  // const { title } = SHOW_DETAILS;

  return (
    <>
      <div className="w-full h-screen bg-black z-50  top-0 flex justify-center py-10">
        <div className="w-2/6 h-full bg-gradient-to-t from-slate-950 flex justify-center rounded-lg">
          <div className="w-full h-full flex flex-col justify-between ">
            <div className="w-full h-[40%] relative">
              <iframe
                className="w-full aspect-video rounded-lg -mt-4"
                src={
                  "https://www.youtube.com/embed/" +
                  SHOW_TRAILERS.key +
                  "?&autoplay=1&mute=1"
                }
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
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
            <div className="w-full h-[55%] rounded-lg p-1">
              {SHOW_DETAILS && (
                <>
                  <div className="bg-gradient-to-r from-indigo-600 via-teal-500 to-indigo-800 text-transparent bg-clip-text">
                    <h1 className="text-4xl font-bold text-center ">
                      {SHOW_DETAILS.title}
                    </h1>
                    <div className="flex flex-wrap justify-evenly py-6">
                      {SHOW_DETAILS.genres.map((item) => (
                        <p className="p-2 text-slate-300" key={item.id}>
                          {item.name}
                        </p>
                      ))}
                    </div>
                    <p className="text-center text-sm">
                      {SHOW_DETAILS.overview}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
