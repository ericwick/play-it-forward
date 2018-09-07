import React, { Component } from "react";
import "./AdultRegistration.css";
import axios from "axios";
import { connect } from "react-redux";
import {
  updateAdultUsername,
  updateAdultPassword,
  updatePlayerName,
  updateSports,
  updateTeamName,
  updateLocation
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
      location
    } = this.props;
    axios
      .post("/adultregistration", {
        adultusername,
        adultpassword,
        player_name,
        sports,
        team_name,
        location
      })
      .then(response => {
        this.setState({
          adultusername: response.data,
          adultpassword: response.data,
          player_name: response.data,
          sports: response.data,
          team_name: response.data,
          location: response.data
        });
      });
  }

  render() {
    console.log(this.props);
    const {
      updateAdultUsername,
      updateAdultPassword,
      updatePlayerName,
      updateSports,
      updateTeamName,
      updateLocation
    } = this.props;
    return (
      <div>
        <h2>ADULT REGISTRATION</h2>
        <input
          onChange={e => updateAdultUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          onChange={e => updateAdultPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          onChange={e => updatePlayerName(e.target.value)}
          placeholder="Name"
        />
        <input
          onChange={e => updateSports(e.target.value)}
          placeholder="Sport"
        />
        <input
          onChange={e => updateTeamName(e.target.value)}
          placeholder="Team Name"
        />
        <input
          onChange={e => updateLocation(e.target.value)}
          placeholder="Location"
        />
        <button onClick={() => this.submitRegistration()}>Submit</button>
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
    location: state.location
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
    updateLocation
  }
)(AdultRegistration);
