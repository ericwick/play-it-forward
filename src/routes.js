import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import KidRegistration from "./components/Kids/KidRegistration";
import AdultRegistration from "./components/Adults/AdultRegistration";
import KidLeagues from "./components/Kids/KidLeagues";
import AdultLeagues from "./components/Adults/AdultLeagues";
import Login from "./components/Home/Login";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    {/* <Route path="/about" /> */}
    {/* <Route path="/donate" /> */}
    <Route path="/login" component={Login} />
    <Route path="/kidregister" component={KidRegistration} />
    <Route path="/adultregister" component={AdultRegistration} />
    <Route path="/kidleagues" component={KidLeagues} />
    <Route path="/adultleagues" component={AdultLeagues} />
    {/* <Route path="/adultleagues/teams" /> */}
    {/* <Route path="/adultleagues/teams/team" /> */}
    {/* <Route path="/adultleagues/teams/team/player" /> */}
    {/* <Route path="/kidleagues/teams" /> */}
    {/* <Route path="/kidleagues/teams/team" /> */}
    {/* <Route path="/kidleagues/teams/team/player" /> */}
  </Switch>
);
