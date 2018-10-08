import React, { Component } from "react";
import "./Home.css";
import "./bootstrap.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser } from "../../ducks/get_reducer";
import Login from "./Login";
import Social from "./Social";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.updateUser();
  }

  render() {
    return (
      <div>
        <div id="title">
          <h1 className="websitetitle">PLAY IT FORWARD</h1>
          <div className="playitforwardhomedescrip" />
          <Login />
          <Social />
          <Link to="/about">
            <button className="titlelearnmore">Learn More</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.getReducer });

export default connect(
  mapStateToProps,
  { updateUser }
)(Home);
