import { useDispatch, useSelector } from "react-redux";
import { options } from "../../utils/URL/url"
import { addTvSeries } from "../../utils/MovieSlice/movieSlice";
import { useEffect } from "react";


export const useFetchTvSeries = () => {
    const dispatch = useDispatch();
    const store = useSelector(store => store.movies.showTvSeries);
    const fetchTvSeries = async() => {
        const fetchData = await fetch("https://api.themoviedb.org/3/trending/tv/day?language=en-US", options);
        const data = await fetchData.json();
        dispatch(addTvSeries(await data.results));
    }
    useEffect(() => {
        !store && fetchTvSeries();
    }, [])
}