import React, { Component } from "react";
import axios from "axios";
import Nav from "../NavBar/Nav";

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
            <h2>{e.player_name}</h2>
            <h5>TEAM: {e.team_name}</h5>
            <h5>LEAGUE: {e.league_name}</h5>
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
        <h4>PLAYER PROFILE</h4>
        <div>{playerInfo}</div>
      </div>
    );
  }
}

export default Player;
