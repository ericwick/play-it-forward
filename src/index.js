import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import store from "./ducks/store";
import App from "./App";
import "./index.css";

const history = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <BrowserRouter location={history.location} navigator={history}>
            <App />
        </BrowserRouter>
    </Provider>
);
