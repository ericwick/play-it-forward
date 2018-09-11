import React, { Component } from "react";
import Nav from "../NavBar/Nav";
import axios from "axios";

class AdultLeagues extends Component {
  constructor() {
    super();
    this.state = {
      adultleague: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios.get("/adultleagues").then(response => {
      this.setState({
        adultleague: response.data
      });
    });
  }

  render() {
    // console.log(this.state.adultleague);
    // const leagueInfo = this.state.adultleague.map((e,i) => {
    // return (
    // <div key={i}>
    //  {e.league_name}
    //  {e.sport_type}
    //  {e.location}
    //  {e.teams}
    //  {e.age_range}
    //  {e.gender}
    // </div >
    // );
    // })
    return (
      <div className="kidleague">
        <Nav />
        <h1>Adult Leagues</h1>
        <div>{/* <p>{allLeagues}</p> */}</div>
      </div>
    );
  }
}

export default AdultLeagues;
