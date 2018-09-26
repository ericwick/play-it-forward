import React, { Component } from "react";
import Chat from "../Teams/Chat";
import "./Team.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateSportsInfo, updateTeam } from "../../ducks/get_reducer";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";

class Team extends Component {
  constructor() {
    super();
    this.state = {
      togglePractice: false,
      teamEmails: "",
      emails: ""
    };
    this.schedulePractice = this.schedulePractice.bind(this);
    this.showPractice = this.showPractice.bind(this);
    this.getEmails = this.getEmails.bind(this);
  }

  componentDidMount() {
    this.props.updateSportsInfo();
    this.props.updateTeam();
  }

  schedulePractice() {
    let { teamEmails } = this.state;
    axios
      .post("/team/practice", { teamEmails })
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
  }

  showPractice() {
    let arr = this.props.team.map((e, i) => {
      return e.email;
    });
    this.setState({ teamEmails: arr });
    this.setState({
      togglePractice: !this.state.togglePractice
    });
  }

  getEmails(e) {
    this.setState({
      emails: e.target.value
    });
    console.log(this.state.emails);
  }

  render() {
    let { sportsInfo, team } = this.props;
    let arr = [];
    arr.push(sportsInfo);
    console.log(this.state.teamEmails);

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
        <div>
          <div key={i} className="teampage">
            <h1 id="teamtitle">{e.team_name}</h1>
          </div>
          <div className="teampageinfo">
            <div>
              <h2 id="donations">
                {e.team_name}' Total Donations: ${e.donations}
              </h2>
            </div>
            <Link to="/league" className="teampagelink">
              <p>League: {e.league_name}</p>
            </Link>
            <p>Sport: {e.sport_type}</p>
            <p>Record: {e.record}</p>
            <p>Age Range: {e.age_range}</p>
            <p>Gender: {e.gender_type}</p>
            <p>Location: {e.location}</p>
            <div className="rostertitle">ROSTER</div>
            <div className="rosterdisplay">{roster}</div>
          </div>
        </div>
      );
    });

    var teamEmail = "";

    this.props.team.map((e, i) => {
      if (i === 0) {
        teamEmail = e.email;
      } else {
        teamEmail += ", " + e.email;
      }
    });

    return (
      <div id="teampagediv">
        <Carousel>
          <div>
            <img
              alt=""
              src="https://www.raiders.com.au/siteassets/2017/10/generic.jpg?preset=hero-article-fill"
            />
          </div>
        </Carousel>
        <div className="squaddiv">{squad}</div>
        <div className="chaticon">
          <Chat teamName={sportsInfo.team_name} />
        </div>
        {this.state.togglePractice ? (
          <div className="schedulepracticediv">
            <input placeholder="Date and Time" />
            <textarea
              rows="10"
              columns="5"
              defaultValue={teamEmail}
              onChange={e => this.getEmails(e.target.value)}
              // do i really need the onChange... ?
            />
            <button onClick={() => this.schedulePractice()}>
              Schedule Practice For {sportsInfo.team_name}
            </button>
          </div>
        ) : (
          <div
            onClick={() => this.showPractice()}
            className="schedulepracticediv"
          >
            Schedule Practice
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.getReducer });

export default connect(
  mapStateToProps,
  { updateSportsInfo, updateTeam }
)(Team);
