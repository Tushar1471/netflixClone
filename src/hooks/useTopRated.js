import { options } from "../utils/URL/url"
import { addTopRated } from "../utils/MovieSlice/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
export const useTopRated = () => {
    const store = useSelector(store => store.movies.nowTopRated);
    const dispatch = useDispatch();
    useEffect(() => {
        !store && topRated();
    }, [])

    const topRated = async() => {
        const fetchData = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options);
        const data = await fetchData.json();
        dispatch(addTopRated(data.results));
    }
}