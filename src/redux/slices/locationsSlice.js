import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    hasError: false,
    locations: [],
};

// Slice to get locations from API
const locationsSlice = createSlice({
    name: "locations",
    initialState,
    reducers: {
        loading: (state) => {
            state.isLoading = true;
        },
        success: (state, { payload }) => {
            state.locations = payload;
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
export const { loading, failure, success } = locationsSlice.actions;

// A selector
export const locationsSelector = (state) => state.locations;

// The reducer
export default locationsSlice.reducer;

// Asynchronous thunk action
export function fetchLocations() {
    return async (dispatch) => {
        dispatch(loading());

        await axios
            .get("http://localhost:3001/locations")
            .then((response) => {
                dispatch(success(response.data));
            })
            .catch((err) => dispatch(failure()));
    };
}
