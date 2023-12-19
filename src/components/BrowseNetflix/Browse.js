import React, { useEffect } from "react";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import Header from "../Header/Header";
import VideoBackground from "../layouts/VideoBackground/VideoBackground";
import MovieCards from "../MovieCards/MovieCards";
import { usePopularMovies } from "../../hooks/usePopularMovies.js";
import { useTopRated } from "../../hooks/useTopRated.js";
import { useSelector } from "react-redux";
import { useUpcomingMovies } from "../../hooks/useUpcomingMovies.js";
import {
  clearDetails,
  clearId,
  clearIdTrailers,
} from "../../utils/MovieSlice/movieSlice.js";
import { useDispatch } from "react-redux";
const Browse = () => {
  const dispatch = useDispatch();
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
  const CHECK_REDUX_ID = useSelector((store) => store.movies?.checkId);
  const CHECK_REDUX_TRAILER = useSelector(
    (store) => store.movies?.showIdTrailers
  );
  const CHECK_MOVIE_DETAIL = useSelector((store) => store.movies?.showDetails);

  useEffect(() => {
    if (CHECK_REDUX_ID) CHECK_REDUX_ID && dispatch(clearId());
  }, []);
  useEffect(() => {
    if (CHECK_REDUX_TRAILER) CHECK_REDUX_TRAILER && dispatch(clearIdTrailers());
  }, []);
  useEffect(() => {
    if (CHECK_MOVIE_DETAIL) CHECK_MOVIE_DETAIL && dispatch(clearDetails());
  }, []);

  return (
    <>
      <div className="w-full h-[500vh] bg-gradient-to-t from-black via-slate-1000 to-black">
        <div className=" sticky top-0 z-50">
          <Header />
        </div>
        <div className="w-full h-screen relative">
          <div className="w-full absolute -top-[178px]">
            <VideoBackground />
          </div>
        </div>
        <div className="relative -top-[65px] flex justify-center">
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
