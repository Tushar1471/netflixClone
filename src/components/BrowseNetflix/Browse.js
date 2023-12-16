import React from "react";
// import { useFetchTrailer } from "../../hooks/useFetchTrailer";
import { useFetchMovies } from "../../hooks/useFetchMovies";
// import VideoBackground from "../layouts/VideoBackground/VideoBackground";
import Header from "../Header/Header";
import VideoBackground from "../layouts/VideoBackground/VideoBackground";
import MovieCards from "../MovieCards/MovieCards";
import { usePopularMovies } from "../../hooks/usePopularMovies.js";
import { useTopRated } from "../../hooks/useTopRated.js";
import { useSelector } from "react-redux";
import { useUpcomingMovies } from "../../hooks/useUpcomingMovies.js";
// import { useDispatch } from "react-redux";
// import {
//   clearCheckId,
//   clearTrailer,
// } from "../../utils/MovieSlice/movieSlice.js";
const Browse = () => {
  // useFetchTrailer();
  // const dispatch = useDispatch();
  useFetchMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();

  const popMovies = useSelector((movie) => movie.movies?.nowPopularMovies);
  const topRated = useSelector((topRated) => topRated.movies?.nowTopRated);
  const upcomingMovies = useSelector(
    (upcoming) => upcoming.movies?.nowUpcoming
  );
  const allMovies = useSelector((all) => all.movies?.nowPlayingMovies);

  // const checkId = useSelector((id) => id.movies.checkId);
  // const playMovie = useSelector((play) => play.movies.nowPlayMovie);
  // // if (checkId && playMovie === null) return;
  // if (checkId) dispatch(clearCheckId());
  // if (playMovie) dispatch(clearTrailer());
  return (
    <>
      <div className="w-full h-[500vh] bg-black">
        <div className=" sticky top-0 z-50">
          <Header />
        </div>
        <div className="w-full h-screen relative">
          <div className="w-full absolute -top-44">
            <VideoBackground />
          </div>
        </div>
        <div className="relative -top-[70px] flex justify-center">
          <div className="w-full h-full  absolute -top-40">
            <MovieCards
              title={"Upcoming Movies on Netflix"}
              upcomingMovies={upcomingMovies}
            />
            <MovieCards title={"Top Rated"} topRated={topRated} />
            <MovieCards title={"Popular on Netflix"} popMovies={popMovies} />
            <MovieCards title={"All Movies"} allMovies={allMovies} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Browse;
