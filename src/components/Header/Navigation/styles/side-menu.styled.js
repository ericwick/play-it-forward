import styled from 'styled-components';

export const SideMenuStyled = styled.div`
	position: fixed;
	width: 25%;
	max-width: 17rem;
	height: 100vh;
	top: 50px;
	left: 0;
	margin: 0;
	padding: 0;
	background: #a2a3bb77;
	// box-shadow: 3px 0px 7px 0px gray;
	backdrop-filter: blur(17px);

	transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
	transition: transform 0.4s ease-in-out;
	// ::webkit-scrollbar {
	// 	width: 2px;
	// }
	// ::-webkit-scrollbar-track {
	// 	box-shadow: inset 0 0 6px transparent;
	// 	-webkit-box-shadow: inset 0 0 6px transparent;
	// }
	// ::-webkit-scrollbar-thumb {
	// 	background-color: #f8f7ff;
	// 	border-radius: 7px;
	// }
`;
