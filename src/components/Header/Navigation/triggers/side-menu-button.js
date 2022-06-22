import { MenuIcon } from '@heroicons/react/outline';
import '../styles/side-menu-button.scss';

export default function SidenavButton(props) {
	const isExpanded = props.open ? true : false;

	console.log(props.open);
	return (
		<button
			id="side-menu-icon"
			name="sidenav"
			className="header__sidenav--menu-icon"
			onClick={() => props.setOpen(!props.open)}
			alt="Side Menu Toggle"
			aria-controls={props.sidenavId}
			aria-expanded={isExpanded}
			aria-label={isExpanded ? 'Open side menu' : 'Close side menu'}>
			<MenuIcon />
		</button>
	);
}
