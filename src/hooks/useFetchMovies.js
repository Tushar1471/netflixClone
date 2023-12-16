import { options } from "../utils/URL/url";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../utils/MovieSlice/movieSlice.js";
import { useEffect } from "react";
// For maintainble and less messy code,stores the whole logic in custom hook.
export const useFetchMovies = () => {
    const dispatch = useDispatch();
    const store = useSelector(store => store.movies.nowPlayingMovies);
    const fetchMovies = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", options);
        const response = await data.json();
        dispatch(addMovies(await response.results));
    };
    useEffect(() => {
        !store && fetchMovies();
    }, []);

}