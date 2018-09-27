import React, { Component } from "react";
import "./League.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateSportsInfo, updateLeague } from "../../ducks/get_reducer";

class League extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.updateSportsInfo();
    this.props.updateLeague();
  }

  render() {
    let { sportsInfo, leagues } = this.props;
    let arr = [];
    arr.push(sportsInfo);

    console.log(sportsInfo);

    console.log(leagues);

    leagues.sort(function(a, b) {
      return a.wins - b.wins;
    });

    leagues.reverse();

    let division = leagues.map((e, i) => {
      return (
        <div key={i}>
          <ol id="leaguerankings">
            <li>
              {e.team_name}
              <br />
              {e.wins}-{e.loses}-{e.ties}
            </li>
          </ol>
        </div>
      );
    });

    let league = arr.map((e, i) => {
      return (
        <div key={i}>
          <Link to="/player">
            <h6 id="backtoprofile">Back to Profile Page</h6>
          </Link>

          <Link to="/team">
            <h6 id="backtoteam">Back to Team Page</h6>
          </Link>
          <div>
            <h1>{e.league_name}</h1>
          </div>

          <div>
            Sport: {e.sport_type}
            <br />
            <div className="recordstandings">
              Standings
              {division}
              <ol className="donationstandings">
                <li>
                  {e.team_name}
                  ...
                  {e.donations}
                </li>
              </ol>
            </div>
            Age Range: {e.age_range}
            <br />
            Gender: {e.gender}
            <br />
            Location: {e.location}
          </div>
        </div>
      );
    });
    return (
      <div className="leaguepagediv">
        <div>{league}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.getReducer });

export default connect(
  mapStateToProps,
  {
    updateSportsInfo,
    updateLeague
  }
)(League);
