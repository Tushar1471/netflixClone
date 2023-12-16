import { options } from "../utils/URL/url"
import { useDispatch, useSelector } from "react-redux";
import { addUpMovies } from "../utils/MovieSlice/movieSlice";
import { useEffect } from "react";
export const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const store = useSelector(store => store.movies.nowUpcoming);
    useEffect(() => {
        !store && upcomingMovies();
    }, []);
    const upcomingMovies = async() => {
        const fetchData = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", options);
        const data = await fetchData.json();
        dispatch(addUpMovies(data.results));
    }
}