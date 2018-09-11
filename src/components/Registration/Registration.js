import React, { Component } from "react";
// import "./Registration.css";
import axios from "axios";
import Nav from "../NavBar/Nav";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  updatePlayerName,
  updateTeamName,
  updateSports,
  updatePosition,
  updateLeagueName,
  updateGender,
  updateAge,
  updateHometown
} from "../../ducks/registration_reducer";

class Registration extends Component {
  constructor() {
    super();
    this.state = {};
    this.submitRegistration = this.submitRegistration.bind(this);
  }

  submitRegistration() {
    console.log(this.props);
    let {
      player_name,
      team_name,
      sports,
      position,
      league_name,
      gender,
      age,
      hometown
    } = this.props;
    axios
      .post("/registration", {
        player_name,
        team_name,
        sports,
        position,
        league_name,
        gender,
        age,
        hometown
      })
      .then(response => {
        console.log(response);
        this.setState({
          player_name: response.data,
          team_name: response.data,
          sports: response.data,
          position: response.data,
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
      updatePlayerName,
      updateTeamName,
      updateSports,
      updatePosition,
      updateLeagueName,
      updateGender,
      updateAge,
      updateHometown
    } = this.props;

    return (
      <div>
        <div>
          <Nav />
        </div>

        <div>
          <h2>ADULT REGISTRATION</h2>
          <p>FULL NAME</p>
          <input onChange={e => updatePlayerName(e.target.value)} />
          <p>TEAM NAME</p>
          <input onChange={e => updateTeamName(e.target.value)} />
          <p>SPORTS</p>
          <input onChange={e => updateSports(e.target.value)} />
          <p>POSITION</p>
          <input onChange={e => updatePosition(e.target.value)} />
          <p>LEAGUE NAME</p>
          <select onChange={e => updateLeagueName(e.target.value)}>
            <option value="Premier">Premier</option>
            <option value="Big 12">Big 12</option>
            <option value="Kicking And Screaming">Kicking And Screaming</option>
            <option value="Wimbledon">Wimbledon</option>
          </select>
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
    updatePlayerName,
    updateTeamName,
    updateSports,
    updatePosition,
    updateLeagueName,
    updateGender,
    updateAge,
    updateHometown
  }
)(Registration);
