import React, { Component } from "react";
import axios from "axios";
import Nav from "../NavBar/Nav";
import { Link } from "react-router-dom";

class Team extends Component {
  constructor() {
    super();
    this.state = {
      teamInfo: []
    };
  }

  componentDidMount() {
    axios.get("/team").then(response => {
      console.log(response);
      this.setState({
        teamInfo: response.data[0]
      });
    });
  }

  render() {
    console.log(this.state.teamInfo);
    let arr = [];
    arr.push(this.state.teamInfo);

    let squad = arr.map((e, i) => {
      return (
        <div key={i}>
          <div>
            <h1>{e.team_name}</h1>
            <Link to="/player">
              <h3>{e.player_name}</h3>
            </Link>
          </div>
          <div>
            <p>
              <p>Sport: {e.sport_type}</p>
              <p>Record: {e.record}</p>
              <p>Age Range: {e.age_range}</p>
              <p>Gender: {e.gender_type}</p>
              <p>Location: {e.location}</p>
            </p>
          </div>
        </div>
      );
    });

    return (
      <div>
        <Nav />
        <h3>TEAM</h3>
        <div>{squad}</div>
      </div>
    );
  }
}

export default Team;
