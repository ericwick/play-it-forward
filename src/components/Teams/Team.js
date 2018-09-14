import React, { Component } from "react";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateSportsInfo, updateTeam } from "../../ducks/get_reducer";

class Team extends Component {
  constructor() {
    super();
    this.state = {
      teamInfo: []
    };
  }

  componentDidMount() {
    this.props.updateSportsInfo();
    this.props.updateTeam();
  }

  render() {
    let { sportsInfo, team } = this.props;

    let arr = [];
    arr.push(sportsInfo);

    console.log(team);

    let roster = team.map((e, i) => {
      return (
        <div key={i}>
          <div style={{ border: "1px, black, solid" }}>
            <h5>{e.player_name}</h5>
            <h6>{e.position}</h6>
            <p>
              {e.hometown}
              <br />
              {e.team_name}
              <br />
              {e.age}
              <br />
              {e.league_name}
              <br />
              {e.sport}
            </p>
          </div>
        </div>
      );
    });

    let squad = arr.map((e, i) => {
      return (
        <div key={i}>
          <div>
            <h1>{e.team_name}</h1>
            <Link to="/league">
              <h2>League: {e.league_name}</h2>
            </Link>
            <Link to="/player">
              <h3>{e.player_name}</h3>
            </Link>
          </div>
          <div>Roster: {roster}</div>
          <div>
            <p>Sport: {e.sport_type}</p>
            <p>Record: {e.record}</p>
            <p>Age Range: {e.age_range}</p>
            <p>Gender: {e.gender_type}</p>
            <p>Location: {e.location}</p>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div>
          <Nav />
        </div>
        <h3>TEAM</h3>
        <div>{squad}</div>
        {/* <div>{roster}</div> */}
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.getReducer });

export default connect(
  mapStateToProps,
  { updateSportsInfo, updateTeam }
)(Team);
