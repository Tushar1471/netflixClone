import React, { useState } from "react";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import Header from "../Header/Header";
import VideoBackground from "../layouts/VideoBackground/VideoBackground";
import MovieCards from "../MovieCards/MovieCards";
import { usePopularMovies } from "../../hooks/usePopularMovies.js";
import { useTopRated } from "../../hooks/useTopRated.js";
import { useDispatch, useSelector } from "react-redux";
import { useUpcomingMovies } from "../../hooks/useUpcomingMovies.js";
// import { clearIdMovies } from "../../utils/LanguageSlice/languageSlice.js";
import { clearId, clearIdTrailers } from "../../utils/MovieSlice/movieSlice.js";
// import { useFetchIdTrailer } from "../../hooks/useFetchIdTrailers.js";
const Browse = () => {
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();
  const updateState = (newState) => {
    setDisplay(newState);
  };
  useFetchMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();
  // useFetchIdTrailer(trailerId);
  // const trailerId = useSelector((store) => store.movies?.showIdTrailers);
  // if (trailerId === null) return;
  const popMovies = useSelector((movie) => movie.movies?.nowPopularMovies);
  const topRated = useSelector((topRated) => topRated.movies?.nowTopRated);
  const upcomingMovies = useSelector(
    (upcoming) => upcoming.movies?.nowUpcoming
  );
  const allMovies = useSelector((all) => all.movies?.nowPlayingMovies);
  const addTrailers = useSelector((store) => store.movies?.showIdTrailers);

  // addTrailers && console.log(trailer);
  return (
    <>
      {display ? (
        <div className="w-full h-screen bg-black z-50 absolute top-0 flex justify-center py-8">
          <div className="w-2/6 h-full bg-slate-900 p-6 flex justify-center rounded-lg">
            <div className="w-full h-full  ">
              <div className="w-full h-[40%] relative">
                {addTrailers && (
                  <iframe
                    className="w-full aspect-video rounded-lg "
                    src={
                      "https://www.youtube.com/embed/" +
                      addTrailers.key +
                      "?&autoplay=1&mute=1"
                    }
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                )}
                <div
                  className="w-10 h-10 opacity-50 absolute -right-10 -top-10 bg-black rounded-[100vh] cursor-pointer "
                  onClick={() =>
                    dispatch(clearId()) &&
                    dispatch(clearIdTrailers()) &&
                    setDisplay(false)
                  }
                >
                  <span className="material-symbols-outlined text-white text-[40px]">
                    cancel
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[500vh] bg-black">
          <div className=" sticky top-0 z-50">
            <Header />
          </div>
          <div className="w-full h-screen relative">
            <div className="w-full absolute -top-[178px]">
              <VideoBackground />
            </div>
          </div>
          <div className="relative -top-[60px] flex justify-center">
            <div className="w-full h-full  absolute -top-40">
              <MovieCards
                title={"Upcoming Movies on Netflix"}
                upcomingMovies={upcomingMovies}
                prevState={display}
                updateParentState={updateState}
              />
              <MovieCards
                title={"Top Rated"}
                topRated={topRated}
                prevState={display}
                updateParentState={updateState}
              />
              <MovieCards
                title={"Popular on Netflix"}
                popMovies={popMovies}
                prevState={display}
                updateParentState={updateState}
              />
              <MovieCards
                title={"All Movies"}
                allMovies={allMovies}
                prevState={display}
                updateParentState={updateState}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Browse;
