import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Nav from "../NavBar/Nav";
import {
  updateAdultUsername,
  updateAdultPassword,
  updateKidUsername,
  updateKidPassword
} from "../../ducks/registration_reducer";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.adultLogin = this.adultLogin.bind(this);
    this.kidLogin = this.kidLogin.bind(this);
  }

  adultLogin() {
    axios.get("/adultlogin").then(response => {
      return response.data;
    });
  }

  kidLogin() {
    const { username, password } = this.state;
    axios.post("/loginkid", { username, password }).then(response => {
      return response.data;
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <div>
          <Nav />
        </div>
        <div>
          <h3>ADULT LOGIN</h3>
          <h5>New Users: Create new username and password to get started!</h5>
          <input
            onChange={e => this.handleChange(e)}
            placeholder="Username"
            name="username"
          />
          <input
            onChange={e => this.handleChange(e)}
            placeholder="Password"
            name="password"
          />
          <a href="http://localhost:3001/adultlogin">LOGIN</a>
        </div>
        <div>
          <h3>KIDS' LOGIN</h3>
          <h5>New Users: Create new username and password to get started!</h5>
          <input
            onChange={e => this.handleChange(e)}
            placeholder="Username"
            name="username"
          />
          <input
            onChange={e => this.handleChange(e)}
            placeholder="Password"
            name="password"
          />
          <a href="http://localhost:3001/kidlogin">LOGIN</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.registration_reducer });

export default connect(
  mapStateToProps,
  {
    updateAdultUsername,
    updateAdultPassword,
    updateKidUsername,
    updateKidPassword
  }
)(Login);
