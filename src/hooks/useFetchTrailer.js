import { useEffect } from "react";
import { options } from "../utils/URL/url";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/MovieSlice/movieSlice.js";
export const useFetchTrailer = () => {
  const dispatch = useDispatch();
  const trailerList = useSelector((item) => item.movies.nowPlayingVideos);
  const fetchTrailer = async () => {
    const fetchData = await fetch(
      "https://api.themoviedb.org/3/movie/466420/videos?",
      options
    );
    const getData = await fetchData.json();
    dispatch(addVideos(await getData.results));
  };
  useEffect(() => {
    !trailerList && fetchTrailer();
  }, []);
};
