import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Registration from "./components/Registration/Registration";
import Login from "./components/Home/Login";
import League from "./components/Leagues/League";
import Player from "./components/PlayerProfiles/Player";
import Team from "./components/Teams/Team";
import About from "./components/About/About";
import Donate from "./components/Donate/Donate";
import Monetary from "./components/Donate/Monetary";
import Physical from "./components/Donate/Physical";
import Edit from "./components/PlayerProfiles/Edit";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/registration" component={Registration} />
    <Route path="/league" component={League} />
    <Route path="/player" component={Player} />
    <Route path="/edit" component={Edit} />
    <Route path="/team" component={Team} />
    <Route path="/about" component={About} />
    <Route path="/donate" component={Donate} />
    <Route path="/logout" component={Home} />
    <Route path="/monetary" component={Monetary} />
    <Route path="/physical" component={Physical} />
  </Switch>
);
