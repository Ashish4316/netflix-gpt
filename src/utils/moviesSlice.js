import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingmovies : null,
        key : null,
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingmovies = action.payload;
        },
        addVideoTailer : (state, action) => {
            state.key = action.payload;
        }
    }
})

export const { addNowPlayingMovies,addVideoTailer } = moviesSlice.actions;

export default moviesSlice.reducer;