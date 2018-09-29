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
    let standingsarr = [];
    let donationsarr = [];
    arr.push(sportsInfo);
    standingsarr.push(leagues);
    donationsarr.push(leagues);

    console.log(standingsarr[0]);
    let division = standingsarr[0].map((e, i) => {
      standingsarr[0].sort(function(a, b) {
        return a.wins - b.wins;
      });
      return (
        <div key={i} className="divisionrankingsdiv">
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

    console.log(donationsarr[0]);
    let donations = donationsarr[0].map((e, i) => {
      donationsarr[0].sort(function(a, b) {
        return a.donations - b.donations;
      });
      return (
        <div kay={i} className="donationstandingsdiv">
          <ol>
            <li>
              {e.team_name}
              <br />
              {e.donations}
            </li>
          </ol>
        </div>
      );
    });

    let league = arr.map((e, i) => {
      return (
        <div key={i} className="leaguemapdiv">
          <Link to="/player">
            <h6 id="backtoprofile">Back to Profile Page</h6>
          </Link>

          <Link to="/team">
            <h6 id="backtoteam">Back to Team Page</h6>
          </Link>
          <div>
            <h1 id="leaguetitle">{e.league_name}</h1>
          </div>

          <div>
            <div className="recordstandings">
              Standings
              {division}
            </div>
            <div className="donationstandings">
              Team Donations Standings
              {donations}
            </div>
            <div className="leagueinfodiv">
              Sport: {e.sport_type}
              <br />
              Age Range: {e.age_range}
              <br />
              Gender: {e.gender}
              <br />
              Location: {e.location}
            </div>
          </div>
        </div>
      );
    });
    return <div className="leaguepagediv">{league}</div>;
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
