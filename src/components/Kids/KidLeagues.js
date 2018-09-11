import React, { Component } from "react";
import Nav from "../NavBar/Nav";
import "./KidLeagues.css";
import axios from "axios";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";

class KidLeagues extends Component {
  constructor() {
    super();
    this.state = {
      leagues: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios.get("/api/kidsleagues").then(response => {
      this.setState({
        leagues: response.data
      });
    });
  }

  render() {
    // let allLeagues = this.state.leagues.map((league, i) => {
    //   if (league.sport_type === "football") {
    //     return (
    //       <div>
    //         <ul>
    //           <h5>{league.sport_type}</h5>
    //           <li>League: {league.league_name}</li>
    //           <li>Location: {league.location}</li>
    //           <li>Teams: {league.teams}</li>
    //         </ul>
    //       </div>
    //     );
    //   } else if (league.sport_type === "basketball") {
    //     return (
    //       <div>
    //         <ul>
    //           <h5>{league.sport_type}</h5>
    //           <li>League: {league.league_name}</li>
    //           <li>Location: {league.location}</li>
    //           <li>Teams: {league.teams}</li>
    //         </ul>
    //       </div>
    //     );
    //   } else if (league.sport_type === "soccer") {
    //     return (
    //       <div>
    //         <ul>
    //           <h5>{league.sport_type}</h5>
    //           <li>League: {league.league_name}</li>
    //           <li>Location: {league.location}</li>
    //           <li>Teams: {league.teams}</li>
    //         </ul>
    //       </div>
    //     );
    //   } else if (league.sport_type === "tennis") {
    //     return (
    //       <div>
    //         <ul>
    //           <h5>{league.sport_type}</h5>
    //           <li>League: {league.league_name}</li>
    //           <li>Location: {league.location}</li>
    //           <li>Teams: {league.teams}</li>
    //         </ul>
    //       </div>
    //     );
    //   } else if (league.sport_type === "kickball") {
    //     return (
    //       <div>
    //         <ul>
    //           <h5>{league.sport_type}</h5>
    //           <li>League: {league.league_name}</li>
    //           <li>Location: {league.location}</li>
    //           <li>Teams: {league.teams}</li>
    //         </ul>
    //       </div>
    //     );
    //   }
    // });

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

// function mapStateToProps(state) {
//   return {
//     league_name: state.league_name,
//     sport_type: state.sport_type,
//     location: state.location,
//     teams: state.teams
//   };
// }

// export default connect(
//   mapStateToProps,
//   { updateLeagueName, updateSportType, updateLocation, updateTeams }
// )(KidLeagues);
