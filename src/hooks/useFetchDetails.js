import { useDispatch, useSelector } from "react-redux";
import { addDetails } from "../utils/MovieSlice/movieSlice";
import { options } from "../utils/URL/url"
import { useEffect } from "react";
export const useFetchDetails = (resId) => {
    const dispatch = useDispatch();
    const store = useSelector(store => store.movies.showDetails);
    const fetchDetails = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + resId + "?language=en-US", options);
        const result = await data.json();
        // console.log(result);
        dispatch(addDetails(await result));

    }
    useEffect(() => {
        !store && fetchDetails();
    }, []);
}