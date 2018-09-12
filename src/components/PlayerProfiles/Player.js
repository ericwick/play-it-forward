import React, { Component } from "react";
import axios from "axios";
import Nav from "../NavBar/Nav";
import { Link } from "react-router-dom";

class Player extends Component {
  constructor() {
    super();
    this.state = {
      player: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios.get("/player").then(res => {
      console.log(res);
      this.setState({
        player: res.data
      });
    });
  }

  render() {
    let arr = [];

    arr.push(this.state.player);
    console.log(arr);
    let playerInfo = arr.map((e, i) => {
      return (
        <div key={i}>
          <div>
            <h1>{e.player_name}</h1>
            <Link to="/team">
              <h3>TEAM: {e.team_name}</h3>
            </Link>
            <Link to="/league">
              <h4>LEAGUE: {e.league_name}</h4>
            </Link>
          </div>
          <div>
            <p>
              <p>Sport: {e.sport_type}</p>
              <p>Position: {e.position}</p>
              <p>Age: {e.age}</p>
              <p>Hometown: {e.hometown}</p>
            </p>
          </div>
        </div>
      );
    });

    return (
      <div>
        <Nav />
        <h2>PLAYER PROFILE</h2>
        <div>{playerInfo}</div>
      </div>
    );
  }
}

export default Player;
