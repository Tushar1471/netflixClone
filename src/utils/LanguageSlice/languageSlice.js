import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "Language",
    initialState: {
        languages: null,
        ShowResIdMovies: null,
        allLanguages: null,
    },
    reducers: {
        addIdMovies: (state, action) => {
            state.ShowResIdMovies = action.payload;
        },
        clearIdMovies: (state) => {
            state.ShowResIdMovies = null;
        },

    }
})

export const { addIdMovies, clearIdMovies } = languageSlice.actions;
export default languageSlice.reducer;