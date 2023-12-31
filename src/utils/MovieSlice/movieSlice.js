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
        showTrendingMovies: null,
        showTvSeries: null,
        showTvTrailers: null,
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
        addTrendingMovies: (state, action) => {
            state.showTrendingMovies = action.payload;
        },
        clearTrendingMovies: (state) => {
            state.showTrendingMovies = null;
        },
        addTvSeries: (state, action) => {
            state.showTvSeries = action.payload;
        },
        clearTvSeries: (state) => {
            state.showTvSeries = null;
        },
        addTvTrailers: (state, action) => {
            state.showTvTrailers = action.payload;
        },
        clearTvTrailers: (state) => {
            state.showTvTrailers = null;
        }



    }
});


export const { addMovies, addVideos, addPopMovies, addTopRated, addUpMovies, addId, addDetails, clearDetails, clearId, addIdTrailers, clearIdTrailers, addTrendingMovies, clearTrendingMovies, addTvSeries, clearTvSeries, addTvTrailers, clearTvTrailers } = moviesSlice.actions;
export default moviesSlice.reducer;