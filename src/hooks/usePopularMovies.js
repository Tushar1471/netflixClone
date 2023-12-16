import { options } from "../utils/URL/url"
import { useDispatch, useSelector } from "react-redux";
import { addPopMovies } from "../utils/MovieSlice/movieSlice";
import { useEffect } from "react";


export const usePopularMovies = () => {
    const dispatch = useDispatch();
    const cards = useSelector((item) => item.movies.nowPopularMovies);
    useEffect(() => {
        !cards && fetchPopMovies();
    }, [])
    const fetchPopMovies = async() => {
        const fetchData = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options);
        const jsonData = await fetchData.json();
        dispatch(addPopMovies(jsonData.results));
    }

}