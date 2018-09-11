import React, { Component } from "react";
import "./AdultRegistration.css";
import axios from "axios";
import Nav from "../NavBar/Nav";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  // updateAdultUsername,
  // updateAdultPassword,
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
    console.log(this.props);
    let {
      // adultusername,
      // adultpassword,
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
      .post("/api/adultregistration", {
        // adultusername,
        // adultpassword,
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
        console.log(response);
        this.setState({
          // adultusername: response.data,
          // adultpassword: response.data,
          player_name: response.data,
          sports: response.data,
          team_name: response.data,
          location: response.data,
          league_name: response.data,
          gender: response.data,
          age: response.data,
          hometown: response.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.props);
    const {
      // updateAdultUsername,
      // updateAdultPassword,
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
          {/* <p>USERNAME</p>
          <input onChange={e => updateAdultUsername(e.target.value)} />
          <p>PASSWORD</p>
          <input onChange={e => updateAdultPassword(e.target.value)} /> */}
          <p>FULL NAME</p>
          <input onChange={e => updatePlayerName(e.target.value)} />
          <p>SPORTS</p>
          <input onChange={e => updateSports(e.target.value)} />
          <p>TEAM NAME</p>
          <input onChange={e => updateTeamName(e.target.value)} />
          <p>LEAGUE NAME</p>
          <select onChange={e => updateLeagueName(e.target.value)}>
            <option value="Premier">Premier</option>
            <option value="Big 12">Big 12</option>
            <option value="Kicking And Screaming">Kicking And Screaming</option>
            <option value="Wimbledon">Wimbledon</option>
          </select>
          <p>LOCATION</p>
          <input onChange={e => updateLocation(e.target.value)} />
          <p>GENDER</p>
          <input onChange={e => updateGender(e.target.value)} />
          <p>AGE</p>
          <input onChange={e => updateAge(e.target.value)} />
          <p>HOMETOWN</p>
          <input onChange={e => updateHometown(e.target.value)} />
          <Link to="/login">
            <button onClick={() => this.submitRegistration()}>Submit</button>
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
    // updateAdultUsername,
    // updateAdultPassword,
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
