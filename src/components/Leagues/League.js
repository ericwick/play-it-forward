import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateSportsInfo, updateLeague } from "../../ducks/get_reducer";
// import Nav from "../NavBar/Nav";
// import Footer from "../Footer/Footer";

class League extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.updateSportsInfo();
    this.props.updateLeague();
  }

  render() {
    let { sportsInfo, leagues } = this.props;
    let arr = [];
    arr.push(sportsInfo);

    console.log(leagues);

    let division = leagues.map((e, i) => {
      return (
        <div key={i}>
          {e.team_name}
          {e.record}
        </div>
      );
    });

    let league = arr.map((e, i) => {
      return (
        <div key={i}>
          <div>
            <h1>{e.league_name}</h1>
          </div>

          <Link to="/player">
            <h6>Back to Profile Page</h6>
          </Link>

          <Link to="/team">
            <h6>Back to Team Page</h6>
          </Link>

          <div>
            Sport: {e.sport_type}
            <br />
            <ul>
              Teams: {e.teams}
              <li>{division}</li>
            </ul>
            Age Range: {e.age_range}
            <br />
            Gender: {e.gender}
            <br />
            Location: {e.location}
          </div>
        </div>
      );
    });
    return (
      <div>
        {/* <div>
          <Nav />
        </div> */}
        <h4>LEAGUE NAME</h4>
        <div>{league}</div>
        {/* <div>
          <Footer />
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.getReducer });

export default connect(
  mapStateToProps,
  {
    updateSportsInfo,
    updateLeague
  }
)(League);
