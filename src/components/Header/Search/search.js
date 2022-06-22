import { SearchIcon } from '@heroicons/react/outline';
import './search.scss';

export default function Search() {
	return (
		<div className="search">
			<input className="search__input" />
			<button className="search__icon">
				<SearchIcon />
			</button>
		</div>
	);
}
