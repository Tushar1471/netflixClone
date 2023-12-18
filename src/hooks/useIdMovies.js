import { options } from "../utils/URL/url"
import { useDispatch, useSelector } from "react-redux";
import { addIdMovies } from "../utils/LanguageSlice/languageSlice";
import { useEffect } from "react";
export const useIdMovies = (resId) => {
    const dispatch = useDispatch();
    const store = useSelector(store => store.lang.ShowResIdMovies);
    const fetchIdMovies = async() => {
        const movie = await fetch(`https://api.themoviedb.org/3/movie/${resId}/videos?language=en-US`, options);
        const newData = await movie.json();
        dispatch(addIdMovies(await newData.results));

    }
    useEffect(() => {
        !store && fetchIdMovies();
    }, []);
}