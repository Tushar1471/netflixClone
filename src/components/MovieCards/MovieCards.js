import React from "react";
import Mcard from "../Mcard/Mcard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addId } from "../../utils/MovieSlice/movieSlice";
import { addIdTrailers } from "../../utils/MovieSlice/movieSlice";
import { options } from "../../utils/URL/url";
const MovieCards = ({
  title,
  popMovies,
  topRated,
  upcomingMovies,
  allMovies,
}) => {
  const dispatch = useDispatch();

  const fetchTrailer = async (trailerId) => {
    const fetchData = await fetch(
      `https://api.themoviedb.org/3/movie/${trailerId}/videos?`,
      options
    );
    const getData = await fetchData.json();
    const newData = await getData.results;
    await newData.filter((item) =>
      item.type === "Trailer" ? dispatch(addIdTrailers(item)) : null
    );
  };
  return (
    <>
      <div className="w-11/12 h-[380px] bg-transparent mx-auto mb-6">
        <div>
          <h1 className="text-3xl text-white font-semibold flex items-center font-sans transition-shadow transform hover:shadow-lg bg-gradient-to-br from-white to-black text-transparent bg-clip-text">
            {title}
          </h1>
        </div>
        <div
          id="scrollbar"
          className="w-full h-[338px]  py-2 flex flex-wrap flex-col overflow-x-scroll overflow-y-hidden"
        >
          {popMovies &&
            popMovies.map((item) => (
              <Link
                className="w-2/12 h-full mr-3 shadow-lg shadow-slate-900 cursor-pointer transition hover:scale-90"
                key={item.id}
                to={`/browse/${item.id}`}
                onClick={() =>
                  dispatch(addId(item.id)) && fetchTrailer(item.id)
                }
              >
                <Mcard image={item.poster_path} />
              </Link>
            ))}
          {topRated &&
            topRated.map((item) => (
              <Link
                className="w-2/12 h-full mr-3 shadow-lg shadow-slate-900 cursor-pointer transition hover:scale-90"
                key={item.id}
                to={`/browse/${item.id}`}
                onClick={() =>
                  dispatch(addId(item.id)) && fetchTrailer(item.id)
                }
              >
                <Mcard image={item.poster_path} />
              </Link>
            ))}
          {upcomingMovies &&
            upcomingMovies.map((item) => (
              <Link
                className="w-2/12 h-full mr-3 shadow-lg shadow-slate-900 cursor-pointer transition hover:scale-90"
                key={item.id}
                to={`/browse/${item.id}`}
                onClick={() =>
                  dispatch(addId(item.id)) && fetchTrailer(item.id)
                }
              >
                <Mcard image={item.poster_path} />
              </Link>
            ))}
          {allMovies &&
            allMovies.map((item) => (
              <Link
                className="w-2/12 h-full mr-3 shadow-lg shadow-slate-900 cursor-pointer transition hover:scale-90"
                key={item.id}
                to={`/browse/${item.id}`}
                onClick={() =>
                  dispatch(addId(item.id)) && fetchTrailer(item.id)
                }
              >
                <Mcard image={item.poster_path} />
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default MovieCards;
