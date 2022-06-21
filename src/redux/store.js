import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import charactersSlice from "./slices/charactersSlice";
import episodesSlice from "./slices/episodesSlice";
import locationsSlice from "./slices/locationsSlice";

const store = configureStore({
    reducer: {
        characters: charactersSlice,
        episodes: episodesSlice,
        locations: locationsSlice,
    },
    middleware: [thunk],
    preloadedState: {},
});

export default store;
