import React, { Component } from "react";
import "../Home/Home.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser } from "../../ducks/get_reducer";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      userNav: false
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.props.updateUser();
  }

  render() {
    console.log(this.props);
    return (
      <header className="header">
        <nav className="navbar">
          <div className="icon">
            <img alt="" src="" />
          </div>
          <div className="linkscontainer">
            {this.props.sportsInfo && this.props.sportsInfo.auth_id ? (
              <ul className="navlinks">
                <Link to="/">
                  <li className="links">HOME</li>
                </Link>
                <Link to="/about">
                  <li className="links">ABOUT</li>
                </Link>
                <Link to="/donate">
                  <li className="links">DONATE</li>
                </Link>
                <Link to="/player">
                  <li className="links">PROFILE</li>
                </Link>
                <Link to="/team">
                  <li className="links">TEAM</li>
                </Link>
                <Link to="/league">
                  <li className="links">LEAGUE</li>
                </Link>
                <Link to="/logout">
                  <li className="links">LOGOUT</li>
                </Link>
              </ul>
            ) : (
              <ul className="navlinks">
                <Link to="/">
                  <li className="links">HOME</li>
                </Link>
                <Link to="/about">
                  <li className="links">ABOUT</li>
                </Link>
                <Link to="/donate">
                  <li className="links">DONATE</li>
                </Link>
                <Link to="/login">
                  <li className="links">LOGIN</li>
                </Link>
                <Link to="/registration">
                  <li className="links">REGISTER</li>
                </Link>
              </ul>
            )}
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({ ...state.getReducer });

export default connect(
  mapStateToProps,
  { updateUser }
)(Nav);
