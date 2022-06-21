import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    hasError: false,
    characters: [],
};

// Slice to get characters from API
const charactersSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {
        loading: (state) => {
            state.isLoading = true;
        },
        success: (state, { payload }) => {
            state.characters = payload;
            state.isLoading = false;
            state.hasError = false;
        },
        failure: (state) => {
            state.isLoading = false;
            state.hasError = true;
        },
    },
});

// Actions
export const { loading, failure, success } = charactersSlice.actions;

// A selector
export const charactersSelector = (state) => state.characters;

// The reducer
export default charactersSlice.reducer;

// Asynchronous thunk action
export function fetchCharacters() {
    return async (dispatch) => {
        dispatch(loading());

        await axios
            .get("http://localhost:3001/characters")
            .then((response) => {
                dispatch(success(response.data));
            })
            .catch((err) => dispatch(failure()));
    };
}
