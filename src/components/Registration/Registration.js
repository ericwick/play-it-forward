import React, { Component } from "react";
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
  updateTeams
} from "../../ducks/registration_reducer";

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
      hometown
    } = this.props;
    axios
      .post("/registration", {
        player_name,
        team_name,
        sports,
        position,
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
          gender: response.data,
          age: response.data,
          hometown: response.data
        });
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
      updateHometown
    } = this.props;

    let teamOptions = this.props.teams.map((e, i) => {
      if (this.props.age >= 18 && e.age_range === "18+") {
        return (
          <select key={i}>
            <option>
              {e.team_name}
              {e.sport_type}
            </option>
          </select>
        );
      } else if (
        this.props.age < 18 &&
        this.props.age >= 14 &&
        e.age_range === "14-17"
      ) {
        return (
          <select key={i}>
            <option>
              {e.team_name}
              {e.sport_type}
            </option>
          </select>
        );
      } else if (
        this.props.age < 14 &&
        this.props.age >= 11 &&
        e.age_range === "11-13"
      ) {
        return (
          <select key={i}>
            <option value={e.team_name}>
              {e.team_name}
              {e.sport_type}
            </option>
          </select>
        );
      } else if (
        this.props.age < 11 &&
        this.props.age >= 9 &&
        e.age_range === "9-10"
      ) {
        return (
          <select key={i}>
            <option value={e.team_name}>
              {e.team_name}
              {e.sport_type}
            </option>
          </select>
        );
      } else if (
        this.props.age < 9 &&
        this.props.age >= 7 &&
        e.age_range === "7-8"
      ) {
        return (
          <select key={i}>
            <option value={e.team_name}>
              {e.team_name}
              {e.sport_type}
            </option>
          </select>
        );
      } else if (
        this.props.age < 7 &&
        this.props.age >= 5 &&
        e.age_range === "5-6"
      ) {
        return (
          <select key={i}>
            <option value={e.team_name}>
              {e.team_name}
              {e.sport_type}
            </option>
          </select>
        );
      } else {
        return (
          <select value="N/A" selected>
            <option>--Team Name--</option>
          </select>
        );
      }
    });

    console.log(teamOptions);

    return (
      <div>
        <div>
          <h2>REGISTRATION</h2>
          <p>FULL NAME</p>
          <input onChange={e => updatePlayerName(e.target.value)} required />
          <br />
          <p>HOMETOWN</p>
          <input onChange={e => updateHometown(e.target.value)} required />
          <br />
          <p>SPORTS</p>
          <input onChange={e => updateSports(e.target.value)} required />
          <br />
          <p>POSITION</p>
          <input onChange={e => updatePosition(e.target.value)} />
          <br />
          <p>GENDER</p>
          <input onChange={e => updateGender(e.target.value)} required />
          <br />
          <p>AGE</p>
          <input onChange={e => updateAge(e.target.value)} required />
          <br />
          <p>TEAM NAME</p>
          {teamOptions}
          {/* <input
            type="select"
            onChange={e => updateTeamName(e.target.value)}
            selectBoxOptions={teamOptions}
          /> */}
          <br />
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
    updateGender,
    updateAge,
    updateHometown,
    updateTeams
  }
)(Registration);
