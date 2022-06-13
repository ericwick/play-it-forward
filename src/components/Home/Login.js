import React, { Component } from 'react';
import axios from 'axios';
// import "../Home/Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.login = this.login.bind(this);
  }

  login() {
    axios.get('/login').then((response) => {
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
      <a href={''} className='login-link'>
        <button className='login'>PLAY NOW</button>
      </a>
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
