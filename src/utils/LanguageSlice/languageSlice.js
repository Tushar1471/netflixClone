import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "Language",
    initialState: {
        languages: null,
    },
    reducers: {
        addLanguage: (state, action) => {
            state.languages = action.payload;
        }
    }
})

export const { addLanguage } = languageSlice.actions;
export default languageSlice.reducer;