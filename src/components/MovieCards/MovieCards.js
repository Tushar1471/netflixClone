import React, { useEffect } from "react";
import Mcard from "../Mcard/Mcard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addId, clearDetails } from "../../utils/MovieSlice/movieSlice";
import { clearIdMovies } from "../../utils/LanguageSlice/languageSlice";
// import { useFetchIdTrailer } from "../../hooks/useFetchIdTrailers";
import { addIdTrailers } from "../../utils/MovieSlice/movieSlice";
import { options } from "../../utils/URL/url";
const MovieCards = ({
  title,
  popMovies,
  topRated,
  upcomingMovies,
  allMovies,
  prevState,
  updateParentState,
}) => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.movies.showDetails);
  const IdMovies = useSelector((store) => store.lang.ShowResIdMovies);
  useEffect(() => {
    if (data) {
      dispatch(clearDetails());
    }
  }, []);
  useEffect(() => {
    if (IdMovies) {
      dispatch(clearIdMovies());
    }
  }, []);

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
          <h1 className="text-2xl text-white font-semibold flex items-center font-serif transition-shadow transform hover:shadow-lg bg-gradient-to-br from-white to-black text-transparent bg-clip-text">
            {title}
          </h1>
        </div>
        <div
          id="scrollbar"
          className="w-full h-[350px]  py-2 flex flex-wrap flex-col overflow-x-scroll overflow-y-hidden"
        >
          {popMovies &&
            popMovies.map((item) => (
              <Link
                className="w-2/12 h-full mr-2 shadow-2xl  cursor-pointer"
                key={item.id}
                onClick={() =>
                  dispatch(addId(item.id)) &&
                  fetchTrailer(item.id) &&
                  updateParentState(true)
                }
              >
                <Mcard image={item.poster_path} />
              </Link>
            ))}
          {topRated &&
            topRated.map((item) => (
              <Link
                className="w-2/12 h-full mr-2 shadow-2xl cursor-pointer"
                key={item.id}
                onClick={() =>
                  dispatch(addId(item.id)) &&
                  fetchTrailer(item.id) &&
                  updateParentState(true)
                }
              >
                <Mcard image={item.poster_path} />
              </Link>
            ))}
          {upcomingMovies &&
            upcomingMovies.map((item) => (
              <Link
                className="w-2/12 h-full mr-2 shadow-2xl cursor-pointer"
                key={item.id}
                onClick={() =>
                  dispatch(addId(item.id)) &&
                  fetchTrailer(item.id) &&
                  updateParentState(true)
                }
              >
                <Mcard image={item.poster_path} />
              </Link>
            ))}
          {allMovies &&
            allMovies.map((item) => (
              <Link
                className="w-2/12 h-full mr-2 shadow-2xl cursor-pointer"
                key={item.id}
                onClick={() =>
                  dispatch(addId(item.id)) &&
                  fetchTrailer(item.id) &&
                  updateParentState(true)
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
