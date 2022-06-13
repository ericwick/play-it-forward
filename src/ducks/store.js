import { createStore, applyMiddleware, combineReducers } from 'redux';
// import promiseMiddleware from 'redux-promise-middleware';
import registration_reducer from './registration_reducer';
import getReducer from './get_reducer';

const combinedReducers = combineReducers({
  registration_reducer,
  getReducer
});

const store = createStore(
  combinedReducers
  //   applyMiddleware(promiseMiddleware())
);

export default store;
