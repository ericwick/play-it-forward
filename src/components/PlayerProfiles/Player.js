import React, { Component } from "react";
import "./Player.css";
import Edit from "./Edit";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateSportsInfo } from "../../ducks/get_reducer";

class Player extends Component {
  constructor() {
    super();
    this.state = {
      editMode: false
    };
  }

  componentDidMount() {
    this.props.updateSportsInfo();
  }

  render() {
    let { sportsInfo } = this.props;

    let arr = [];
    arr.push(sportsInfo);

    let player = arr.map((e, i) => {
      return (
        <div key={i}>
          <h1 id="playerName">{e.player_name}</h1>
          {this.renderEditBox}
          <div className="teamLeague">
            <Link to="/team" className="link">
              <h3 className="team">TEAM: {e.team_name}</h3>
            </Link>
            <Link to="/league" className="link">
              <h3 className="league">LEAGUE: {e.league_name}</h3>
            </Link>
          </div>
          <p className="info">
            HOMETOWN: {e.hometown}
            <br />
            SPORT: {e.sport_type}
            <br />
            POSITION: {e.position}
            <br />
            AGE: {e.age}
          </p>
          <div>
            <Edit />
          </div>
        </div>
      );
    });

    return (
      <div>
        <div className="playerCard">{player}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.getReducer });

export default connect(
  mapStateToProps,
  { updateSportsInfo }
)(Player);
