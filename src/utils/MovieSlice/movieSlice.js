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
        showIdTrailers: null,
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
        clearId: (state) => {
            state.checkId = null;
        },
        addDetails: (state, action) => {
            state.showDetails = action.payload;
        },
        clearDetails: (state) => {
            state.showDetails = null;
        },
        addIdTrailers: (state, action) => {
            state.showIdTrailers = action.payload;
        },
        clearIdTrailers: (state) => {
            state.showIdTrailers = null;
        },


    }
});


export const { addMovies, addVideos, addPopMovies, addTopRated, addUpMovies, addId, addDetails, clearDetails, clearId, addIdTrailers, clearIdTrailers } = moviesSlice.actions;
export default moviesSlice.reducer;