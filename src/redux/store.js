import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import characters from './slices/characters';
import episodes from './slices/episodes';
import locations from './slices/locations';

const store = configureStore({
	reducer: {
		characters,
		episodes,
		locations
	},
	middleware: [thunk],
	preloadedState: {}
});

export default store;
