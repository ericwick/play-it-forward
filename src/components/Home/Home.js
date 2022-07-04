import './Home.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchCharacters,
	charactersSelector
} from '../../redux/slices/characters';
import { fetchEpisodes, episodesSelector } from '../../redux/slices/episodes';
import {
	fetchLocations,
	locationsSelector
} from '../../redux/slices/locations';

export default function Home() {
	const dispatch = useDispatch();
	const { characters } = useSelector(charactersSelector);
	const { locations } = useSelector(locationsSelector);
	const { episodes } = useSelector(episodesSelector);

	useEffect(() => {
		dispatch(fetchCharacters());
		dispatch(fetchEpisodes());
		dispatch(fetchLocations());
	}, [dispatch]);

	return (
		<div className="website">
			<h1 className="website-title">PLAY IT FORWARD</h1>
		</div>
	);
}
