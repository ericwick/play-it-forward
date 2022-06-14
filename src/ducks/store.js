import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import registrationReducer from "./reducers/registration_reducer";
import getReducer from "./reducers/get_reducer";

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
