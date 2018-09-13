import React, { Component } from "react";
import axios from "axios";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.login = this.login.bind(this);
  }

  login() {
    axios.get("/login").then(response => {
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
          <h1>LOGIN</h1>
          {/* <h5>New Users: Create new username and password to get started!</h5>
          <input
            onChange={e => this.handleChange(e)}
            placeholder="Username"
            name="username"
          />
          <input
            onChange={e => this.handleChange(e)}
            placeholder="Password"
            name="password"
          /> */}
          <a href="http://localhost:3001/login">LOGIN</a>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Login;

// const mapStateToProps = state => ({ ...state.registration_reducer });

// export default connect(
//   mapStateToProps,
//   {
//     updateAdultUsername,
//     updateAdultPassword,
//     updateKidUsername,
//     updateKidPassword
//   }
// )(Login);
