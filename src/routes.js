import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Registration from "./components/Registration/Registration";
import Login from "./components/Home/Login";
import League from "./components/Leagues/League";
import Player from "./components/PlayerProfiles/Player";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/registration" component={Registration} />
    <Route path="/leagues" component={League} />
    <Route path="/player" component={Player} />
  </Switch>
);
