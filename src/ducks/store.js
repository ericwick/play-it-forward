import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import registrationReducer from "./registration_reducer";
import getReducer from "./get_reducer";

const reducer = {
    registrationReducer,
    getReducer,
};

const store = configureStore({
    reducer,
    middleware: [thunk],
    initialState: {},
});

export default store;
