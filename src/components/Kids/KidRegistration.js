import React, { Component } from "react";
import "./KidRegistration.css";
import axios from "axios";
import Nav from "../NavBar/Nav";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  // updateKidUsername,
  // updateKidPassword,
  updatePlayerName,
  updateSports,
  updateTeamName,
  updateLocation,
  updateAge,
  updateGender,
  updateHometown,
  updateLeagueName
} from "../../ducks/registration_reducer";

class KidRegistration extends Component {
  constructor() {
    super();
    this.state = {};
    this.submitRegistration = this.submitRegistration.bind(this);
  }

  submitRegistration() {
    let {
      // kidusername,
      // kidpassword,
      player_name,
      sports,
      team_name,
      location,
      league_name,
      gender,
      age,
      hometown
    } = this.props;
    axios
      .post("/kidregistration", {
        // kidusername,
        // kidpassword,
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
          // kidusername: response.data,
          // kidpassword: response.data,
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
      // updateKidUsername,
      // updateKidPassword,
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
      <div className="kidregister">
        <div className="nav">
          <Nav />
        </div>
        <div className="form">
          <h2>KIDS' REGISTRATION</h2>
          {/* <p>USERNAME</p>
          <input onChange={e => updateKidUsername(e.target.value)} />
          <p>PASSWORD</p>
          <input onChange={e => updateKidPassword(e.target.value)} /> */}
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
          <Link to="/kidleagues">
            <button onClick={() => this.submitRegistration()}>Register</button>
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
    // updateKidUsername,
    // updateKidPassword,
    updatePlayerName,
    updateSports,
    updateTeamName,
    updateLocation,
    updateLeagueName,
    updateGender,
    updateAge,
    updateHometown
  }
)(KidRegistration);
