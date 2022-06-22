import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useOnCLickOutside } from './hooks/side-menu-hook';
import SidenavButton from './triggers/side-menu-button';
import { SideMenuStyled } from './styles/side-menu.styled';
import './styles/side-menu.scss';

export default function SideMenu() {
	const [open, setOpen] = useState(false);
	const sidenav = useRef(null);
	const sidenavId = 'side-menu';
	const isHidden = open ? true : false;
	const tabIndex = isHidden ? 0 : -1;

	useOnCLickOutside(sidenav, () => setOpen(false));

	// useEffect(() => {
	// 	window.addEventListener('scroll', fireOnScroll, true);
	// }, []);

	// const fireOnScroll = () => {
	// 	var value = document.documentElement.scrollTop;

	// 	if (userNav === 'header' && value > 140) {
	// 		setUserNav('scrolled');
	// 	} else if (value <= 140) {
	// 		setUserNav('header');
	// 	}
	// };

	return (
		<nav
			ref={sidenav}
			id="sidenav"
			className="header__sidenav"
			name="sidenav">
			<SidenavButton
				open={open}
				setOpen={setOpen}
				sidenavId={sidenavId}
			/>
			<SideMenuStyled
				id={sidenavId}
				open={open}
				aria-hidden={!isHidden}>
				<ul className="header__sidenav--menu">
					<li>apples</li>
					<li>oranges</li>
				</ul>
			</SideMenuStyled>
		</nav>
	);
}

{
	/* <img
            alt="Play It Forward Logo"
            src={''}
            className="piflogo"
        /> */
}
// {/* <ul className="unorderedNavList">
//     <Link
//         to="/"
//         className="navlink">
//         <li id="navigationlinks">HOME</li>
//     </Link>
//     <Link
//         to="/about"
//         className="navlink">
//         <li id="navigationlinks">ABOUT</li>
//     </Link>
//     <Link
//         to="/donate"
//         className="navlink">
//         <li id="navigationlinks">DONATE</li>
//     </Link>
//     {/* <a href={process.env.REACT_APP_LOGIN} className="navlink"> */}
//     <li id="navigationlinks">LOGIN</li>
//     {/* </a> */}
//     <Link
//         to="/registration"
//         className="navlink">
//         <li id="navigationlinks">REGISTER</li>
//     </Link>
// </ul> */}
