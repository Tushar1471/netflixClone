import { useEffect } from "react";
import { addTrendingMovies } from "../../utils/MovieSlice/movieSlice";
import { options } from "../../utils/URL/url"
import { useDispatch, useSelector } from "react-redux";

export const useTrendingMovies = () => {
    const dispatch = useDispatch();
    const store = useSelector(store => store.movies.showTrendingMovies);
    const fetchData = async() => {
        const trendingMovies = await fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US", options);
        const data = await trendingMovies.json();
        dispatch(addTrendingMovies(await data.results));
    }
    useEffect(() => {
        !store && fetchData();
    }, [])
}