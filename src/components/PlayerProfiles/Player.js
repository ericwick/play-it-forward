import React, { Component } from "react";
import Nav from "../NavBar/Nav";
import { connect } from "react-redux";
import { updateSportsInfo } from "../../ducks/get_reducer";

class Player extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.updateSportsInfo();
  }

  render() {
    let { sportsInfo } = this.props;
    let arr = [];
    arr.push(sportsInfo);
    console.log(arr);
    return (
      <div>
        <Nav />
        <h2>PLAYER PROFILE</h2>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.getReducer });

export default connect(
  mapStateToProps,
  { updateSportsInfo }
)(Player);
