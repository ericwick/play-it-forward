import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
    this.state = {
      username: "",
      password: ""
    };
    this.adultLogin = this.adultLogin.bind(this);
    this.kidLogin = this.kidLogin.bind(this);
  }

  adultLogin() {
    axios.get("/api/adultlogin").then(response => {
      return response.data;
    });
  }

  kidLogin() {
    const { username, password } = this.state;
    axios.post("/api/loginkid", { username, password }).then(response => {
      return response.data;
    });
  }

  handleChange(e) {
    if (!this.props.adultusername) {
      this.setState({
        adultusername: e.target.value
      });
    }
    if (!this.props.adultpassword) {
      this.setState({
        adultpassword: e.target.value
      });
    }
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
          <a href="http://localhost:3001/api/adultlogin">LOGIN</a>
          {/* <Link to="/adultleagues">
            <button onClick={this.adultLogin}>Login</button>
          </Link> */}
        </div>
        <div>
          <h3>KIDS' LOGIN</h3>
          <h5>New Users: Create new username and password to get started!</h5>
          <input
            onChange={e => this.handleChange(e.target.value)}
            placeholder="Username"
            name="username"
          />
          <input
            onChange={e => this.handleChange(e.target.value)}
            placeholder="Password"
            name="password"
          />
          <Link to="/kidleagues">
            <button onClick={this.kidLogin}>Login</button>
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
    updateAdultUsername,
    updateAdultPassword,
    updateKidUsername,
    updateKidPassword
  }
)(Login);
