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

    let division = standingsarr[0].map((e, i) => {
      let sortedarr = standingsarr[0].sort(function(a, b) {
        return a.wins - b.wins;
      });
      for (var i = 0; i < sortedarr.length - 1; i++) {
        for (var j = 0; j < sortedarr.length - 1; j++) {
          if (sortedarr[i].wins < sortedarr[j + 1].wins) {
            return (
              <div key={i} className="divisionrankingsdiv">
                {e.team_name}
                <br />
                {e.wins}-{e.loses}-{e.ties}
              </div>
            );
          }
        }
      }
    });
    console.log(division);

    let donations = donationsarr[0].map((e, i) => {
      let sortedarr = donationsarr[0].sort(function(a, b) {
        return a.donations - b.donations;
      });
      console.log(sortedarr);
      for (var i = 0; i < sortedarr.length - 1; i++) {
        for (var j = 0; j < sortedarr.length - 1; j++) {
          if (sortedarr[i].donations < sortedarr[j + 1].donations) {
            return (
              <div kay={i} className="donationstandingsdiv">
                {e.team_name}
                <br />
                {e.donations}
              </div>
            );
          }
        }
      }
    });

    let league = arr.map((e, i) => {
      return (
        <div key={i} className="leaguemapdiv">
          {/* <Link to="/player">
            <h6 id="backtoprofile">Back to Profile Page</h6>
          </Link>

          <Link to="/team">
            <h6 id="backtoteam">Back to Team Page</h6>
          </Link> */}
          <img
            alt=""
            src="http://rheacountyfootball.com/wp-content/uploads/2017/06/black-white-stadium-as-Smart-Object-1.jpg"
            className="leaguepagepic"
          />
          <div>
            <h1 id="leaguetitle">{e.league_name}</h1>
          </div>

          <div className="recordstandings">
            <p className="recordstandingstitle">Standings</p>
            <div className="reverseorder">
              <ol>
                <li>{division}</li>
              </ol>
            </div>
          </div>
          <div className="donationstandings">
            <p className="donationstandingstitle">Team Donations Standings</p>
            <div className="reverseorder">
              <ol>
                <li>{donations}</li>
              </ol>
            </div>
          </div>
          <div className="leagueinfodiv">
            <u>Sport:</u> {e.sport_type}
            <br />
            <u>Age Range:</u> {e.age_range}
            <br />
            <u>Gender:</u> {e.gender}
            <br />
            <u>Location:</u> {e.location}
          </div>
        </div>
      );
    });
    return (
      <div className="leaguepagediv">
        {league}
        <div>
          <div className="newsdiv">
            <h3 className="leaguenews">{sportsInfo.league_name} NEWS</h3>
          </div>
          <p className="leaguenewsdiv">
            Your bones don't break, mine do. That's clear. Your cells react to
            bacteria and viruses differently than mine. You don't get sick, I
            do. That's also clear. But for some reason, you and I react the
            exact same way to water. We swallow it too fast, we choke. We get
            some in our lungs, we drown. However unreal it may seem, we are
            connected, you and I. We're on the same curve, just on opposite
            ends.
          </p>

          <p className="leaguenewsdiv">
            Look, just because I don't be givin' no man a foot massage don't
            make it right for Marsellus to throw Antwone into a glass
            motherfuckin' house, fuckin' up the way the nigger talks.
            Motherfucker do that shit to me, he better paralyze my ass, 'cause
            I'll kill the motherfucker, know what I'm sayin'?
          </p>

          <p className="leaguenewsdiv">
            Your bones don't break, mine do. That's clear. Your cells react to
            bacteria and viruses differently than mine. You don't get sick, I
            do. That's also clear. But for some reason, you and I react the
            exact same way to water. We swallow it too fast, we choke. We get
            some in our lungs, we drown. However unreal it may seem, we are
            connected, you and I. We're on the same curve, just on opposite
            ends.
          </p>
        </div>
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
