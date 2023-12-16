import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../utils/UserSlice/userSlice"
import moviesReducer from "../utils/MovieSlice/movieSlice"
import languageReducer from "../utils/LanguageSlice/languageSlice"
const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        lang: languageReducer,
    }
})

export default appStore;