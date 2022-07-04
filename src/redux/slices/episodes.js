import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	isLoading: false,
	hasError: false,
	episodes: []
};

// Slice to get episodes from API
const episodes = createSlice({
	name: 'episodes',
	initialState,
	reducers: {
		loading: state => {
			state.isLoading = true;
		},
		success: (state, { payload }) => {
			state.episodes = payload;
			state.isLoading = false;
			state.hasError = false;
		},
		failure: state => {
			state.isLoading = false;
			state.hasError = true;
		}
	}
});

// Actions
export const { loading, failure, success } = episodes.actions;

// A selector
export const episodesSelector = state => state.episodes;

// The reducer
export default episodes.reducer;

// Asynchronous thunk action
export function fetchEpisodes() {
	return async dispatch => {
		dispatch(loading());

		await axios
			.get('http://localhost:3001/episodes')
			.then(response => {
				dispatch(success(response.data));
			})
			.catch(err => dispatch(failure()));
	};
}
