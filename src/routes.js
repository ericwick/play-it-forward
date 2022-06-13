import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Registration from './components/Registration/Registration';
import Login from './components/Home/Login';
import League from './components/Leagues/League';
import Player from './components/PlayerProfiles/Player';
import Team from './components/Teams/Team';
import About from './components/About/About';
import Donate from './components/Donate/Donate';
import Monetary from './components/Donate/Monetary';
import Physical from './components/Donate/Physical';
import Edit from './components/PlayerProfiles/Edit';

export default (
  <Routes>
    <Route exact path='/' element={<Home />} />
    <Route path='/login' element={<Home />} />
    <Route path='/registration' element={<Registration />} />
    <Route path='/league' element={<League />} />
    <Route path='/player' element={<Player />} />
    <Route path='/edit' element={<Edit />} />
    <Route path='/team' element={<Team />} />
    <Route path='/about' element={<About />} />
    <Route path='/donate' element={<Donate />} />
    <Route path='/logout' element={<Home />} />
    <Route path='/monetary' element={<Monetary />} />
    <Route path='/physical' element={<Physical />} />
  </Routes>
);
