import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        nowPlayingVideos: null,
        nowPopularMovies: null,
        nowTopRated: null,
        nowUpcoming: null,
        checkId: null,
        showDetails: null,
    },
    reducers: {
        addMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addVideos: (state, action) => {
            state.nowPlayingVideos = action.payload;
        },
        addPopMovies: (state, action) => {
            state.nowPopularMovies = action.payload;
        },
        addTopRated: (state, action) => {
            state.nowTopRated = action.payload;
        },
        addUpMovies: (state, action) => {
            state.nowUpcoming = action.payload;
        },
        addId: (state, action) => {
            state.checkId = action.payload;
        },
        addDetails: (state, action) => {
            state.showDetails = action.payload;
        },
        clearDetails: (state) => {
            state.showDetails = null;
        }

    }
});


export const { addMovies, addVideos, addPopMovies, addTopRated, addUpMovies, addId, addDetails, clearDetails } = moviesSlice.actions;
export default moviesSlice.reducer;