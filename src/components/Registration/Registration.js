import React, { Component } from "react";
import "./Registration.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  updatePlayerName,
  updateTeamName,
  updateSports,
  updatePosition,
  updateGender,
  updateAge,
  updateHometown,
  updateTeams,
  updateEmail
} from "../../ducks/registration_reducer";
import Social from "../Home/Social";

class Registration extends Component {
  constructor() {
    super();
    this.state = {};
    this.submitRegistration = this.submitRegistration.bind(this);
  }

  componentDidMount() {
    this.props.updateTeams();
  }

  submitRegistration() {
    console.log(this.props);
    let {
      player_name,
      team_name,
      sports,
      position,
      gender,
      age,
      hometown,
      email
    } = this.props;
    axios
      .post("/registration", {
        player_name,
        team_name,
        sports,
        position,
        gender,
        age,
        hometown,
        email
      })
      .then(response => {
        console.log(response);
        this.setState({
          player_name: response.data,
          team_name: response.data,
          sports: response.data,
          position: response.data,
          gender: response.data,
          age: response.data,
          hometown: response.data,
          email: response.data
        });
      })
      .catch(err => console.log(err));
    axios
      .post("/registration/email", { email })
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.props.teams);
    const {
      updatePlayerName,
      updateSports,
      updatePosition,
      updateGender,
      updateAge,
      updateHometown,
      updateEmail,
      updateTeamName
    } = this.props;

    let teamOptions = this.props.teams.map((e, i, arr) => {
      if (e.sport === null) {
        e.sport = "football";
      }
      if (this.props.age >= 18 && e.age_range === "18+") {
        return (
          <div key={i} className="teamoptions">
            <h6>Team Name:</h6>
            <br />
            <p className="teamnameregister">{e.team_name}</p>
            <h6>Sport:</h6>
            <p className="teamsportregister">{e.sport_type}</p>
          </div>
        );
      } else if (
        this.props.age < 18 &&
        this.props.age >= 14 &&
        e.age_range === "14-17"
      ) {
        return (
          <div key={i}>
            <h6>Team Name:</h6>
            <br />
            <p className="teamnameregister">{e.team_name}</p>
            <h6>Sport:</h6>
            <p className="teamsportregister">{e.sport_type}</p>
          </div>
        );
      } else if (
        this.props.age < 14 &&
        this.props.age >= 11 &&
        e.age_range === "13-14"
      ) {
        return (
          <div key={i}>
            <h6>Team Name:</h6>
            <br />
            {e.team_name}
            <h6>Sport:</h6>
            {e.sport_type}
          </div>
        );
      } else if (
        this.props.age < 11 &&
        this.props.age >= 9 &&
        e.age_range === "9-10"
      ) {
        return (
          <div key={i}>
            <h6>Team Name:</h6>
            <br />
            {e.team_name}
            <h6>Sport:</h6>
            {e.sport_type}
          </div>
        );
      } else if (
        this.props.age < 9 &&
        this.props.age >= 7 &&
        e.age_range === "7-8"
      ) {
        return (
          <div key={i}>
            <h6>Team Name:</h6>
            <br />
            {e.team_name}
            <h6>Sport:</h6>
            {e.sport_type}
          </div>
        );
      } else if (
        this.props.age < 7 &&
        this.props.age >= 5 &&
        e.age_range === "5-6"
      ) {
        return (
          <div key={i}>
            <h6>Team Name:</h6>
            <br />
            {e.team_name}
            <h6>Sport:</h6>
            {e.sport_type}
          </div>
        );
      }
    });

    return (
      <div className="registrationpage">
        <Social />
        <div>
          <h2 id="registrationtitle">REGISTRATION</h2>
          <p className="formitem">FULL NAME</p>
          <input
            onChange={e => updatePlayerName(e.target.value)}
            required
            className="registrationsignuplink"
          />
          <br />
          <p className="formitem">EMAIL</p>
          <input
            onChange={e => updateEmail(e.target.value)}
            required
            className="registrationsignuplink"
          />
          <br />
          <p className="formitem">HOMETOWN</p>
          <input
            onChange={e => updateHometown(e.target.value)}
            required
            className="registrationsignuplink"
          />
          <br />
          <p className="formitem">POSITION</p>
          <input
            onChange={e => updatePosition(e.target.value)}
            className="registrationsignuplink"
          />
          <br />
          <p className="formitem">GENDER</p>
          <input
            onChange={e => updateGender(e.target.value)}
            required
            className="registrationsignuplink"
          />
          <br />
          <p className="formitem">AGE</p>
          <input
            onChange={e => updateAge(e.target.value)}
            required
            className="registrationsignuplink"
          />
          <br />
          <div className="availableteamoptions">{teamOptions}</div>
          <p className="formitem">TEAM NAME</p>
          <input
            onChange={e => updateTeamName(e.target.value)}
            required
            placeholder="Select team from list above"
            className="registrationsignuplink"
          />
          <p className="formitem">SPORT</p>
          <input
            onChange={e => updateSports(e.target.value)}
            required
            placeholder="Input Sport with Chosen Team name"
            className="registrationsignuplink"
          />
          <br />
          <br />
          <Link to="/player">
            <button
              onClick={() => this.submitRegistration()}
              className="registrationlink"
            >
              Submit
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.registration_reducer });

export default connect(
  mapStateToProps,
  {
    updatePlayerName,
    updateTeamName,
    updateSports,
    updatePosition,
    updateGender,
    updateAge,
    updateHometown,
    updateTeams,
    updateEmail
  }
)(Registration);
