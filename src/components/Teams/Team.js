import React, { Component } from "react";
import Chat from "../Teams/Chat";
import "./Team.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateSportsInfo, updateTeam } from "../../ducks/get_reducer";

class Team extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.updateSportsInfo();
    this.props.updateTeam();
  }

  render() {
    let { sportsInfo, team } = this.props;
    let arr = [];
    arr.push(sportsInfo);
    console.log(sportsInfo);
    console.log(team);

    let roster = team.map((e, i) => {
      return (
        <div key={i} className="playerCard">
          <div className="playercontent">
            <h5 className="playerName">{e.player_name}</h5>
            <h6 className="position">{e.position}</h6>
            <p className="playerInfo">
              {e.hometown}
              <br />
              AGE: {e.age}
              <br />
            </p>
          </div>
        </div>
      );
    });

    let squad = arr.map((e, i) => {
      return (
        <div key={i} className="teampage">
          <h1 id="teamtitle">{e.team_name}</h1>
          <h2 id="donations">
            {e.team_name}' Total Donations: ${e.donations}
          </h2>
          <div className="rightpage">{roster}</div>
          <div className="leftpage">
            <Link to="/league" className="link">
              <p>League: {e.league_name}</p>
            </Link>
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
        <div>{squad}</div>
        <div>
          <Chat teamName={sportsInfo.team_name} />
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
