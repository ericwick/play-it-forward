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
    return (
      <header className="header">
        <nav className="navbar">
          <h4>PiF</h4>

          <div className="linkscontainer">
            {this.props.sportsInfo && this.props.sportsInfo.auth_id ? (
              <ul className="navlinks">
                <Link to="/" className="link">
                  <li className="links">HOME</li>
                </Link>
                <Link to="/about" className="link">
                  <li className="links">ABOUT</li>
                </Link>
                <Link to="/donate" className="link">
                  <li className="links">DONATE</li>
                </Link>
                <Link to="/player" className="link">
                  <li className="links">PROFILE</li>
                </Link>
                <Link to="/team" className="link">
                  <li className="links">TEAM</li>
                </Link>
                <Link to="/league" className="link">
                  <li className="links">LEAGUE</li>
                </Link>
                <Link to="/logout" className="link">
                  <li className="links">LOGOUT</li>
                </Link>
              </ul>
            ) : (
              <ul className="navlinks">
                <Link to="/" className="link">
                  <li className="links">HOME</li>
                </Link>
                <Link to="/about" className="link">
                  <li className="links">ABOUT</li>
                </Link>
                <Link to="/donate" className="link">
                  <li className="links">DONATE</li>
                </Link>
                <Link to="/login" className="link">
                  <li className="links">LOGIN</li>
                </Link>
                <Link to="/registration" className="link">
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
