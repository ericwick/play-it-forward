import React, { Component } from "react";
import "./Player.css";
import Edit from "./Edit";
import axios from "axios";
import Registration from "../Registration/Registration";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateSportsInfo } from "../../ducks/get_reducer";
import "./Carousel.css";
import { Carousel } from "react-responsive-carousel";

class Player extends Component {
  constructor() {
    super();
    this.state = {
      editMode: false,
      profileImg: []
    };
    this.updateProfilePic = this.updateProfilePic.bind(this);
  }

  componentDidMount() {
    this.props.updateSportsInfo();
    axios.get("/profile/images").then(response => {
      console.log(response, "pictures response");
      this.setState({ profileImg: response.data });
    });
  }

  updateProfilePic(e) {
    this.setState({
      profileImg: e.target.value
    });
  }

  render() {
    let profilePic = this.state.profileImg.map((e, i, arr) => {
      return <img src={e.avatar} alt="" className="profilepicture" />;
    });

    let coverPhotos = this.state.profileImg.map((e, i, arr) => {
      if (e.image !== null) {
        return <img src={e.image} alt="" />;
      }
    });

    console.log(coverPhotos);

    let { sportsInfo } = this.props;
    let arr = [];
    arr.push(sportsInfo);

    let player = arr.map((e, i) => {
      return (
        <div className="playerspacer" key={i}>
          <div key={i} id="profilecard">
            <h1 id="playerName">{e.player_name}</h1>
            <div className="teamleaguelinks">
              <Link to="/team" className="playerpagelink">
                <h3 className="team">TEAM: {e.team_name}</h3>
              </Link>
              <Link to="/league" className="playerpagelink">
                <h3 className="league">LEAGUE: {e.league_name}</h3>
              </Link>
            </div>
          </div>
          <div className="playerprofileinfo">
            <p className="info">
              HOMETOWN: {e.hometown}
              <br />
              SPORT: {e.sport_type}
              <br />
              POSITION: {e.position}
              <br />
              AGE: {e.age}
            </p>
          </div>
          <div>
            <Edit
              updateProfilePic={this.updateProfilePic}
              profileImg={this.state.profileImg}
            />
          </div>
        </div>
      );
    });

    return (
      <div id="playerprofilepage">
        {this.props.sportsInfo.auth_id ? (
          <div id="playerCard">
            <Carousel>
              <div>{coverPhotos}</div>
            </Carousel>
            {profilePic}
            {player}
          </div>
        ) : (
          <Registration />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.getReducer });

export default connect(
  mapStateToProps,
  { updateSportsInfo }
)(Player);
