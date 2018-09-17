import React, { Component } from "react";
// import axios from "axios";
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
        <div key={i} className="playerCard">
          <h1 id="playerName">{e.player_name}</h1>
          {this.renderEditBox}
          <div className="teamLeague">
            <Link to="/team">
              <h3 className="team">Team: {e.team_name}</h3>
            </Link>
            <Link to="/league">
              <h3 className="league">League: {e.league_name}</h3>
            </Link>
          </div>
          <p className="info">
            Hometown: {e.hometown}
            <br />
            Sport: {e.sport_type}
            <br />
            Position: {e.position}
            <br />
            Age: {e.age}
          </p>
          <div>
            <Edit />
          </div>
        </div>
      );
    });

    return (
      <div>
        <h2>PLAYER PROFILE</h2>
        <div>{player}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.getReducer });

export default connect(
  mapStateToProps,
  { updateSportsInfo }
)(Player);
