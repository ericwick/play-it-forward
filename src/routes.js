import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Registration from './pages/Authorization/Registration/Registration';
import Login from './pages/Authorization/Login/Login';
import League from './pages/League/League';
import Player from './pages/Profile/Profile';
import Team from './pages/Team/Team';
import About from './pages/About/About';
import Donate from './pages/Donation/Donate/Donate';
import Monetary from './pages/Donation/Donate/Monetary';
import Physical from './pages/Donation/Donate/Physical';

export default (
	<Routes>
		<Route
			exact
			path="/"
			element={<Home />}
		/>
		<Route
			path="/login"
			element={<Home />}
		/>
		<Route
			path="/registration"
			element={<Registration />}
		/>
		<Route
			path="/league"
			element={<League />}
		/>
		<Route
			path="/player"
			element={<Player />}
		/>
		<Route
			path="/team"
			element={<Team />}
		/>
		<Route
			path="/about"
			element={<About />}
		/>
		<Route
			path="/donate"
			element={<Donate />}
		/>
		<Route
			path="/logout"
			element={<Home />}
		/>
		<Route
			path="/monetary"
			element={<Monetary />}
		/>
		<Route
			path="/physical"
			element={<Physical />}
		/>
	</Routes>
);
