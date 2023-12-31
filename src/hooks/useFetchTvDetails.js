import { options } from "../utils/URL/url"
import { useDispatch, useSelector } from "react-redux";
import { addDetails } from "../utils/MovieSlice/movieSlice";
import { useEffect } from "react";
export const usefetchTvDetails = () => {
    const dispatch = useDispatch();
    const showTvData = useSelector(store => store.movies.showDetails);
    const fetchTv = async() => {
        const fetchData = await fetch("https://api.themoviedb.org/3/tv/103540?language=en-US", options);
        const getData = await fetchData.json();
        dispatch(addDetails(await getData));
        console.log(getData);
    }
    useEffect(() => {
        !showTvData && fetchTv();
    }, [])
}