import React, { Component } from "react";
import Nav from "../NavBar/Nav";
import "./KidLeagues.css";
import axios from "axios";

class KidLeagues extends Component {
  constructor() {
    super();
    this.state = {
      kidsleague: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios.get("/kidsleagues").then(response => {
      this.setState({
        kidsleague: response.data
      });
    });
  }

  render() {
    // console.log(this.state.kidsleague);
    // const leagueInfo = this.state.kidsleague.map((e,i) => {
    // return (
    // <div key={i}>
    //  {e.league_name}
    //  {e.sport_type}
    //  {e.location}
    //  {teams}
    //  {e.age_range}
    //  {e.gender}
    // </div >
    // );
    // })

    return (
      <div className="kidleague">
        <Nav />
        <h1>Kid Leagues</h1>
        <div>{/* <p>{allLeagues}</p> */}</div>
      </div>
    );
  }
}

export default KidLeagues;
