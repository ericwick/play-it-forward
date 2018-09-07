import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import registration_reducer from "./registration_reducer";

const store = createStore(
  registration_reducer,
  applyMiddleware(promiseMiddleware())
);

export default store;
