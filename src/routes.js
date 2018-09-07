import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import KidRegistration from "./components/KidLeague/KidRegistration";
import AdultRegistration from "./components/AdultLeague/AdultRegistration";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    {/* <Route path="/about" /> */}
    {/* <Route path="/donate" /> */}
    {/* <Route path="/login" /> */}
    <Route path="/kidregister" component={KidRegistration} />
    <Route path="/adultregister" component={AdultRegistration} />
    {/* <Route path="/adultleagues" /> */}
    {/* <Route path="/kidleagues" /> */}
    {/* <Route path="/adultleagues/teams" /> */}
    {/* <Route path="/adultleagues/teams/team" /> */}
    {/* <Route path="/adultleagues/teams/team/player" /> */}
    {/* <Route path="/kidleagues/teams" /> */}
    {/* <Route path="/kidleagues/teams/team" /> */}
    {/* <Route path="/kidleagues/teams/team/player" /> */}
  </Switch>
);
