import React, { Component } from "react";
import Nav from "../NavBar/Nav";
import Footer from "../Footer/Footer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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

    // MAKE THE PLAYER VARIABLE LOOK LIKE A TRADING CARD (IN CSS)

    let player = arr.map((e, i) => {
      return (
        <div key={i}>
          <div>
            <h1>{e.player_name}</h1>
          </div>
          <div>
            <Link to="/team">
              <h3>Team: {e.team_name}</h3>
            </Link>
            <Link to="/league">
              <h3>League: {e.league_name}</h3>
            </Link>
          </div>
          <div>
            <p>
              Hometown: {e.hometown}
              <br />
              Sport: {e.sport_type}
              <br />
              Position: {e.position}
              <br />
              Age: {e.age}
            </p>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div>
          <Nav />
        </div>
        <h2>PLAYER PROFILE</h2>
        <div>{player}</div>

        <Link to="/edit">Edit Profile</Link>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.getReducer });

export default connect(
  mapStateToProps,
  { updateSportsInfo }
)(Player);
