import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { addIdTrailers } from "../utils/MovieSlice/movieSlice";
import { options } from "../utils/URL/url";
export const useFetchTvTrailer = () => {
    // const dispatch = useDispatch();
    const store = useSelector(item => item.movies.showIdTrailers);
    const fetchTvTrailer = async(resId) => {
        const fetchData = await fetch(
            `https://api.themoviedb.org/3/tv/${resId}/videos?language=en-US`,
            options
        );
        const getData = await fetchData.json();
        const newData = await getData.results;
        console.log(newData);
    };
    useEffect(() => {
        !store && fetchTvTrailer();
    })

}