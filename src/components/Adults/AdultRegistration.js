import React, { Component } from "react";
import "./AdultRegistration.css";
import axios from "axios";
import Nav from "../NavBar/Nav";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateAdultUsername,
  updateAdultPassword,
  updatePlayerName,
  updateSports,
  updateTeamName,
  updateLocation,
  updateAge,
  updateGender,
  updateHometown,
  updateLeagueName
} from "../../ducks/registration_reducer";

class AdultRegistration extends Component {
  constructor() {
    super();
    this.state = {};
    this.submitRegistration = this.submitRegistration.bind(this);
  }

  submitRegistration() {
    let {
      adultusername,
      adultpassword,
      player_name,
      sports,
      team_name,
      location,
      league_name,
      gender,
      hometown,
      age
    } = this.props;
    axios
      .post("/adultregistration", {
        adultusername,
        adultpassword,
        player_name,
        sports,
        team_name,
        location,
        league_name,
        gender,
        hometown,
        age
      })
      .then(response => {
        this.setState({
          adultusername: response.data,
          adultpassword: response.data,
          player_name: response.data,
          sports: response.data,
          team_name: response.data,
          location: response.data,
          league_name: response.data,
          gender: response.data,
          age: response.data,
          hometown: response.data
        });
      });
  }

  render() {
    const {
      updateAdultUsername,
      updateAdultPassword,
      updatePlayerName,
      updateSports,
      updateTeamName,
      updateLocation,
      updateAge,
      updateGender,
      updateHometown,
      updateLeagueName
    } = this.props;
    return (
      <div>
        <div>
          <Nav />
        </div>

        <div>
          <h2>ADULT REGISTRATION</h2>
          <p>USERNAME</p>
          <input onChange={e => updateAdultUsername(e.target.value)} />
          <p>PASSWORD</p>
          <input onChange={e => updateAdultPassword(e.target.value)} />
          <p>FULL NAME</p>
          <input onChange={e => updatePlayerName(e.target.value)} />
          <p>SPORTS</p>
          <input onChange={e => updateSports(e.target.value)} />
          <p>TEAM NAME</p>
          <input onChange={e => updateTeamName(e.target.value)} />
          <p>LEAGUE NAME</p>
          <input onChange={e => updateLeagueName(e.target.value)} />
          <p>LOCATION</p>
          <input onChange={e => updateLocation(e.target.value)} />
          <p>GENDER</p>
          <input onChange={e => updateGender(e.target.value)} />
          <p>AGE</p>
          <input onChange={e => updateAge(e.target.value)} />
          <p>HOMETOWN</p>
          <input onChange={e => updateHometown(e.target.value)} />
          <Link to="/adultleagues">
            <button onClick={() => this.submitRegistration()}>Submit</button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    adultusername: state.adultusername,
    adultpassword: state.adultpassword,
    player_name: state.player_name,
    sports: state.sports,
    team_name: state.team_name,
    location: state.location,
    gender: state.gender,
    age: state.age,
    hometown: state.hometown
  };
}

export default connect(
  mapStateToProps,
  {
    updateAdultUsername,
    updateAdultPassword,
    updatePlayerName,
    updateSports,
    updateTeamName,
    updateLocation,
    updateAge,
    updateGender,
    updateHometown,
    updateLeagueName
  }
)(AdultRegistration);
